# Simon Game - Memory Sequence Challenge

A browser-based implementation of the classic Simon memory game, built with vanilla JavaScript and jQuery. The game generates a growing sequence of colored button flashes accompanied by distinct sound effects, and the player must repeat the sequence from memory. Each correct round advances the level and extends the sequence by one step.

## Key Features

- **Progressive Level System** - The sequence grows by one color each round; the current level is displayed in the heading as the game advances
- **Four Colored Buttons** - Red, green, blue, and yellow buttons each have a unique audio tone that plays when activated (both by the game and by the player)
- **Sound Feedback** - Each color plays a corresponding MP3 audio file (red.mp3, green.mp3, blue.mp3, yellow.mp3); a wrong.mp3 tone plays on a mistake
- **Visual Press Animation** - Buttons flash with a CSS "pressed" animation when activated, giving clear visual feedback during both the sequence playback and user input
- **Game Over Detection** - Incorrect input triggers a "Game Over" message with a full-screen red flash animation, then resets the game state
- **Keyboard Start** - Press any key to start a new game from the title screen

## Tech Stack

| Layer | Technologies |
|---|---|
| Language | JavaScript (ES5) |
| DOM Manipulation | jQuery 3.7.1 |
| Markup | HTML5 |
| Styling | CSS3 (custom + Google Fonts "Press Start 2P") |
| Audio | HTML5 Audio API |

## Setup and Installation

No build step required. This is a fully static application.

1. Clone the repository:
   ```bash
   git clone https://github.com/moksh555/simon-game.git
   cd simon-game
   ```
2. Open index.html directly in your browser.

## How to Play

1. Open the game in a browser - the screen shows "Press A Key to Start"
2. Press any key on your keyboard to begin
3. Watch the button sequence that lights up and listen to the tones
4. Click the buttons in the same order as the sequence
5. Each correct round adds one more step to the sequence
6. If you press the wrong button, the game ends - press any key to restart
