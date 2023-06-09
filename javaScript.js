
const choices = ["Rock", "Paper", "Scissors"];
const getComputerChoice = () => {
    let n = Math.floor(Math.random() * 3);
    return choices[n];
}
let score=0;
let count=0;
function updateScore(){
    const sc=document.querySelector('.score');
    sc.textContent=score.toString();
}
function playRound(playerSelection, computerSelection) {
    let ps = playerSelection.toUpperCase();
    let cs = computerSelection.toUpperCase();
    if (ps === "ROCK") {
        if (cs === "SCISSORS") {
            score++;
        }
    }
    else if (ps === "PAPER") {
        if (cs === "ROCK") {
            score++;
        }
    }
    else if(ps === "SCISSORS"){
        if (cs === "PAPER") {
            score++;
        }
    }
    //alert(score);
    updateScore();
}
const rock=document.querySelector('#rock');
rock.addEventListener('click',function(e){
    const playerSelection = 'rock';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    count++;
    if(count===5){
        const winner=document.querySelector('.btext');
        if(score>2){
            winner.textContent='You win!';
        }
        else{
            winner.textContent='You Lose!';
        }
        // setTimeout(function(){
            
        //     window.location.reload()
        //   },500)
    }
});
const paper=document.querySelector('#paper');
paper.addEventListener('click',function(e){
    const playerSelection = 'paper';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    count++;
    if(count==5){
        const winner=document.querySelector('.btext');
        if(score>2){
            winner.textContent='You win!';
        }
        else{
            winner.textContent='You Lose!';
        }
        // setTimeout(function(){
            
        //     window.location.reload()
        //   },500)
    }
});
const Scissors=document.querySelector('#scissors');
Scissors.addEventListener('click',function(e){
    const playerSelection = 'scissors';
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    count++;
    if(count==5){
        const winner=document.querySelector('.btext');
        if(score>2){
            winner.textContent='You win!';
        }
        else{
            winner.textContent='You Lose!';
        }
        // setTimeout(function(){
            
        //     window.location.reload()
        //   },500)
    }
});
const p=document.querySelector('.pbtn');
p.addEventListener('click',function(e){
    window.location.reload();
});