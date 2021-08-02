const openBtn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.close-btn')
const menu = document.getElementById('menu');


openBtn.addEventListener('click',() => {
    menu.style.width = "300px";
})


closeBtn.addEventListener('click',() => {
    menu.style.width = "0";
})