import React, { useState } from "react"
import addPoint from "./Utils/funct"



export default function Display (){

const [strike,setStrike]=useState(0)
const [balls,setBalls]=useState(0)
 const [fouls,setFouls]=useState(0)

 const handleStrike =() =>{
    if(strike < 2) {
    setStrike(strike +1)
    }else{
        alert("Youre OUT!")
        setStrike(0)
        setBalls(0)
    }
    
}
 const handleBalls =() =>{
    if(balls < 3) {
        setBalls(balls +1)
        }else{
            alert("Youre OUT!")
            setBalls(0)
            setStrike(0)
        }

}
  const handleFouls =() =>{
setFouls(fouls +1)
if(strike < 2){ setStrike(strike  +1)}

}

 const handleHit = () => {
setStrike(0)
setBalls(0)
setFouls(0)
    
}


return(
<div>Hello
<h1> Strikes: {strike}</h1>
<h1> Balls: {balls}</h1>
<h1> Fouls: {fouls}</h1>
<buttom onClick ={handleStrike}>Add Strike</buttom>
<buttom onClick ={handleBalls}>Add Ball</buttom>
<buttom onClick ={handleFouls}>Foul</buttom>
<buttom onClick ={handleHit}>Hit</buttom>
</div>
)

}