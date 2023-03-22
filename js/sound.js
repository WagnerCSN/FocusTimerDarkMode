export default function({
    buttonLareira,
    buttonCafeteria,
    buttonChuva,
    buttonFlorest,
    audio
}){
    function playingAudio (){
        audio.play()
        audio.loop = true
    }

    function backgroundColorInitial(){
        buttonLareira.style.background = '#E1E1E6'
        buttonCafeteria.style.background = '#E1E1E6'
        buttonChuva.style.background = '#E1E1E6'
        buttonFlorest.style.background = '#E1E1E6'
    }

    function colorFocusSound(){
        if(audio.src=="http://127.0.0.1:5500/sounds/Lareira.wav"){
            if(audio.currentTime==0){
                buttonLareira.style.background = '#02799D'
                buttonCafeteria.style.background = '#E1E1E6'
                buttonChuva.style.background = '#E1E1E6'
                buttonFlorest.style.background = '#E1E1E6'
            }
        }
        if(audio.src == "http://127.0.0.1:5500/sounds/Cafeteria.wav"){
            if(audio.currentTime==0){
                buttonLareira.style.background = '#E1E1E6'
                buttonCafeteria.style.background = '#02799D'
                buttonChuva.style.background = '#E1E1E6'
                buttonFlorest.style.background = '#E1E1E6'
            }
        }

        if(audio.src == "http://127.0.0.1:5500/sounds/Chuva.wav"){
            if(audio.currentTime==0){
                buttonLareira.style.background = '#E1E1E6'
                buttonCafeteria.style.background = '#E1E1E6'
                buttonChuva.style.background = '#02799D'
                buttonFlorest.style.background = '#E1E1E6'
            }
        }

        if(audio.src == "http://127.0.0.1:5500/sounds/Floresta.wav"){
            if(audio.currentTime==0){
                buttonLareira.style.background = '#E1E1E6'
                buttonCafeteria.style.background = '#E1E1E6'
                buttonChuva.style.background = '#E1E1E6'
                buttonFlorest.style.background = '#02799D'
            }
        }
    }
    return{
        playingAudio, backgroundColorInitial, colorFocusSound 
    }
}