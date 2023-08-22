const counter = document.querySelector('p')
let count = 0;
function change(button){
    if(button == plus){
        count += 1;
    }else if(button == minus){
        count -= 1;
    }else if (button == reset ){
        count = 0;
    }
    counter.innerHTML = count;
}