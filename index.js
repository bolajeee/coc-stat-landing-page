let menu = document.getElementById('menu-icon')
let navlist = document.getElementsByClassName('nav-list')

menu.addEventListener('click', () => {
    menu.classList.toggle('bx-x');
    
    if(menu.classList.contains('bx-x')){
        navlist.classList.add('open')
    }else{
        navlist.classList.remove('open');
    }
})