import React from "react";
import Style from "./ShowAvtar.module.css";

export const ShowAvtar = ({ avtars ,setShowModal,deleteAvatar}) => {
console.log(avtars)
  return (
    <div id={Style.avtarList}>
      <div id="target">
        {avtars?.map((el) => (
          <>
            <div className={Style.avatarIcon} key={el.name} style={{backgroundColor:el.color}} >
              <div>{el.name[0].toUpperCase()}</div>
              <div className={Style.close}>
                <span onClick={()=>deleteAvatar(el.name)} > X</span>
              </div>
            </div>
          </>
        ))}
        <button id={Style.openModal} onClick={()=>setShowModal(true)}>+</button>
      </div>
    </div>
  );
};
