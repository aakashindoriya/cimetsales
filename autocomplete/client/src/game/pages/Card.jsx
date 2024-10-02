import Image from "../../assets/defaultImg.jpg"
export const Card = ({pic,name,fliped,id,HandleCardClick,time}) => {
  let show=fliped.find((el)=>el.id==id)
  return (
    <div className="flip-card" onClick={()=>{
      if(show||time<=0)return
      HandleCardClick(id,name)}}>
    <div className="flip-card-inner" style={{transform:!show&&"rotateY(180deg)"}} > 
      <div className="flip-card-front">
        <img src={pic} alt="Avatar"  style={{width:"150px",height:"150px"}} />
      </div>
      <div className="flip-card-back">
        <img src={Image} style={{width:"155px",height:"155px"}} />
      </div>
    </div>
  </div> 
  )
}
