var pattern = []
colors = ['red', 'green', 'blue', 'yellow'];
var started = false;
var userChosen = [];
var level = 1;

$(document).keypress(function () {
    if (!started){
      game();
      started = true;
  }
});

$('.btn').click(function(){
  var ids = $(this).attr('id');
  userChosen.push(ids);
  playSound(ids);
  animate(ids)

  checkAnswer(userChosen.length-1)
});


function checkAnswer(currentLevel){
  if (pattern[currentLevel] === userChosen[currentLevel]){
    if (userChosen.length === pattern.length){
      setTimeout(function(){
        game();
      },1000);
    }
  }else{
    $('h1').text('Game Over, Press Any Key to Restart')
    playSound('wrong')
      $('body').addClass('game-over');
      setTimeout(function(){
        $('body').removeClass('game-over');
      }, 200);

      startOver();
  };

};


function playSound(name){
    var ad = new Audio("./" + name + ".mp3");
    ad.play();
  }


function animate(name){
    var self = $('#' + name);
    self.addClass("pressed");
    setTimeout(function(){
        self.removeClass("pressed");
    }, 100);
};


function game(){
  userChosen = []
  $('h1').text("Level " + level);
  level++;
  var number = Math.floor(Math.random()*4);

  chosenColor = colors[number];
  pattern.push(chosenColor);
  $("#" + chosenColor).fadeOut(100).fadeIn(100);
  playSound(chosenColor);
}


function startOver(){
  level = 1;
  started = false;
  pattern = [];
}
