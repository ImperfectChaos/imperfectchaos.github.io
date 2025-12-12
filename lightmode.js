let lightmode = localstorage.getItem('lightmode')
const LightModeSwitch = document.getElementById('LightModeSwitch')

const enableLightmode = () => {
    document.body.classList.add("lightmode")
    localstorage.setItem('lightmode', 'active')
}

const enableLightmode = () => {
    document.body.classList.remove("lightmode")
    localstorage.setItem('lightmode', 'null')

if(lightmode === "active") enableLightmode()

LightModeSwitch.addEventListener("click",() => {
    lightmode = localStorage.getItem('lightmode')
    lightmode !== "active" ? enableLightmode() : disableLightmode()
})
