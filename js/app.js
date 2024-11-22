/*-------------------------------- Constants --------------------------------*/
const state = {
    boredom : 0,
    hunger : 0,
    sleepiness : 0
};

/*---------------------------- Variables (state) ----------------------------*/


let timer = null;
let gameOver = false;
/*------------------------ Cached Element References ------------------------*/
// 2) Store cached element references.
const boredomStatEl = document.getElementById('boredom-stat');
const hungerStatEL = document.getElementById('hunger-stat');
const sleepinessStatEl = document.getElementById('sleepiness-stat');

const playBtnEl = document.getElementById('play');
const feedBtnEl = document.getElementById('feed');
const sleepBtnEl = document.getElementById('sleep');

const gameMessageEl = document.getElementById('message');
const restartMessageEl = document.getElementById('restart');
/*-------------------------------- Functions --------------------------------*/
function init (){
    gameMessageEl.classList.add('hidden');
    restartMessageEl.classList.add('hidden');
    state.boredom = 0;
    state.hunger = 0;
    state.sleepiness = 0;
    timer = setInterval(runGame, 2000);
}

function playBtnClick () {
    state.boredom = 0;
    render();
}

function feedBtnClick () {
    state.hunger = 0;
    render();
}

function sleepinessStatClick () {
    state.sleepiness = 0;
    render();
}

function checkGameOver(){
    console.log(state);
    if(state.boredom > 9){
        gameOver = true;
    } else if (state.hunger > 9){
        gameOver = true;
    } else if (state.sleepiness > 9){
        gameOver = true;
    }
}

function runGame(){
    updateStates();
    checkGameOver();
    render();
}

function render(){
    if(gameOver){
        clearInterval(timer);
        gameMessageEl.classList.remove('hidden');
        restartMessageEl.classList.remove('hidden');
    }
    boredomStatEl.textContent = state.boredom;
    hungerStatEL.textContent = state.hunger;
    sleepinessStatEl.textContent = state.sleepiness;

}

function updateStates(){
    state.boredom += Math.floor(Math.random() * 6);
    state.hunger += Math.floor(Math.random() * 6);
    state.sleepiness += Math.floor(Math.random() * 6);
}

init();
render();

/*----------------------------- Event Listeners -----------------------------*/
playBtnEl.addEventListener('click', playBtnClick);
feedBtnEl.addEventListener('click', feedBtnClick);
sleepBtnEl.addEventListener('click', sleepinessStatClick);
restartMessageEl.addEventListener('click', init);










