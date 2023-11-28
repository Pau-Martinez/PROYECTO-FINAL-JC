const header = document.getElementById('header')
const menuOpen = document.getElementById('menu-open')
const menuClose = document.getElementById('menu-close')
const navMenu = document.getElementById('nav-menu')

//menu responsive

if (menuOpen){
   menuOpen.addEventListener ('click', () => {
   navMenu.classList.add('header__nav--visible')
   }

)}

if (menuClose){
   menuClose.addEventListener ('click', () => {
   navMenu.classList.remove('header__nav--visible')
   }

)}


//sroll in menu

addEventListener('scroll', () => {
 if (this.scrollY > 100)  {
    header.classList.add ('header--fill')
 } else {
    header.classList.remove ('header--fill')
 }
}) 

const reseñas = document.querySelectorAll('.reseñas__element')

reseñas.forEach((rese) => {
   rese.firstElementChild.style.height = `${rese.getBoudingClientRect().height + 13 }px`
})

