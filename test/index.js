for(let i = 1; i < 121; i++) {
    console.log(`${i} . asdasd \n`)
}

let array = ['apple', 'mango' , 'banana'];
console.log(array)

let mix = [2,1,,4,5]
// console.log(mix.sort())


var n = 11;
function myfun(n) {
    if ( n <= 1){
        return n 
    }
    return console.log(n)
}
myfun(15);
// autput 15 

let num1 = 10;
let num2 = num1 >> 1 ;
console.log(num2);
// autput 5 

const num = 9; 
if(true){
    const num = 5;
}
console.log(num);
// autput 9 

var x = 10;
function myfunction(){
    console.log(x);
    var x = 5;
}
myfunction();
// autput undefined 

const a = [null , , null];
console.log(a[1]);
// autput undefined

const b = !!0;
console.log(b);
// autput false

const nm1 =[1,2,3]
const num_2 = nm1.fill(0);
console.log(num_2);
// autput [0,0,0]

const obj = {
    num: 20
}
delete obj.num;
console.log(obj.num);
// autput undefined

