
"use strict"

const slaider = document.getElementById('slaider-img')
let slaiderCard = document.querySelectorAll('.descripcion-img')
let slaiderCardLast = slaiderCard[slaiderCard.length -1];


slaider.insertAdjacentElement('afterbegin',slaiderCardLast)

const moveRigth = ()=>{
    let slaiderCardFirst = document.querySelectorAll('.descripcion-img')[0];
    slaider.style.marginLeft = "-200%"
    slaider.style.transition =  "all 0.5s"
    setTimeout(()=>{
        slaider.style.transition = "none"
        slaider.insertAdjacentElement('beforeend', slaiderCardFirst)
        slaider.style.marginLeft = "-100%"
    },500);
}

setInterval(()=>{
    moveRigth()
},7000)



ScrollReveal().reveal('.presentacion__container');
ScrollReveal().reveal('.descripcion__container', { delay: 500 });
ScrollReveal().reveal('.categorias__container', { delay: 500 });
ScrollReveal().reveal('.footer-container', { delay: 500 });






