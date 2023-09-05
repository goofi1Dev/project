const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeL = document.querySelector('#time');
const board = document.querySelector('#board');
let time = 0;
let score =  0;


startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    screens[0].classList.add('up');
});

timeList.addEventListener('click', event =>{
    if(event.target.classList.contains('time-btn')){
    time = parseInt(event.target.getAttribute('data-time'));
    screens[1].classList.add('up');   
    startGame()
    }
});

board.addEventListener('click', event =>{
    if(event.target.classList.contains('circle')){
        score++;
        event.target.remove()
        createRandomAim()
    }
});

function startGame(){
    setInterval(decreaseTime,1000)
    createRandomAim()
    setTime(time)
}

function decreaseTime(){
    if (time === 0){
        finichGame()
    }else{
    let current = --time
    if(current < 10){
        current = `0${current}`;
    }
    setTime(current)
    }
}

function setTime(value){
    timeL.innerHTML = `00:${value}`
}

function finichGame(){
    timeL.parentNode.classList.add('hide')
    board.innerHTML = `<h1>scorne <span class="primary"> ${score}</span> </h1>`
}

function createRandomAim(){
    const circle = document.createElement('div');
    const size = getRandomNum(10,60);
    const {width,height} = board.getBoundingClientRect();
    const x = getRandomNum(0,width - size);
    const y = getRandomNum(0,height - size); 
    circle.classList.add('circle');
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;

    board.append(circle);
    let color = '#';
    let random = Math.random().toString(16).slice(2,8);
    let result = color + random;
    // console.log(result);
    circle.style.background = result;
}

function getRandomNum(min,max) {
    return Math.round(Math.random() * (max - min) + min)
}


function winGame() {
    function kill(){
        const circle = document.querySelector('.circle');
        if(circle){
            circle.click();
        }
    }
    setInterval(kill,16)
}