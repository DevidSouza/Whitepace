let navigation = document.querySelector('.navigation');
let close_menu_icon = document.querySelector('.close-menu');
let menu_icon = document.querySelector('.menu-icon');
let img_left = document.querySelector('.section-02 .section-img');

function open_menu(){
    navigation.classList.add('open-menu');
    menu_icon.style.display = "none";
    close_menu_icon.style.display = 'block';
    img_left.classList.remove('img-left');
};

function close_menu(){
    navigation.classList.remove('open-menu');
    menu_icon.style.display = "block";
    close_menu_icon.style.display = 'none';
    img_left.classList.add('img-left');
};