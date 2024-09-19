import {Qustions} from "./Qustions.js"



let currentIndex=0
let timer=null
let score=0
let remainingTime=5
let counter=null

function shuffle(array) {
    let Index = array.length;
  
    while (Index != 0) {  
      let randomIndex = Math.floor(Math.random() * Index);
      Index--;
      [array[Index], array[randomIndex]] = [
        array[randomIndex], array[Index]];
    }
    return array
  }

shuffle(Qustions)

function startTimmer(){
    let timerPlace=document.getElementById("timer")
    timerPlace.innerText=`remaining time ${remainingTime} seconds`
    counter=setInterval(()=>{
        remainingTime--
        if(remainingTime<=0){
            clearInterval(counter)
            remainingTime=5
        }
        timerPlace.innerText=`remaining time ${remainingTime} seconds`
    },1000)
}

function showQusition(){
    ShowScore()
    if(currentIndex>=Qustions.length){
        console.log(counter,"in show")
        clearTimeout(timer)
        stopCounter()
        // clearInterval(counter)
        alert("test over")
        return;
    }
  
    let qusitonPlace=document.getElementById("qustion")
    let currentQustion=Qustions[currentIndex]
    currentQustion.options=shuffle(currentQustion.options)
    qusitonPlace.innerText=`Q ${currentIndex+1} : ${currentQustion.qustion}`
    
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
    startTimmer()

}

function handleAns(ans){
    disableButtons()
    if(ans==Qustions[currentIndex].ans){
        score++
    }
    clearTimeout(timer)
    clearInterval(counter)
    remainingTime=5
  setTimeout(()=>{
        currentIndex++
        showQusition()
    },1000)
}

function disableButtons(){
    for(let i=1;i<=4;i++){
        document.getElementById(`opt${i}`).disabled=true
    }
}

function ShowScore(){
    document.getElementById("result").innerText=`your score :${score}`
}

function stopCounter(){
    console.log(counter)
    remainingTime=0
    // let timerPlace=document.getElementById("timer")
    // timerPlace.innerText=`remaining time ${remainingTime} seconds`
    clearInterval(counter)

}
showQusition()