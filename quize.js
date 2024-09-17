import {Qustions} from "./Qustions.js"
let startButton=document.createElement("button")
startButton.innerText="Start test"
startButton.addEventListener("click",()=>{
    console.log("test is started")
    startTest()
    startButton.remove()
})

document.body.appendChild(startButton)



function startTest(){
    let index=1
    ShowQustion(Qustions[0])
    let id=setInterval(()=>{
        if(index>=Qustions.length-1){
            clearInterval(id)
        }
        ShowQustion(Qustions[index])
        index++
    },5000)
    
        
}

function ShowQustion(que){
  if(!que)return
   let Qustion =document.getElementById("qustion")
   Qustion.innerText=que.qustion

   for(let i=1;i<=4;i++){
    let Opt1=document.getElementById(`opt${i}`)
   Opt1.disabled=false
   Opt1.addEventListener("click",()=>{
       CheckResult(que,que.options[i-1])
   })
   Opt1.innerText=que.options[i-1]
   }
  


}
let result=0
let rightAns={}
document.getElementById("result").innerText=result
function CheckResult(que,ans){
    if(rightAns[que.id]){
        return
    }
    rightAns[que.id]=1

    if(que.ans===ans){
        result++
        document.getElementById("result").innerText=result
    }
    
    for(let i=1;i<=4;i++){

        document.getElementById(`opt${i}`).disabled = true
    }
    
}

