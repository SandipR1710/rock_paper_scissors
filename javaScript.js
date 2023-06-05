
const choices = ["Rock", "Paper", "Scissors"];
const getComputerChoice = () => {
    let n = Math.floor(Math.random() * 3);
    return choices[n];
}
function playRound(playerSelection, computerSelection) {
    let ps = playerSelection.toUpperCase();
    let cs = computerSelection.toUpperCase();
    // your code here!
    if (ps === "ROCK") {
        if (cs === "ROCK") {
            return "It's a tie.Play again!";
        }
        else if (cs === "PAPER") {
            return "You Lose! Paper beats Rock";
        }
        else {
            const score=document.querySelector('.score');
            let sc=parseInt(score.textContent);
            sc++;
            score.textContent=sc;
            return "You Win! Rock beats Scissors";
        }
    }
    else if (ps === "PAPER") {
        if (cs === "ROCK") {
            const score=document.querySelector('.score');
            let sc=parseInt(score.textContent);
            sc++;
            score.textContent=sc;
            return "You Win! Paper beats Rock";
        }
        else if (cs === "PAPER") {
            return "It's a tie.Play again!";
        }
        else {
            return "You Lose! Scissors beats Paper";
        }
    }
    if (cs === "ROCK") {
        return "You Lose! Rock beats Scissors";
    }
    else if (cs === "PAPER") {
        const score=document.querySelector('.score');
        let sc=parseInt(score.textContent);
        sc++;
        score.textContent=sc;
        return "You Win! Scissors beats Paper";
    }
    else {
        return "It's a tie.Play again!";
    }
}
let count=0;
const rock=document.querySelector('#rock');
rock.addEventListener('click',function(e){
    if(count==5){
        const score=document.querySelector('.score');
        let sc=parseInt(score.textContent);
        if(sc>2){
            alert('You won!');
        }
        else{
            alert('You lose!');
        }
        window.location.reload();
    }
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    const msg = playRound(playerSelection, computerSelection);
    console.log(msg);
    count++;
});
const paper=document.querySelector('#paper');
paper.addEventListener('click',function(e){
    if(count==5){
        const score=document.querySelector('.score');
        let sc=parseInt(score.textContent);
        if(sc>2){
            alert('You won!');
        }
        else{
            alert('You lose!');
        }
        window.location.reload();
    }
    const playerSelection = 'paper';
    const computerSelection = getComputerChoice();
    const msg = playRound(playerSelection, computerSelection);
    console.log(msg);
    count++;
});
const Scissors=document.querySelector('#scissors');
Scissors.addEventListener('click',function(e){
    if(count==5){
        const score=document.querySelector('.score');
        let sc=parseInt(score.textContent);
        if(sc>2){
            alert('You won!');
        }
        else{
            alert('You lose!');
        }
        window.location.reload();
    }
    const playerSelection = 'scissors';
    const computerSelection = getComputerChoice();
    const msg = playRound(playerSelection, computerSelection);
    console.log(msg);
    count++;
});
// function game() {
//     let w = 0;
//     let l = 0;
//     for (let i = 0; i < 5; i++) {
//         const playerSelection = prompt("Enter yout choice!");
//         const computerSelection = getComputerChoice();
//         const msg = playRound(playerSelection, computerSelection);
//         if (msg[4] === 'W') w++;
//         else if (msg[4] === 'L') l++;
//         console.log(msg);
//     }
//     if (w > l) {
//         console.log("You are the winner!");
//     }
//     else if (w < l) {
//         console.log("Computer is the winner!");
//     }
//     else {
//         console.log("Tie!");
//     }
// }
// game();