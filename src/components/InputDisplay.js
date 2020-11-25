import React, { useState, useEffect } from 'react';
import Interweave from 'interweave'
import blinker from './blinker'


function InputDisplay(props) {
 
  // const [blinkerString, setBlinkerString] = useState("")
  const [blinkerColor, setBlinkerColor] = useState("black")
  
  useEffect(() => {    
    const interval =  setInterval(
        ()=>{
      if(blinkerColor=="black"){
        // setBlinkerColor("white")
        return setBlinkerColor("white")

      }  
      else { 
        // setBlinkerColor("black")
      return  setBlinkerColor("black")
      }
      // return setBlinkerString(blinker(props.string,props.stringPos, blinkerColor))
  
  },props.interval)


    return () => clearInterval(interval);
  })



  return (
    <div id="inputDisplay" className="inputDisplay">
    {/* <div id="inputDisplay" className="inputDisplay"> */}
  <Interweave content={blinker(props.string,props.stringPos, blinkerColor)}></Interweave>
  </div>
  )
}

export default InputDisplay;