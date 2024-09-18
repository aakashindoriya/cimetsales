import {Qustions} from "./Qustions.js"



let currentIndex=0
let timer=null
let score=0

function shuffle(array) {
    let Index = array.length;
  
    while (Index != 0) {  
      let randomIndex = Math.floor(Math.random() * Index);
      Index--;
      [array[Index], array[randomIndex]] = [
        array[randomIndex], array[Index]];
    }
  }
shuffle(Qustions)



function showQusition(){
    ShowScore()
    if(currentIndex>=Qustions.length){
        clearTimeout(timer)
        alert("test over")
        return
    }
  
    let qusitonPlace=document.getElementById("qustion")
    qusitonPlace.innerText=Qustions[currentIndex].qustion
    let currentQustion=Qustions[currentIndex]

    currentQustion.options.forEach((_, index) => {
        let optionPlace = document.getElementById(`opt${index + 1}`);
        optionPlace.innerText = ""; 
        optionPlace.removeEventListener("click", handleAns); 
    });

    currentQustion.options.forEach((opt,index)=>{
        let optionPlace = document.getElementById(`opt${index + 1}`);
        optionPlace.innerText = opt;
        optionPlace.disabled = false; 
        optionPlace.onclick = () => handleAns(opt)
    })
    timer=setTimeout(()=>{
        currentIndex++
        showQusition()
    },5000)

}

function handleAns(ans){
    disableButtons()
    console.log(ans,"handleans")
    if(ans==Qustions[currentIndex].ans){
        score++
    }
    clearTimeout(timer)
    
  setTimeout(()=>{
        currentIndex++
        showQusition()
    },1000)
}

function disableButtons(){
    console.log("ans")
    for(let i=1;i<=4;i++){
        document.getElementById(`opt${i}`).disabled=true
    }
}

function ShowScore(){
    document.getElementById("result").innerText=score
}
showQusition()