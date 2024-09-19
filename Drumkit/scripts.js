let appendPlace=document.getElementById("right")
let container=document.createElement("div")
let drum=document.createElement("img")
let crash=document.createElement("img")
let kick=document.createElement("img")
let snare=document.createElement("img")
container.classList="box"

drum.src="./assets/drummer.avif"
crash.src="./assets/crash.png"
kick.src="./assets/kick.png"
snare.src="./assets/snare.png"


drum.addEventListener("click",()=>{
    let audio=new Audio("./assets/tom.mp3")
    audio.play()
})
crash.addEventListener("click",()=>{
    let audio=new Audio("./assets/crash.mp3")
    audio.play()
})
kick.addEventListener("click",()=>{
    let audio=new Audio("./assets/kick.mp3")
    audio.play()
})
snare.addEventListener("click",()=>{
    let audio=new Audio("./assets/snare.mp3")
    audio.play()
})


container.append(drum,crash,kick,snare)
appendPlace.append(container)
