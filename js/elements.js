const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonIncreaseMinutes = document.querySelector('.controls .increaseMinutes')
const buttonDecreaseMinutes = document.querySelector('.controls .decreaseMinutes')
const buttonFlorest = document.querySelector('.floresta')
const buttonChuva = document.querySelector('.chuva')
const buttonCafeteria = document.querySelector('.cafeteria')
const buttonLareira = document.querySelector('.lareira')
const controlsVolumeFloresta = document.querySelector('#volumeFloresta')
const controlsVolumeChuva = document.querySelector('#volumeChuva')
const controlsVolumeCafeteria = document.querySelector('#volumeCafeteria')
const controlsVolumeLareira = document.querySelector('#volumeLareira')
const light = document.querySelector('.light')
const dark = document.querySelector('.dark')
let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')
let audio = new Audio()
let timerTimeOut

export{
    minutesDisplay,
    secondsDisplay,
    buttonPlay,
    buttonStop,
    buttonIncreaseMinutes,
    buttonDecreaseMinutes,
    buttonFlorest,
    buttonChuva,
    buttonCafeteria,
    buttonLareira,
    audio,
    timerTimeOut,
    controlsVolumeFloresta,
    controlsVolumeChuva, 
    controlsVolumeCafeteria,
    controlsVolumeLareira,
    light,
    dark
}