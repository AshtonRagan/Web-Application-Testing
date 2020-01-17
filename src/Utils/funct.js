import React from "react"

export const addPoint = (pts) =>{
return pts + 1
}



export const handleStrike =(pts) =>{
    if(pts < 2) {
    return pts +1
    }else{
        
        return pts=0
       
    }
}
    export default addPoint