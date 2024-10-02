import { useEffect, useRef, useState } from "react";
import "./Home.css";
import shuffle from "./pichers";
import { Card } from "./Card";
import { Score } from "./Score";
export const Home = () => {
  const [start,setStart]=useState(false)
  const [pics, setPics] = useState([]);
  const [fliped, setFliped] = useState([]);
  const [score, setScore] = useState(0);
  const [attempt, setAttempt] = useState(0);
  const [time, setTime] = useState(5 * 60);
  const timeRef=useRef(null)
  useEffect(() => {
    if(start&&fliped.length===pics.length){
      setTimeout(()=>{
        finishGame()
      },1000)
    }
    if(start){
      startTimer()
    }
    return(()=>{
      clearInterval(timeRef.current)
    })
    
  }, [fliped]);

  function startTimer(){
    timeRef.current= setInterval(() => {
      setTime((pre) => {
        if (pre <= 0) {
          clearInterval(timeRef.current);
          finishGame()
          return 0;
        }
        return pre - 1;
      });
    }, 1000);
  }
  function stopTimer(){
    clearInterval(timeRef.current)
  }
  function HandleMatching(id, name) {
    let lastvalue = fliped[fliped.length - 1];
    if (lastvalue.name == name) {
      setScore((score) => score + 1);
      setFliped([...fliped, { id, name }]);
      setAttempt((pre) => pre + 1);
    } else {
      setAttempt((pre) => pre + 1);
      setFliped([...fliped, { id, name }]);
      setTimeout(() => {
        setFliped(fliped.filter((el) => el.id != lastvalue.id && el.id != id));
      }, 1000);
    }
  }
  function startGame(){
    setStart(true)
    setPics(shuffle())
    setFliped([])
    setScore(0)
    setAttempt(0)
    setTime(5*60)

  }
  function finishGame(){
      stopTimer()
      setStart(false)
      setPics([])
      setFliped([])
  }
  function HandleCardClick(id, name) {
    if (fliped.length % 2 == 1) {
      HandleMatching(id, name);
    } else {
      setFliped([...fliped, { id, name }]);
    }
  }
  
  return (
    <div>
      <Score score={score} attempts={attempt} time={time} start={start} finishGame={finishGame} startGame={startGame} />
      
      <div id="container">
        {pics.map((el) => (
          <Card
            {...el}
            key={el.id}
            fliped={fliped}
            HandleCardClick={HandleCardClick}
            time={time}
          />
        ))}
      </div>
    </div>
  );
};
