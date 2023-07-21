let indexSlider = 0
autoSlider()
function autoSlider() {
    let i;
    let box = document.getElementsByClassName("box")
    let turn = document.getElementsByClassName("turn")

    for (i = 0; i < box.length; i++) {
        box[i].style.display = "none";
    }

    indexSlider = indexSlider + 1;

    if (indexSlider > box.length) {
        indexSlider = 1;
    };

    for (i = 0; i < turn.length; i++) {
        turn[i].className = turn[i].className.replace( " active", "")
    };

    box[indexSlider - 1].style.display = "block";
    turn[indexSlider - 1].className += " active";

    setTimeout(autoSlider , 2000)
}