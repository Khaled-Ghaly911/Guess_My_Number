'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct answer'

// document.querySelector('.number').textContent = 23
// document.querySelector('.score').textContent = 23

// document.querySelector('.guess').value = 67
// console.log(document.querySelector('.guess').value)

let score = 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
const editMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener
('click', function(){
    const guess = Number(document.querySelector('.guess').value)
    //when there is no number 
    if(!guess){
        editMessage('No number exists⛔.');
    //when the number is correct 
    }else if(guess === secretNumber){
        editMessage('🎉 correct answer')
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = ' 30rem';
        document.querySelector('.number').textContent = secretNumber;
        if(highScore < score){
            highScore = score
            document.querySelector('.highscore').textContent = highScore
        }
    }else if(guess !== secretNumber){
        if(score > 1){
            editMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            editMessage('💥 You Lost The Game.')
            document.querySelector('.score').textContent = 0;
        }
    }
    // //when the number is too low
    // else if(guess < secretNumber){
    //     if(score > 1){
    //         document.querySelector('.message').textContent = '📉 Too Low'
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }else{
    //         document.querySelector('.message').textContent = '💥 You Lost The Game.'
    //         document.querySelector('.score').textContent = 0;
    //     }
    //     //when the number is too high
    // }else if(guess > secretNumber){
    //     if(score > 1){
    //         document.querySelector('.message').textContent = '📈 Too High'
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }else{
    //         document.querySelector('.message').textContent = '💥 You Lost The Game.'
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }

})


document.querySelector('.again').addEventListener('click', function(){
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    editMessage('Start guessing...')
    document.querySelector('.score').textContent = 20 
    document.querySelector('.number').textContent = '?'

})