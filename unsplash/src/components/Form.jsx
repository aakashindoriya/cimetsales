import React, { useState } from 'react'

export const Form = () => {
    let [text,setText]=useState("")
  return (
    <div>
        <form>
            <label>Search Text</label>
            <input type="text" placeholder='enter search term' value={text} onChange={(e)=>setText(e.target.value)} />
            <label>Random images</label>
            <input type="checkbox" name="randomImages" />
            <select name="orientation" id="">
                <option value="landscape">Landscape</option>
                <option value="portrait">Portrait</option>
                <option value="square">Square</option>
            </select>
            <input type="number" name="count" placeholder='image count'/>
            <input type="submit"  />
        </form>
    </div>
  )
}
