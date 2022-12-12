const startButton = document.querySelector('#start')
const screens  = document.querySelectorAll('.screen')
const listesTime = document.querySelector('#listTime')
const remains = document.querySelector('#time')
const board = document.querySelector('#board')
const main = document.querySelector('#main')
const colors = ['red','blue', 'green', 'yellow']
let time = 0
// let time2 = 0

let score = 0

startButton.addEventListener('click', (ev)=>{
ev.preventDefault()
screens[0].classList.add('up')
})

listesTime.addEventListener('click', (ev) =>{
if (ev.target.classList.contains('time-btn')) {
time = +(ev.target.getAttribute('data-time'))
// time2 = +(ev.target.getAttribute('data-time2'))
screens[1].classList.add('up')
startGame()
}
})
 


// debug


function startGame () {
    setInterval(diminishTime, 1000)
    setTime(time)
    
    pulCircle()
    
    
}



function diminishTime(){
    if(time===0){
gameEnd()
    } else {
    let current = --time
    if (current < 10){
        current = `0${current}`   
    }

    setTime(current)
}
}
function setTime (x) {
   if(x===5){
    remains.innerHTML= `00:0${x}`
}else {
    remains.innerHTML= `00:${x}`
}
}


function pulCircle (){
    const circle = document.createElement ('div')
    const size = randomSize (10, 50)
    const {width, height} = board.getBoundingClientRect()
    const x = randomSize(0,width - size)
    const y = randomSize(0, height - size)
    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height =  `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    circle.style.backgroundColor = randColor()
    board.append(circle)
}

function randomSize  (min, max) {
    return Math.round(Math.random() * (min-max) + max)
}

function randColor (){
    const index = Math.floor(Math.random() * colors.length)
   return colors[index]
}

function gameEnd (){
    
    remains.parentNode.remove()
board.innerHTML = `<h1>Результат:<br><b><span class="primary">${score}</span></b></h1>`

}
board.addEventListener ('click',(ev)=>{
    if(ev.target.classList.contains('circle')){
      score++
      ev.target.remove()
      pulCircle ()
    }
})



