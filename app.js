let menuIcon = document.getElementsByClassName('menu-icon');
let sidebar = document.getElementsByClassName('sidebar');
let hideMenu = document.getElementsByClassName('hide-menu');

menuIcon[0].addEventListener("click", () =>{
    sidebar[0].style.display = 'flex';
    console.log("done");
})

hideMenu[0].addEventListener("click", () =>{
    sidebar[0].style.display = 'none';
    console.log("done");
})