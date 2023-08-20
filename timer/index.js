function clock(){
    let hour = document.getElementById('hour');
    let minute = document.getElementById('minute');
    let second = document.getElementById('second');
    let AmPm = document.getElementById('AmPm');
    
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    var am = 'AM';

    if( h > 12){
        h = h-12;
        var am = 'PM';
    }

    h = ( h < 0 ) ? '0' + h : h;
    m = ( h < 0 ) ? '0' + m : m;
    s = ( s < 0 ) ? '0' + s : s;
    
    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;
    AmPm.innerHTML = am;
}
var interval = setInterval( clock, 1000);