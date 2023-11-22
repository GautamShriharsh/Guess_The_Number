# Number Guessing Game
This simple JavaScript project implements a number guessing game where the user tries to guess a random number between 1 and 100. The game provides feedback on whether the guessed number is too low, too high, or correct. The user has a maximum of 10 attempts to guess the right number.

# How to Play
1. Open the provided HTML file in a web browser.
2. Enter your guess in the input field provided.
3. Click the "Submit guess" button to submit your guess.
4. Receive feedback on whether your guess is too low, too high, or correct.
5. Continue guessing until you either guess the correct number or exhaust your 10 attempts.
# Features
* Random Number Generation: A random number between 1 and 100 is generated at the start of each game.
* Input Validation: The game validates user input to ensure it's a valid number within the specified range.
* Feedback Display: The game provides feedback on whether the guess is too low, too high, or correct.
* Attempts Counter: The remaining attempts are displayed, and the game ends after 10 attempts.
* End Game and Start New Game: Once the game ends, the user can start a new game by clicking the "Start New Game" button.
# Code Explanation
The JavaScript code uses DOM manipulation to interact with HTML elements, event listeners to capture user input, and functions to handle different aspects of the game, such as validating guesses, updating the UI, and managing the game state.

# Game Logic Functions
* validateGuess: Validates the user's guess and calls other functions based on the result.
* checkGuess: Checks whether the guess is too low, too high, or correct.
* displayGuess: Displays the user's guess and updates the remaining attempts.
* displayMessage: Displays a message based on the outcome of the guess.
* endGame: Ends the game, disables further input, and provides an option to start a new game.
* newGame: Resets the game state for a new round.
# Event Listeners
Event listener on the "Submit guess" button to capture user input and initiate the game logic.
# How to Start a New Game
* Click the "Start New Game" button after the game has ended to reset and start a new round.  
Feel free to explore and modify the code to add more features or customize the game to suit your preferences. Enjoy playing the number guessing game!