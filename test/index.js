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

const array2 = [40,20,90,30,60,70,10,50];
array2.sort()
console.log(array2);
// autput 10 20 30 40 50 60 70 90

const names = ['Ember','Jon','Anna','Bob','Mike','Alex'];
names.sort();
console.log(names);
// a b c d e f 

const age = [10,20,30,40,50,80,90]
const old = age.find(function(ages){
    return ages>29
})
console.log(old);
// autput 30
const price = [10,20,30,40,50,80,90]
const product = price.filter(function(products){
    return products > 19
})
console.log(product);   
// autput 20 30 40 50 80 90
const price2 = [10,20,30,40,50];
const sale = price2.map(function(num){
    return num*2
})
console.log(sale);
// autput 20  40 60 80 100 
const fruit = ['apple', 'orange', 'banana']
fruit.push('mango')
fruit.pop()
fruit.unshift('limone')
fruit.shift()
console.log(fruit);
// // /// 

let day = 3 ;
switch(day){
    case 1:
        console.log('day 1')
        break;
    case 2:
        console.log('day 2')
        break;
    case 3:
        console.log('day 3')
        break;
    case 4:
        console.log('day 4')
        break;
    case 5:
        console.log('day 5')
        break;
    case 6:
        console.log('day 6')
        break;
    case 7:
        console.log('day 7')
        break;
}

/// // 
for (let i = 1 ; i <= 10; i++) {
    nam(i)
}

function nam(n){
    for(let i = 1;i <= 10; i++){
        let table = n * i
        console.log(table)
    }
}
//