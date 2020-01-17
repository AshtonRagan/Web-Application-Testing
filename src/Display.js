import React, { useState } from "react"
import addPoint from "./Utils/funct"
import styles from "./styles/style.css"



export default function Display (){

const [strike,setStrike]=useState(0)
const [balls,setBalls]=useState(0)
 const [fouls,setFouls]=useState(0)

 const Reset =()=>{
    setStrike(0)
    setBalls(0)
    setFouls(0)
 }
 const handleStrike =() =>{
    if(strike < 2) {
    setStrike(strike +1)
    }else{
        alert("Youre OUT!")
        Reset();
    }
    
}
 const handleBalls =() =>{
    if(balls < 3) {
        setBalls(balls +1)
        }else{
            alert("Youre OUT!")
           Reset();
        }

}
  const handleFouls =() =>{
setFouls(fouls +1)
if(strike < 2){ setStrike(strike  +1)}

}




return(
<div>Hello
<h1> Strikes: {strike}</h1>
<h1> Balls: {balls}</h1>
<h1> Fouls: {fouls}</h1>
<button className="btn" onClick ={handleStrike}>Add Strike</button>
<button className="btn"onClick ={handleBalls}>Add Ball</button>
<button className="btn"onClick ={handleFouls}>Foul</button>
<button className="btn"onClick ={Reset}>Hit</button>
</div>
)

}