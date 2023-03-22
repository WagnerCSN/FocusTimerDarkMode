export default function({
   audio
    
}){
    function playingAudio (){
        audio.play()
        audio.loop = true
    }

    function vol(value){
        audio.volume=value/100
   }

    return{
        playingAudio, vol
    }
}