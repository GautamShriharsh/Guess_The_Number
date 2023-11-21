const random_number = parseInt(Math.random()*100 + 1) ;
// console.log(random_number);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
   // 
   if(isNaN(guess)){
    alert('Please enter a valid number')
  } else if(guess < 1){
    alert('Please enter a number greater than 1')
} else if(guess > 100){
    alert('Please enter a number less than 100')
} else {
    prevGuess.push(guess)
    if (numGuess ===  11){
        displayGuess(guess)
        displayMessage(`Game Over. Random number was ${random_number}`)
        endGame()
    } else {
        displayGuess(guess)
        checkGuess(guess)
    }
}
}

function checkGuess(guess){
   if(guess === random_number){
    displayMessage('You guess it right')
    endGame()   
} else if(guess < random_number){
    displayMessage("Number is TOO low")

} else if(guess > random_number){
    displayMessage("Number is TOO high")

}

}

function displayGuess(guess){
 userInput.value = ''
 guessSlot.innerHTML = 
}

function displayMessage(message){
// 
}

function endGame(){
    //
}

function newGame(){

}


