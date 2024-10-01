import React from 'react'

export const Score = ({score,attempts,time}) => {
  return (
    <div id="score">
        <h2>score : {score}</h2>
        <h2>attempts : {attempts}</h2>
        <h2>time : {Math.floor(time/60)}:{time%60}</h2>
    </div>
  )
}
