let result = document.querySelector("body");
let button = document.querySelector("button");
let h1 = document.querySelector("h1");

button.addEventListener("click", () =>{
    let color = '#'
    color +=  Math.random().toString(16).slice(2,8)
    // console.log(color)
    result.style.backgroundColor = color; 
    h1.innerText = color;
});
