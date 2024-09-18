let scoreData=[]



let form=document.getElementById("score-bord-form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let formData={}
    for(let i=0;i<=3;i++){
        formData[form[i].name]=form[i].value
    }
    scoreData.push(formData)
    showData()
})


function showData(){
    let list=document.getElementById("list")
    list.innerHTML=""
    arrangeData()
    scoreData.map((el,index)=>{
        let parent=document.createElement("div")
        let name=document.createElement("p")
        name.innerText=el.firstname +" "+el.lastname
        let score=document.createElement("p")
        score.innerText=el.score
        let country=document.createElement("p")
        country.innerText=el.country
        let bt1=document.createElement("button")
        bt1.innerText="+5"
        bt1.addEventListener("click",()=>{
            handleIncrement(index)
        })
        let bt2=document.createElement("button")
        bt2.innerText="-5"
        bt2.addEventListener("click",()=>{
            handleDecrement(index)
        })
        let bt3=document.createElement("button")
        bt3.innerText="delete"
        bt3.addEventListener("click",()=>{
            handleDelete(index)
        })
        console.log(name,score,country,bt1,bt2,bt3)
        parent.append(name,score,country,bt1,bt2,bt3)
        list.append(parent)
    })
}

function handleIncrement(index){
    let result=scoreData.map((el,ind)=>ind==index?{...el,score:+el.score+5}:el)  
    scoreData=[...result]
    showData()
}
function handleDecrement(index){
    let result=scoreData.map((el,ind)=>ind==index?{...el,score:+el.score-5}:el)  
    scoreData=[...result]
    showData()
}
function handleDelete(index){
    let result=scoreData.filter((el,ind)=>ind!=index)
    console.log(result)
    scoreData=result
    showData()
}

function arrangeData(){
    scoreData.sort((a,b)=>b.score-a.score)
}