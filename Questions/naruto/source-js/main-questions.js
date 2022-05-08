    "use strict"

    import {questionsAnime} from './Questions.js '

        const mainContainer = document.querySelector('.main-container')

    
    const contQuestion = document.querySelector('.question')
    const pQuestion = document.querySelector('.p-question')
    const contScore = document.querySelector('.score')
    const contRecord = document.querySelector('.record')
    const btnContainer = document.querySelector(".btn-container")
    const winContainer = document.querySelector(".alertWin-container")
    const louseContainer = document.querySelector(".alertLouse-Container")
    const scoreLastWin = document.querySelector('.last-score-win')
    const recordLastWin = document.querySelector('.last-record-win')
    const scoreLastLouse = document.querySelector('.last-score-louse')
    const recordLastLouse = document.querySelector('.last-record-louse')
    const scoreLastRecord= document.querySelector('.last-score-record')
    const recordLastRecord = document.querySelector('.last-record-record')


    let id = 0 
    let pregunta,opc1,opc2,opc3,opc4,backg
    const asignarValores = ()=>{
        id = Math.trunc (Math.random()*questionsAnime.length)  
        pregunta = questionsAnime[id].pregunta
        opc1 = questionsAnime[id].opc1
        opc2 = questionsAnime[id].opc2
        opc3 = questionsAnime[id].opc3
        opc4 = questionsAnime[id].opc4
        backg = questionsAnime[id].backg  
        return pregunta,opc1,opc2,opc3,opc4,backg
        
    }
    asignarValores()
    
    const btn1 = document.createElement("button")
    btn1.classList.add("btn")

    const btn2 = document.createElement("button")
    btn2.classList.add("btn")

    const btn3 = document.createElement("button")
    btn3.classList.add("btn")

    const btn4 = document.createElement("button")
    btn4.classList.add("btn")

    
    const btnAsignation = ()=>{

        setTimeout(()=>{btnContainer.appendChild(btn1)}, Math.random()*4)
        setTimeout(()=>{btnContainer.appendChild(btn2)}, Math.random()*4)
        setTimeout(()=>{btnContainer.appendChild(btn3)}, Math.random()*4)
        setTimeout(()=>{btnContainer.appendChild(btn4)}, Math.random()*4)
    }
        btnAsignation()
    
    
    const dataButton = ()=>{
        pQuestion.innerHTML = pregunta
        contQuestion.style.background = `url("${backg}") no-repeat center center/cover `
        btn1.innerHTML = opc1
        btn2.innerHTML = opc2
        btn3.innerHTML = opc3
        btn4.innerHTML = opc4
    }
    dataButton()

    let score = 0;
    const newScore = ()=>{
        let suma = 100 + score
        score = suma
            contScore.innerHTML = score
    }

    let record = 0;
    const newRecord = ()=>{
        if(score >= record ){
            let suma = score 
            record = suma
            contRecord.innerHTML = record        
        }
    }
    let livesCount = 3
    const lives = ()=>{
        const live1 = document.getElementById("live1")
        const live2 = document.getElementById("live2")
        const live3 = document.getElementById("live3")

        const heartBroken1 = document.querySelector(".heart_broken1")
        const heartBroken2 = document.querySelector(".heart_broken2")
        const heartBroken3 = document.querySelector(".heart_broken3")

        if(livesCount == 2){
            live3.classList.add("live3")
            heartBroken3.innerHTML = "heart_broken"
            heartBroken3.style.transition = "all 1s"
        }else if(livesCount == 1){
            live2.classList.add("live2")
            heartBroken2.innerHTML = "heart_broken"
            heartBroken2.style.transition = "all 1s"
        }else if(livesCount == 0){
            live1.classList.add("live1")
            heartBroken1.innerHTML = "heart_broken"
            heartBroken1.style.transition = "all 1s"
            scoreLastLouse.innerHTML += score
            recordLastLouse.innerHTML += record
            louseContainer.style.visibility = "visible"
            setTimeout(()=>{
                louseContainer.style.opacity = "1"
                louseContainer.style.transition = "all 2s"
            })

        }
    }

    const recordBackground =()=>{
        if(record == 500){
            mainContainer.style.background = " url('https://p4.wallpaperbetter.com/wallpaper/441/359/792/anime-evolution-manga-naruto-shippuuden-wallpaper-preview.jpg') no-repeat center center/cover "
            mainContainer.style.transition = "all 3s"
        }else if(record == 1000){
            mainContainer.style.background = " url('https://images8.alphacoders.com/621/thumb-1920-621482.jpg') no-repeat center center/cover "
            mainContainer.style.transition = "all 3s"
        }else if(record == 1500){
            mainContainer.style.background = " url('https://images4.alphacoders.com/994/thumb-1920-994024.png') no-repeat center center/cover "
            mainContainer.style.transition = "all 3s"
        }
    }


    let winCount = 0
    const win = () =>{
        if( winCount == 20  ){
            scoreLastWin.innerHTML += score
            recordLastWin.innerHTML += record
            winContainer.style.visibility = "visible"
            setTimeout(()=>{
                winContainer.style.opacity = "1"
                winContainer.style.transition = "all 2s"
            })
        }else if(winCount == 20 && record == 2000 ){
            const finalRecord = document.querySelector('.finalRecord')
            const video = document.querySelector('.video')
            const alertRecordLast = document.querySelector('.alert-record-last')
            const resultFinalRecord = document.querySelector('.alertWinRecord')
            finalRecord.style.visibility = 'visible'
            finalRecord.style.opacity = '1'
            finalRecord.style.transition = '1s'
            video.setAttribute('src', "/Questions/naruto/img/record.mp4")
            video.setAttribute('autoplay', "")
            setTimeout(()=>{
                alertRecordLast.style.visibility = 'visible'
                alertRecordLast.style.opacity = '1'
                alertRecordLast.style.transition = '1s'
                resultFinalRecord.style.visibility = 'visible'
                scoreLastRecord.innerHTML += score
                recordLastRecord.innerHTML += record
                
            }, 12000)
        }

    }
    btn1.addEventListener('click',()=>{
        let winPoint =  winCount + 1
        winCount = winPoint

        newScore()
        newRecord()
        asignarValores()

        recordBackground()

        btn1.classList.add("btn1")
        setTimeout(()=>{ 
            btn1.classList.remove("btn1")     
            dataButton()
            btnAsignation()},3000)
        win()
    })

    btn2.addEventListener('click',()=>{
        btn1.classList.add("btn1")
        btn2.classList.add("btn2")
        let liveLouse = livesCount - 1
        livesCount = liveLouse
        score = 0
        contScore.innerHTML = score

        lives()
        asignarValores()
        setTimeout(()=>{
            btn1.classList.remove("btn1") 
            btn2.classList.remove("btn2")         
            dataButton()
            btnAsignation()},3000)


    })

    btn3.addEventListener('click',()=>{
        btn1.classList.add("btn1")
        btn3.classList.add("btn3")
        let liveLouse = livesCount - 1
        livesCount = liveLouse
        score = 0
        contScore.innerHTML = score

        lives()
        asignarValores()
        setTimeout(()=>{ 
            btn1.classList.remove("btn1") 
            btn3.classList.remove("btn3")         
            dataButton()
            btnAsignation()},3000)


    })
    btn4.addEventListener('click',()=>{
        btn1.classList.add("btn1")
        btn4.classList.add("btn4")
        let liveLouse = livesCount - 1
        livesCount = liveLouse
        score = 0
        contScore.innerHTML = score

        lives()
        asignarValores()
        setTimeout(()=>{
            btn1.classList.remove("btn1") 
            btn4.classList.remove("btn4")          
            dataButton()
            btnAsignation()},3000)
    })




