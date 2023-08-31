function chowPass() {
    let i = document.getElementById('password');
    if (i.type == 'password' ){
        i.type = 'text'
    }else{
        i.type = 'password'
    }
}
