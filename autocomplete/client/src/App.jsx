import { useRef, useState } from 'react'
import './App.css'
import { UPI_HANDLES as suggestionArr } from './upiHandler'


function App() {
  const [text, setText] = useState("")
  const [suggestions, setSuggestions] = useState(suggestionArr)
  const [active, setActive] = useState(false)
  const [currentSuggestion, setCurrentSuggestion] = useState(suggestions[0])
  const eleRef=useRef(null)


  function MatchRegex(val){
    let regex=/^(?!.*@.*@)[a-z0-9]+(@[a-z0-9]*)?$/
    
    return regex.test(val)
  }
  function handleInputChange(e) {
    let val = e.target.value
    if(!MatchRegex(val)){
      return
    }
    setText(val)
    let check = val.includes("@")
    let recheck=val.split("@").length
    if(recheck>2){
      return alert("wrong strring")
    }
    if (check) {
      setActive(true)
      handleSuggestion(val)
    } else {
      setActive(false)
      setSuggestions(suggestionArr)
      setCurrentSuggestion(suggestionArr[0])
    }
  }

  function handleSuggestion(val) {
    let [temp, sugg] = val.split("@")
    let arr = suggestionArr.filter((el) => el.includes(sugg))
    setSuggestions(arr)
    setCurrentSuggestion(arr[0]||"")
  }

  function HandleElementClick(e) {
    setActive(false)
    setCurrentSuggestion(e.target.innerText)
    let [val, slug] = text.split("@")
    setText(val + "@" + e.target.innerText)
  }

  function HandleKey(e) {
    if (e.keyCode === 40) { // Down arrow
      let currentIndex = suggestions.indexOf(currentSuggestion)
      if (suggestions.length > currentIndex + 1) {
        setCurrentSuggestion(suggestions[currentIndex + 1])
      }
    }
    if (e.keyCode === 38) { // Up arrow
      let currentIndex = suggestions.indexOf(currentSuggestion)
      if (currentIndex - 1 >= 0) {
        setCurrentSuggestion(suggestions[currentIndex - 1])
      }
    }
    if (e.keyCode === 13 && active) { // Enter key
      let [val, slug] = text.split("@")
      setText(val + "@" + currentSuggestion)
      setActive(false)
    }
    eleRef.current.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'start' })
    
  }

  return (
    <div className="container">
      <div className="input-wrapper">
        <input  
        value={active ? text.split("@")[0] + "@" + currentSuggestion:""}
        disabled={true}
        id="back"
        />
        <input
          placeholder='Enter UPI ID'
          value={text}
          onChange={handleInputChange}
          onKeyDown={HandleKey}
        />
      </div>
      {active && (
        <ul className="suggestions">
          {suggestions.map((el) => (
            <li
              ref={el===currentSuggestion?eleRef:null}
              className={`suggestion-item ${el === currentSuggestion ? 'active' : ''}`}
              key={el}
              onClick={HandleElementClick}
            >
              {el}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
