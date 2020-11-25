// import React, { useState, useEffect } from 'react';
function blinker(string, position, color) {
    console.log("stringPosition",position)
  var beginString = string.substr(0,0+position)
  var middleString =`<div class="highlight" style="border-right: 1px solid ${color};">` +string.substr(0+position,1) + "</div>" 
  var endString = string.substr(0+position+1,string.length-1)
  // console.log(string.length)
  console.log("whole string = " +string)
  console.log("begin string: "+beginString)
  console.log("middle string = "+middleString )
  console.log("end string: "+endString)
  var newString = beginString+middleString+endString
  console.log(newString)
  
  return newString
  }
  
  export default blinker