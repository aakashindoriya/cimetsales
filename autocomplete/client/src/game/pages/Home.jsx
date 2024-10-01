import  { useEffect, useState } from 'react'
import "./Home.css"
import shuffle from './pichers'
import { Card } from './Card'
export const Home = () => {
   const [pics,setPics]=useState([])
   const [fliped,setFliped]=useState([])
   const [score,setScore]=useState(0)
   const [attempt,setAttempt]=useState(0)
   function HandleMatching(id,name){
    let lastvalue=fliped[fliped.length-1]
    if(lastvalue.name==name){
        setScore((score)=>score+1)
        setFliped([...fliped,{id,name}])
        setAttempt((pre)=>pre+1)

    }else{
        setAttempt((pre)=>pre+1)
        setFliped([...fliped,{id,name}])
        setTimeout(()=>{
            console.log(lastvalue)
            setFliped(fliped.filter((el)=>el.id!=lastvalue.id&&el.id!=id))
        },1000)
        

    }

   }



   

   function HandleCardClick(id,name){
      
    if(fliped.length%2==1){
        HandleMatching(id,name)
    }else{
        setFliped([...fliped,{id,name}])
    }


    
   }
    useEffect(()=>{
        setPics(shuffle())
    },[])
  return (
    <div> 
        {
         pics.map((el)=><Card {...el} key={el.id} fliped={fliped} HandleCardClick={HandleCardClick}/>)
        }
    </div>
  )
}
