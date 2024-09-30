import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const suggestionArr=["oksbi","paytm","upi","razorpay","jupiteraxis","mobiquick"]
function App() {
const [text,setText]=useState("")
const [suggestions,setSuggestions]=useState(suggestionArr)
const [active,setActive]=useState(false)
const [currentSuggestion,setCurrentSuggestion]=useState(suggestions[0])

function handleInputChange(e){
  let val=e.target.value
  setText(val)
  let check=val.includes("@")
  if(check){
    setActive(true)
     handleSuggestion(val)

  }else{
    setActive(false)
    setSuggestions(suggestionArr)
    setCurrentSuggestion(suggestionArr[0])
  }
  
}
function handleSuggestion(val){
  let [temp,sugg]=val.split("@")
  let arr=suggestionArr.filter((el)=>el.includes(sugg))
  setSuggestions(arr)
  setCurrentSuggestion(arr[0])
}

function HandleElementClick(e){
    setActive(false)
    setCurrentSuggestion(e.target.innerText)
    let [val,slug]=text.split("@")
    setText(val+"@"+e.target.innerText)
}
function HandleKey(e){
  console.log(e.keyCode)
  if(e.keyCode===40){
    let currentIndex=suggestions.indexOf(currentSuggestion)
    
    if(suggestions.length>currentIndex+1){
      console.log(suggestions[currentIndex+1])
      setCurrentSuggestion(suggestions[currentIndex+1])
    }
    
  }
  if(e.keyCode===38){
    let currentIndex=suggestions.indexOf(currentSuggestion)
    
    if(currentIndex-1>=0){
      console.log(suggestions[currentIndex-1])
      setCurrentSuggestion(suggestions[currentIndex-1])
    }
    
  }
  if(e.keyCode===13&&active){

    let [val,slug]=text.split("@")
    setText(val+"@"+currentSuggestion)
    setActive(false)
  }
}

  return (
    <div>
      <div>
      <input placeholder='enter upi id' value={text} onChange={handleInputChange}  onKeyDown={HandleKey}/>
      <span>{active&&text.split("@")[0]+"@"+currentSuggestion}</span>
      </div>
      <div>
         <div>
         {
          active&&suggestions.map((el)=><li style={{fontSize:el===currentSuggestion?"24px":"16px"}} key={el} onClick={HandleElementClick}>{el}</li>)
         }
         </div>
      </div>
       
    </div>
  )
}

export default App
