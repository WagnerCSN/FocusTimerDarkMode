export default function ({
    minutesDisplay

}){
    function increase5Minutes(){
        let minute = Number(minutesDisplay.textContent)
        if(minute>=0&&minute<60){
            minute=minute+5
            minutesDisplay.textContent= String(minute).padStart(2,"0")
        }
    }

    function decrease5Minutes(){
        let minute = Number(minutesDisplay.textContent)
        if(minute>0){
            minute=minute-5
            minutesDisplay.textContent= String(minute).padStart(2,"0")
        }
    }
return{
    increase5Minutes, decrease5Minutes
}
}