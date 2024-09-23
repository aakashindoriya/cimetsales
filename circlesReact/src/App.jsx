
import { useState } from 'react'
import './App.css'
import ShowCircles from './components/ShowCircles'
import Controllers from './components/Controllers'
let colors=["#ca4f12","#4fe6c3","#584cdb","#75914d","#401e1a"]
function giveRandomNumber(){
  return Math.floor(Math.random() * (4 - 0) + 0);
}
function App() {
let [circles,setCircles]=useState([])
let [undoList,setUndoList]=useState([])

function createCircle(e){
  if(e.target.nodeName==="BUTTON")return
  
  setCircles([...circles,{x:e.clientX,y:e.clientY,id:Date.now() ,color:colors[giveRandomNumber()]}])
}

function handleUndo(){
  let copy = circles;
  let item=copy.pop()

  setCircles(circles.filter((el)=>el.id!==item.id))
  setUndoList([...undoList,item])

}
function handleRedo(){
  let copy = undoList;
  let item=copy.pop()

  setUndoList(undoList.filter((el)=>el.id!==item.id))
  setCircles([...circles,item])

}
function handleRest(){
setCircles([])
setUndoList([])
}

  return (
    <>
     <div onClick={createCircle} style={{width:"100vw",height:"100vh",backgroundColor:"teal"}}>
      <Controllers undoHandler={handleUndo} redoHandler={handleRedo} resetHandler={handleRest} circles={circles} undoList={undoList}/ >
     <ShowCircles circles={circles} />
     </div>
       
    </>
  )
}

export default App
