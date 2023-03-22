export default function({
    minutes,
    minutesDisplay,
    secondsDisplay,
    timerTimeOut,
    audio
  
}){
    function startTime(){
        minutes=minutesDisplay.textContent
        loopingTime()
    }

    function loopingTime(){

        timerTimeOut = setTimeout(function(){
            let seconds =Number(secondsDisplay.textContent)
            let minutes =Number(minutesDisplay.textContent)
            if(minutes==0&seconds==0){
                return
            }
            if(minutes==0&seconds==1){
                updateSeconds(seconds)
                return
            }
            if(seconds <=0){
                seconds = 60
            }
            if(seconds == 1 || minutes ==1){
                updateMinutes(minutes) 
            }
            if(minutes <0){
                return
            }
            updateSeconds(seconds)    
            loopingTime()
        },1000)
    }
    function updateMinutes(minutes){
        minutesDisplay.textContent= String(minutes - 1).padStart(2,"0")
    }

    function updateSeconds(seconds){
        secondsDisplay.textContent=String(seconds - 1).padStart(2,"0")
    }

    function updateDisplay(){
        audio.pause()
        if(typeof minutes == 'undefined'){
          minutesDisplay.textContent=String('0').padStart(2,"0")
         return
        }
        clearTimeout(timerTimeOut)
        minutesDisplay.textContent=minutes
        secondsDisplay.textContent=String('0').padStart(2,"0")
    }
    return{
        startTime, loopingTime, updateMinutes, updateSeconds, updateDisplay
    }
}