"use strict"

const slaider = document.getElementById('slaider')
let slaiderCard = document.querySelectorAll('.tutorialCard')
let slaiderCardLast = slaiderCard[slaiderCard.length -1];

const btnLeft = document.querySelector('.direction-left')
const btnRigth = document.querySelector('.direction-rigth')

slaider.insertAdjacentElement('afterbegin',slaiderCardLast)

const moveRigth = ()=>{
    let slaiderCardFirst = document.querySelectorAll('.tutorialCard')[0];
    slaider.style.marginLeft = "-200%"
    slaider.style.transition =  "all 0.5s"
    setTimeout(()=>{
        slaider.style.transition = "none"
        slaider.insertAdjacentElement('beforeend', slaiderCardFirst)
        slaider.style.marginLeft = "-100%"
    },500);
}

btnRigth.addEventListener('click', ()=>{
    moveRigth()
})

const moveLeft = ()=>{
    let slaiderCard = document.querySelectorAll('.tutorialCard')
    let slaiderCardLast = slaiderCard[slaiderCard.length -1];
    slaider.style.marginLeft = "0%"
    slaider.style.transition =  "all 0.5s"
    setTimeout(()=>{
        slaider.style.transition = "none"
        slaider.insertAdjacentElement('afterbegin', slaiderCardLast)
        slaider.style.marginLeft = "-100%"
    },500);
}

btnLeft.addEventListener('click', ()=>{
    moveLeft()
})

