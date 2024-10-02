
import './App.css'
import { ShowAvtar } from './components/ShowAvtar'
import { Modal } from './components/Modal'
import { useState } from 'react'
let colors=["#df7b65","#e4b6ac","#e8ef93","#cfee66","#89f7ea","#df79fd"]
function getRandomNumber(){
  return Math.floor(Math.random() * (5 - 0) + 0);
}
function App() {
 let [showModal,setShowModal]=useState(false)
 let [avtars,setAvatar]=useState([])
 function createAvtar(name){
  setAvatar([...avtars,{name:name,color:colors[getRandomNumber()]}])
 }
 function deleteAvatar(name){
  setAvatar(avtars.filter((el)=>el.name!==name))
 }
  return (
    <>
     {
      showModal?<Modal  createAvtar={createAvtar} setShowModal={setShowModal}/>:<ShowAvtar avtars={avtars} setShowModal={setShowModal} deleteAvatar={deleteAvatar}/>
     }
      
      
        
    </>
  )
}

export default App
