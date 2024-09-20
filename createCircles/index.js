let circels=[]
let undoArr=[]




document.addEventListener("click",(e)=>{
    if(e.target.nodeName==="BUTTON"){
        return
    }
    let newcircel=document.createElement("div")
    newcircel.classList="circle"
    newcircel.style.cssText="height:50px;width:50px;position:absolute;top:"+(e.clientY-25)+"px;left:"+(e.clientX-25)+"px;background-color:red"
    circels.push(newcircel)
    document.body.append(newcircel)
    document.getElementById("undo").disabled=false
    document.getElementById("reset").disabled=false
})

document.getElementById("undo").addEventListener("click",()=>{
   let element= circels.pop()
   element.style.display="none"
   undoArr.push(element)
   if(circels.length==0){
    document.getElementById("undo").disabled=true
    document.getElementById("redo").disabled=true
    document.getElementById("reset").disabled=true
   }else{
    document.getElementById("redo").disabled=false
   }
   
})

document.getElementById("redo").addEventListener("click",()=>{
    let element=undoArr.pop()
    element.style.display="block"
    circels.push(element)
    console.log(undoArr,circels)
    if(undoArr.length===0){
        document.getElementById("redo").disabled=true 
    }
})

document.getElementById("reset").addEventListener("click",()=>{
    circels.forEach((el)=>el.remove())
    undoArr.forEach((el)=>el.remove())
    document.getElementById("undo").disabled=true
    document.getElementById("redo").disabled=true
    document.getElementById("reset").disabled=true
})