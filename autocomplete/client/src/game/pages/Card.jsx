
export const Card = ({pic,name,fliped,id,HandleCardClick}) => {
  let show=fliped.find((el)=>el.id==id)
  
  return (
    <div className="flip-card" onClick={()=>{
      if(show)return
      HandleCardClick(id,name)}}>
    <div className="flip-card-inner" style={{transform:!show&&"rotateY(180deg)"}}>
      <div className="flip-card-front">
        <img src={pic} alt="Avatar"  style={{width:"200px",height:"200px"}} />
      </div>
      <div className="flip-card-back">
        <img src="img_avatar.png" />
      </div>
    </div>
  </div> 
  )
}
