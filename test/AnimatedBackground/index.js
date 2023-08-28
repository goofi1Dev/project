const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

let particles = [];
const colors = [
    'white',
    'rgba(255, 255 , 255 ,0.3)',
    'rgba(173, 216 , 230 ,0.8)',
    'rgba(211, 211 ,  211 ,0.3)'
];

const maxsize = 40;
const minsize = 0;
const mouseRadius = 60;

let mouse = {
    y: null,
    x: null,
}

window.addEventListener('mouse', function(event){
    mouse.x = event.x
    mouse.y = event.y
    console.log(mouse);
});

function particles(x , y , directionX, directionY , size , colors) {
    this.x = x
    this.y = y
    this.directionX = directionX
    this.directionY = directionY
    this.size = size
    this.colors = colors
}

particles.prototype.draw = function(){
    ctx.beginPath();
    ctx.arc(this.x , this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillstyle = this.colors
    ctx.fill();
}
particles.prototype.update = function(){
    if(this.x + this.size * 2 > canvas.width || this.x - this.size * 2 < 0 ){
        this.directionX = -this.directionX;
    } 
    if(this.y + this.size * 2 > canvas.height || this.y - this.size * 2 < 0 ){
        this.directionY = -this.directionY;
    }

    this.x += this.directionX;
    this.y += this.directionY;

    let mouseRadius = 50;
    if(mouse.x - this.x < mouseRadius
        && mouse.x - this.x > -mouseRadius
        && mouse.y - this.y < mouseRadius
        && mouse.y - this.y > -mouseRadius){
        if(this.size){
            this.size += 3; 
            this.x -= 1.5;
            }
        }else if (this.size > minsize){
            this.size -= 1 ;
        } 
        if(this.size < 0 ){
            this.size = 0;
        }
        this.draw()
}

function init(){
    particleArray = [];
    for(let i = 0; i < 1000; i++){
        let size = 10; 
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2)
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2)
        let directionX = (Math.random() * .2) - .1;
        let directionY = (Math.random() * .2) - .1;
        let colour =  colors[Math.floor(Math.random() * colors.length)]

        particles.puch(new particles(x , y ,directionX, directionY, colour))
        console.log(particleArray);
    }
}

function animate(){

    requestAnimationFrame(animate);
    ctx.clearReact(0 , 0 , innerWidth ,innerHeight)

    for(let i = 0; i < particleArray.length; i++){
        particleArray[i].update()
    }
}

init()
animate()

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    init();
})

setInterval(function (){
    mouse.x = undefined;
    mouse.y = undefined;
},1000)