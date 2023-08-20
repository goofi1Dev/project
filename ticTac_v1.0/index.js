
    function  chekWinner(){
        let allBlock = document.getElementsByClassName('game');
        // console.log(allBlock);
        if(allBlock[0].innerHTML == 'X' && allBlock[1].innerHTML == 'X'  && allBlock[2].innerHTML == 'X'){document.getElementById('ticTAc').style.backgroundColor = "red";
        document.getElementById('ticTAc').onclick = "";}
        if(allBlock[3].innerHTML == 'X' && allBlock[4].innerHTML == 'X'  && allBlock[5].innerHTML == 'X'){document.getElementById('ticTAc').style.backgroundColor = "red";
        document.getElementById('ticTAc').onclick = "";}
        if(allBlock[6].innerHTML == 'X' && allBlock[7].innerHTML == 'X'  && allBlock[8].innerHTML == 'X'){document.getElementById('ticTAc').style.backgroundColor = "red";
        document.getElementById('ticTAc').onclick = "";}
        if(allBlock[0].innerHTML == 'X' && allBlock[3].innerHTML == 'X'  && allBlock[6].innerHTML == 'X'){document.getElementById('ticTAc').style.backgroundColor = "red";
        document.getElementById('ticTAc').onclick = "";}
        if(allBlock[1].innerHTML == 'X' && allBlock[4].innerHTML == 'X'  && allBlock[7].innerHTML == 'X'){document.getElementById('ticTAc').style.backgroundColor = "red";
        document.getElementById('ticTAc').onclick = "";}
        if(allBlock[2].innerHTML == 'X' && allBlock[5].innerHTML == 'X'  && allBlock[8].innerHTML == 'X'){document.getElementById('ticTAc').style.backgroundColor = "red";
        document.getElementById('ticTAc').onclick = "";}
        if(allBlock[0].innerHTML == 'X' && allBlock[4].innerHTML == 'X'  && allBlock[8].innerHTML == 'X'){document.getElementById('ticTAc').style.backgroundColor = "red";
        document.getElementById('ticTAc').onclick = "";}
            if(allBlock[2].innerHTML == 'X' && allBlock[4].innerHTML == 'X'  && allBlock[6].innerHTML == 'X'){document.getElementById('ticTAc').style.backgroundColor = "red";
        document.getElementById('ticTAc').onclick = "";}

        if(allBlock[0].innerHTML == '0' && allBlock[1].innerHTML == '0'  && allBlock[2].innerHTML == '0'){document.getElementById('ticTAc').style.backgroundColor = "red";
        document.getElementById('ticTAc').onclick = "";}
        if(allBlock[3].innerHTML == '0' && allBlock[4].innerHTML == '0'  && allBlock[5].innerHTML == '0'){document.getElementById('ticTAc').style.backgroundColor = "red";
        document.getElementById('ticTAc').onclick = "";}
        if(allBlock[6].innerHTML == '0' && allBlock[7].innerHTML == '0'  && allBlock[8].innerHTML == '0'){document.getElementById('ticTAc').style.backgroundColor = "red";
        document.getElementById('ticTAc').onclick = "";}
        if(allBlock[0].innerHTML == '0' && allBlock[3].innerHTML == '0'  && allBlock[6].innerHTML == '0'){document.getElementById('ticTAc').style.backgroundColor = "red";
        document.getElementById('ticTAc').onclick = "";}
        if(allBlock[1].innerHTML == '0' && allBlock[4].innerHTML == '0'  && allBlock[7].innerHTML == '0'){document.getElementById('ticTAc').style.backgroundColor = "red";
        document.getElementById('ticTAc').onclick = "";}
        if(allBlock[2].innerHTML == '0' && allBlock[5].innerHTML == '0'  && allBlock[8].innerHTML == '0'){document.getElementById('ticTAc').style.backgroundColor = "red";
        document.getElementById('ticTAc').onclick = "";}
        if(allBlock[0].innerHTML == '0' && allBlock[4].innerHTML == '0'  && allBlock[8].innerHTML == '0'){document.getElementById('ticTAc').style.backgroundColor = "red";
        document.getElementById('ticTAc').onclick = "";}
        if(allBlock[2].innerHTML == '0' && allBlock[4].innerHTML == '0'  && allBlock[6].innerHTML == '0'){document.getElementById('ticTAc').style.backgroundColor = "red";
        document.getElementById('ticTAc').onclick = "";}

    }
window.onload = function() {
    for(let i = 0; i < 9; i++) {
        document.getElementById("ticTAc").innerHTML += '<div class="game"></div>';
    }
    
    let hod = 0;
    document.getElementById('ticTAc').onclick = function(event){
        if(event.target.className == 'game'){
            if(hod % 2 == 0){
                event.target.innerHTML = 'X';
            } else {
                event.target.innerHTML = '0';
            }
            hod++;
            chekWinner();
        }
    }
}
// function button(event){
//     if(event.target.className == 'game'){
//         if(event.target.className == 'game'){
//             event.target.innerHTML = '';
//         }
//     }
// }

