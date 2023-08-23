const elm = document.querySelectorAll('li');
elm.forEach((list)=>{

    list.addEventListener('click',(e) => {
    e.target.remove()
    })
})