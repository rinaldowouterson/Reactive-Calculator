function adding(string, position, character) {
    // console.log("string @ adding going in",string)

    if(position == -1){
    // console.log("string @ adding going out == -1",character+string)

        return character+string
      }
    // console.log("position", position)
    var beginString = string.substr(0,position)
    // console.log("beginString",beginString)
    var middleString = string.substr(position,1) 
    // console.log("middleString",middleString)
    var endString = string.substr(position+1,string.length-1)
    // console.log("endString",endString)
    var newString = beginString+middleString+character+endString
    // console.log("string @ adding going out != -1",string)

    return newString
    }

    function deleter(string, position) {
      // console.log("string @ adding going in",string)
  
      if(position == -1){
      // console.log("string @ adding going out == -1",character+string)
  
          return
        }
      // console.log("position", position)
      var beginString = string.substr(0,position)
      // console.log("beginString",beginString)
      var middleString = string.substr(position,1) 
      // console.log("middleString",middleString)
      var endString = string.substr(position+1,string.length-1)
      // console.log("endString",endString)
      var newString = beginString+endString
      // console.log("string @ adding going out != -1",string)
  
      return newString
      }
  

    function stringEditor (string, position, character) {
    const deleting = (character == "Del")
    if(deleting){
      // do something with string
      return deleter(string, position)
    }
    else {
      // append to string
      return adding(string, position, character);

    }
  }

  // import React, { useState, useEffect } from 'react';

  
  export default stringEditor