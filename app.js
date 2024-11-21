let menuIcon = document.getElementsByClassName('menu-icon');
let sidebar = document.getElementsByClassName('sidebar');
let hideMenu = document.getElementsByClassName('hide-menu');
let cursor = document.querySelector(".cursor");

menuIcon[0].addEventListener("click", () =>{
    sidebar[0].style.display = 'flex';
    console.log("done");
})

hideMenu[0].addEventListener("click", () =>{
    sidebar[0].style.display = 'none';
    console.log("done");
})

document.addEventListener("mousemove",(event)=>{
    cursor.style.top = event.y + "px";
    cursor.style.left = event.x + "px";
})

