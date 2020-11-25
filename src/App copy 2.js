import React, { useState, useEffect } from 'react';
import './App.css';
import InputDisplay from './components/InputDisplay'
import stringEditor from './components/stringEditor'
import * as math from 'mathjs';
import OutputDisplay from './components/OutputDisplay'
// currentinput is full string only
// displayedInput depends on config inputparser &&  stringposition and currentinput ONLY, however need to create middleware to parse these into new string ==> useEffect to keep track of those two variables 

function endsWithSymbolChecker(string){
  const stringEndsWith = {
     plus: string.endsWith("+"),
     minus: string.endsWith("-"),
     divider: string.endsWith("/"),
     multiply: string.endsWith("*"),
     powerOf: string.endsWith("^"),    
     plus2: string.startsWith("+"),
     minus2: string.startsWith("-"),
     divider2: string.startsWith("/"),
     multiply2: string.startsWith("*"),
     powerOf2: string.startsWith("^"),
   }
//  console.log("endsWithSymbolChecker", string)
  if (stringEndsWith.plus || stringEndsWith.minus || stringEndsWith.divider || stringEndsWith.multiply || stringEndsWith.powerOf || stringEndsWith.plus2 || stringEndsWith.minus2 || stringEndsWith.divider2 || stringEndsWith.multiply2 || stringEndsWith.powerOf2){
    return true
  }
 
  else {
    return false
  }
 
 }
 
 function checkStringParenthesis (string){
   var parenThesisLeft = [];
   var parenThesisRight = [];
   
   for(var i=0;i<string.length;i++){
     const curChar = string[i];
     // const nextChar = (i+1 < string.length)? string[i+1]:false;
     // const nextCharNumber = ((nextChar == "0")||(nextChar == "1")||(nextChar == "2")||(nextChar == "3")||(nextChar == "4")||(nextChar == "5")||(nextChar == "6")||(nextChar == "7")||(nextChar == "8")||(nextChar == "9"))
 
     if(curChar=="("){
 
 
       parenThesisLeft.push(i)
     }
   
     if(curChar==")"){
       parenThesisRight.push(i)
     }
   }
 
   for(var x=0;x<parenThesisRight.length;x++){
     var parenThesisRightPosition = parenThesisRight[x]
     var parenThesisLeftPosition  = parenThesisLeft[x]
     var parenThesisNotEmpty = ((parenThesisLeftPosition+1)<parenThesisRightPosition)
     var rightOrder = (parenThesisLeftPosition < parenThesisRightPosition)
     // console.log("parenThesisLeftPosition",parenThesisLeftPosition)
     // console.log("rightOrder", rightOrder)
 
     // console.log("parenThesisNotEmpty", parenThesisNotEmpty)
 
     if(rightOrder && parenThesisNotEmpty){
      //  console.log("Parenthesis content available and in right order closed and opened")
 
      const thesisString = string.substring(parenThesisLeftPosition+1,parenThesisRightPosition);
      // console.log("thesisString", thesisString)
      const thesisStringCorrect = !(endsWithSymbolChecker(thesisString))
      // console.log("Parenthesis string content has correct syntax: ",thesisStringCorrect)

      if (thesisStringCorrect){
        continue
        
      }else {
        return false
      }
     }
     else{
      //  console.log("Rules are not met (wrong order or empty parenthesis)")
       return false
     }
   
   }
 
   return true
   
 
  }
 
 

function App() {
  const [stringPosition, setStringPosition] = useState(0)
  const [currentInput, setCurrentInput] = useState("0")
  const [resultString, setResultString] = useState("0")
  // const [historyHTML, setHistoryHTML] =  useState("")


  // todo: 
  // 1) create currentInput2Hilight parser to change currentInput based on intended highlighted character / number from string
  // 2) create currentInput2Output parser when hitting = button and push that result to Mathjs and from there to currentSum
  // 3) 

  const goToDirection = (direction, currentInputChanged) => {

    if (direction == "<") {
      if (stringPosition - 1 >= 0) {
        return setStringPosition(stringPosition - 1)
      }
      else {
        return setStringPosition(-1)
      }

    }
    if (direction == ">") {

      if (currentInputChanged == true) {
        return setStringPosition(stringPosition + 1)
      }

      if (stringPosition < currentInput.length - 1) {
        // console.log("WE ARE DOING +1 ON STRINGPOSITION NOW")
        return setStringPosition(stringPosition + 1)
      }

      return
    }
  }


  const Clear = () => {
    setStringPosition(0)
    setCurrentInput("0");
    setResultString("0")
  }

  const clearInputField = (value) => {

    setCurrentInput("0");
    setStringPosition(0)

  }


  useEffect(() => {
    // const stringEndsSymbolFree = !(endsWithSymbolChecker(currentInput))

    // if (stringEndsSymbolFree) {







    //   if(currentInput.includes("(") || currentInput.includes(")")){
     
     
    //     const bracketsLeftArray=  currentInput.split('(');
    //     const bracketsRightArray= currentInput.split(')');
    //     const bracketsLeft=  bracketsLeftArray.length;
    //     const bracketsRight= bracketsRightArray.length;


    //     if(bracketsLeft == bracketsRight){



    //       return  (checkStringParenthesis(currentInput))? setResultString(math.evaluate(currentInput).toString()):null





           
    //     }
    //     else { // bracketsLeft != bracketsRight
    //       return
    //     }
    //   }






    //   return  setResultString(math.evaluate(currentInput).toString())




    // }
    // else {
    //   return
    // }
const test = () => {
    try {
      return math.evaluate(currentInput).toString()
    } catch (error) {
      return false
    }

}

const content = test()

// console.log("useEffect ===> content ===>",content)

if(content != false){
  setResultString(content)
}

  }, [currentInput])


  const inputParser = (value) => {


    const symbol = (isNaN(value));
    const addingNumbers2String = !symbol;

    if (value == 0 && currentInput == "0") {
      return
    }

    if (value != 0 && value != "Clear" && currentInput == "0") {
      return setCurrentInput(value.toString())
    }

    if (symbol) {
      if (value == "<" || value == ">") {
        return goToDirection(value) 
      }

      if (value == "=") {

        return clearInputField(currentInput)
      }

      if (value == "Clear") {
        return Clear()
      }

      if (value == "÷") {
        value = "/"
        goToDirection(">", true)
        return setCurrentInput(stringEditor(currentInput, stringPosition, value))

      }

      if (value == "Del"){
        goToDirection(">")
        return setCurrentInput(stringEditor(currentInput, stringPosition, value))
      }

    }

    goToDirection(">", true)
    return setCurrentInput(stringEditor(currentInput, stringPosition, value))

  }

  function CalcButton(props) {

    return (
      <>
        <button className={`buttons button-size ${(props.extraClasses) ? props.extraClasses : ""}`} onClick={() => { inputParser(props.value) }}>{props.value}</button>
      </>
    )
  }




  return (
    <div className="App">
      <div className="app-title">
        <h3> Refactored Calculator</h3>
      </div>
      {/*       
      <div className="history">
        <Interweave content={historyHTML}></Interweave>
      </div>
      <form> */}
      {/* <input type="text" id="result" placeholder="0" value={(currentSum == 0) ? "" : currentSum} readOnly /> */}

      {/* <input type="text" id="num" placeholder="0" value={currentInput} readOnly/> */}
      {/* </form> */}

      <InputDisplay string={currentInput} stringPos={stringPosition} interval={200}></InputDisplay>
      <OutputDisplay string={resultString}></OutputDisplay>

      <div className="allButtons">
        <CalcButton value={1}></CalcButton>
        <CalcButton value={2}></CalcButton>
        <CalcButton value={3}></CalcButton>
        <CalcButton value={"+"}></CalcButton>
        <CalcButton value={4}></CalcButton>
        <CalcButton value={5}></CalcButton>
        <CalcButton value={6}></CalcButton>
        <CalcButton value={"-"}></CalcButton>
        <CalcButton value={7}></CalcButton>
        <CalcButton value={8}></CalcButton>
        <CalcButton value={9}></CalcButton>
        <CalcButton value={"*"}></CalcButton>
        <CalcButton value={"<"}></CalcButton>
        <CalcButton value={0}></CalcButton>
        <CalcButton value={">"}></CalcButton>
        <CalcButton value={"÷"}></CalcButton>
        {/* <CalcButton value={""}></CalcButton> */}
        <CalcButton value={"("} extraClasses="parenThesis"></CalcButton>
        <CalcButton value={")"} extraClasses="parenThesis"></CalcButton>
        <CalcButton value={"^"} extraClasses="parenThesis"></CalcButton>
        <CalcButton value={"="}></CalcButton>
        <CalcButton value={"Clear"} extraClasses="clearButton"></CalcButton>
        <CalcButton value={"Del"}></CalcButton>

      </div>
    </div>
  );
}

export default App;