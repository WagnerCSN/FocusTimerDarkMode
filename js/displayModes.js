export default function({
    document,
    dark,
    light
}){
function darkModeColors(){
    document.documentElement.style.setProperty("--bg-main-primary", "rgba(255, 255, 255, 1)")
    document.documentElement.style.setProperty("--fc-time", "rgba(50, 50, 56, 1)")
    document.documentElement.style.setProperty("--cc-controls", "rgba(50, 50, 56, 1)")
    document.documentElement.style.setProperty("--bg-buttom", "rgba(225, 225, 230, 1)")
    document.documentElement.style.setProperty("--bg-buttom-focus", "rgba(02, 121, 157, 1)")
    document.documentElement.style.setProperty("--fc-buttom-focus-icon", "rgba(255, 255, 255, 1)")
}

function lightModeColors(){
    document.documentElement.style.setProperty("--bg-main-primary", "rgba(18, 18, 20, 1")
    document.documentElement.style.setProperty("--fc-time", "rgba(255, 255, 255, 1)")
    document.documentElement.style.setProperty("--cc-controls", "rgba(196, 196, 204, 1)")
    document.documentElement.style.setProperty("--bg-buttom", "rgba(41, 41, 46, 1)")
    document.documentElement.style.setProperty("--bg-buttom-focus", "rgba(10, 52, 66, 1)")
    document.documentElement.style.setProperty("--fc-buttom-focus-icon", "rgba(255, 255, 255, 1)")
}

function toggleIconsMode(){
    dark.classList.toggle('off')
    light.classList.toggle('off')
}
    return{
        darkModeColors, lightModeColors, toggleIconsMode
    }
}