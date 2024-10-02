import React from 'react'

export const Score = ({score,attempts,time,start,finishGame,startGame}) => {
  return (
    <div id="score">
        <button onClick={()=>{
        if(start)finishGame()
        if(!start)startGame()
      }}>
        {start?"Stop":"Start"}
        </button>
        <h2>score : {score}</h2>
        <h2>attempts : {attempts}</h2>
        <h2>time : {Math.floor(time/60)}:{time%60}</h2>
    </div>
  )
}
