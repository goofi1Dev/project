const board = document.querySelector('#board');
const square_Number = 500;

for (let i = 0; i < square_Number; i++) {
    const square = document.createElement('div'); 
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square), {});
    square.addEventListener('mouseleave', () => removeColor(square), {});

    board.append(square);
}

function setColor(element){
    const color = '#';
    let random = Math.random().toString(16).slice(2,8);
    let result = color + random
    // console.log( color + random);
    element.style.backgroundColor = result;
    element.style.boxShadow = `0 0 2px ${result} , 0 0 50px ${result}`;
}

function removeColor(element){
    element.style.backgroundColor = '#1d1d1d';  
    element.style.boxShadow = `0 0 2px black`;

}
// function getRandomColor(){
//     const color = '#';
//     let random = Math.random().toString(16).slice(2,8);
//     console.log( color + random);
    
// }