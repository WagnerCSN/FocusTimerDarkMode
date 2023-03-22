import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sound.js"
import DisplayModes from "./displayModes.js"
import {
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
}from "./elements.js"

dark.addEventListener('click', function(){
    displayModes.darkModeColors()
    displayModes.toggleIconsMode()
})

light.addEventListener('click', function(){
    displayModes.lightModeColors()
    displayModes.toggleIconsMode()
})

const displayModes = DisplayModes({
    document,
    light,
    dark
})

const controls = Controls({
    minutesDisplay
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    timerTimeOut,
    audio
})

const sound = Sound({
    audio
  
})

buttonIncreaseMinutes.addEventListener('click', function (){
    controls.increase5Minutes()
})

buttonDecreaseMinutes.addEventListener('click', function (){
    controls.decrease5Minutes()
})

buttonPlay.addEventListener('click', function (){
    timer.startTime()
})

buttonStop.addEventListener('click', function(){
    timer.updateDisplay()
    controlsVolumeChuva.value='0'
    controlsVolumeFloresta.value='0'
    controlsVolumeCafeteria.value='0'
    controlsVolumeLareira.value='0'
})

buttonFlorest.addEventListener('click', function (){
    audio.src = "./sounds/Floresta.wav"
    sound.playingAudio ()
    if(audio.currentSrc!=audio.src){
        controlsVolumeFloresta.value= '50'
    }else{
        controlsVolumeFloresta.addEventListener('input', ()=> {
        sound.vol(controlsVolumeFloresta.value)
    })}
    controlsVolumeChuva.value='0'
    controlsVolumeLareira.value='0'
    controlsVolumeCafeteria.value='0'
})

buttonChuva.addEventListener('click', function (){
    audio.src = "./sounds/Chuva.wav"
    sound.playingAudio ()
    if(audio.currentSrc!=audio.src){
        controlsVolumeChuva.value= '50'
    }else{
        controlsVolumeChuva.addEventListener('input', ()=> {
        sound.vol(controlsVolumeChuva.value)
    })}
    controlsVolumeFloresta.value='0'
    controlsVolumeLareira.value='0'
    controlsVolumeCafeteria.value='0'
})

buttonCafeteria.addEventListener('click', function (){
    audio.src = "./sounds/Cafeteria.wav"
    sound.playingAudio ()
    if(audio.currentSrc!=audio.src){
        controlsVolumeCafeteria.value= '50'
    }else{
        controlsVolumeCafeteria.addEventListener('input', ()=> {
        sound.vol(controlsVolumeCafeteria.value)
    })}
    controlsVolumeChuva.value='0'
    controlsVolumeLareira.value='0'
    controlsVolumeFloresta.value='0'
})

buttonLareira.addEventListener('click', function (){
    audio.src ="./sounds/Lareira.wav"
    if(audio.currentSrc!=audio.src){
        controlsVolumeLareira.value= '50'
    }else{
        controlsVolumeLareira.addEventListener('input', ()=> {
            sound.vol(controlsVolumeLareira.value)
        })}
        controlsVolumeChuva.value='0'
        controlsVolumeFloresta.value='0'
        controlsVolumeCafeteria.value='0'
        sound.playingAudio ()
})












