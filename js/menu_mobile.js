let navigation = document.querySelector('.navigation');
let close_menu_icon = document.querySelector('.close-menu');
let menu_icon = document.querySelector('.menu-icon');


function open_menu(){
    navigation.classList.add('open-menu');
    menu_icon.style.display = "none";
    close_menu_icon.style.display = 'block';
};

function close_menu(){
    navigation.classList.remove('open-menu');
    menu_icon.style.display = "block";
    close_menu_icon.style.display = 'none';
};