let avtarList=[]
let btn=document.getElementById("openModal")
let colors=["#df7b65","#e4b6ac","#e8ef93","#cfee66","#89f7ea","#df79fd"]
btn.addEventListener("click",()=>{
   let modal= document.getElementById("createAvtar")
   
   modal.style.display="flex"

})


let confirm =document.getElementById("confirm")
confirm.addEventListener("click",()=>{
    document.getElementById("createAvtar").style.display="none"
    let text=document.getElementById("avtarName")
    avtarList.push(text.value)
    randarAvtar()

})

let closeModal=document.getElementById("cancel")
closeModal.addEventListener("click",()=>{
    let modal= document.getElementById("createAvtar")
   
   modal.style.display="none"
})
let closeModalbtn=document.getElementById("close")
closeModalbtn.addEventListener("click",()=>{
    let modal= document.getElementById("createAvtar")
   
   modal.style.display="none"
})

function randarAvtar(){
    let target=document.getElementById("target")
    target.innerHTML=""
    avtarList.forEach((name)=>{
        
        let avtarIcon=document.createElement("div")
        avtarIcon.classList.add("avatarIcon")
        avtarIcon.style.backgroundColor=colors[getRandomNumber()]
        let innerDiv=document.createElement("div")
        innerDiv.textContent=name[0]+name[1]
        let canceldiv=document.createElement("div")
        canceldiv.classList.add("close")
        let span=document.createElement("span")
        span.innerText="X"
        span.addEventListener("click",()=>{
            removeAvtar(name)
        })
        canceldiv.append(span)
        avtarIcon.append(canceldiv,innerDiv)
        target.append(avtarIcon)
    })
    let openModal=document.createElement("button")
    openModal.innerText="+"
    openModal.id="openModal"
    openModal.addEventListener("click",()=>{
        let modal= document.getElementById("createAvtar")
        modal.style.display="flex"
    })
    target.append(openModal)
}

function removeAvtar(name){
   let filtered= avtarList.filter((el)=>el!=name)
   avtarList=[...filtered]
   randarAvtar()
}

function getRandomNumber(){
    return Math.floor(Math.random() * (5 - 0) + 0);
}