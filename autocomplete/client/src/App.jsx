import { useState } from 'react'
import './App.css'

const suggestionArr = ["oksbi", "paytm", "upi", "razorpay", "jupiteraxis", "mobiquick"]

function App() {
  const [text, setText] = useState("")
  const [suggestions, setSuggestions] = useState(suggestionArr)
  const [active, setActive] = useState(false)
  const [currentSuggestion, setCurrentSuggestion] = useState(suggestions[0])

  function handleInputChange(e) {
    let val = e.target.value
    setText(val)
    let check = val.includes("@")
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
  }

  return (
    <div className="container">
      <div className="input-wrapper">
        <span>{active && text.split("@")[0] + "@" + currentSuggestion}</span>
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
