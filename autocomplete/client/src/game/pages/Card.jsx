import Image from "../../assets/resize-image.png"
export const Card = ({pic,name,fliped,id,HandleCardClick}) => {
  let show=fliped.find((el)=>el.id==id)
  
  return (
    <div className="flip-card" onClick={()=>{
      if(show)return
      HandleCardClick(id,name)}}>
    <div className="flip-card-inner" style={{transform:!show&&"rotateY(180deg)"}}>
      <div className="flip-card-front">
        <img src={pic} alt="Avatar"  style={{width:"150px",height:"150px"}} />
      </div>
      <div className="flip-card-back">
        <img src={Image} style={{width:"150px",height:"150px"}} />
      </div>
    </div>
  </div> 
  )
}
