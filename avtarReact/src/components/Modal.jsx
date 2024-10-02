import { useState } from "react";
import style from "./Modal.module.css"

export const Modal = ({createAvtar,setShowModal}) => {
   let [text,setText]=useState("")
  return (
    <div id={style.Modal}>
      <div id={style.createAvtar}>
        <div>
          <button id={style.close} onClick={()=>setShowModal(false)}>X</button>
          <div>
            <input  value={text} placeholder="enter avtar name" onChange={(e)=>setText(e.target.value)} />
            <div>
              <button id="cancel" onClick={()=>setShowModal(false)}>cancel</button>
              <button id="confirm" onClick={()=>{
                createAvtar(text)
                setText("")
                setShowModal(false)
              }} >confirm</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
