import React, { useState, useEffect } from 'react';
import './App.css';
import InputDisplay from './components/InputDisplay'
import stringEditor from './components/stringEditor'
import * as math from 'mathjs';
import OutputDisplay from './components/OutputDisplay'

function App() {
  const [stringPosition, setStringPosition] = useState(0)
  const [currentInput, setCurrentInput] = useState("0")
  const [resultString, setResultString] = useState("0")
  // const [historyHTML, setHistoryHTML] =  useState("")

  
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

  const test = () => {
    try {
      return math.evaluate(currentInput).toString()
    } catch (error) {
      return false
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
console.log("something")
const content = test()

if(content != false){
  setResultString(content)
}

  }, [currentInput])


  const inputParser = (value) => {


    const symbol = (isNaN(value));

    if (value == 0 && currentInput == "0") {
      return
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
        if(stringPosition == -1){
          return
        }
        else {
          goToDirection("<")
          return setCurrentInput(stringEditor(currentInput, stringPosition, value))
        }
        
      }

    }

    if (value != 0 && currentInput == "0") {
      return setCurrentInput(value.toString())
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
      */}

      <InputDisplay string={currentInput} stringPos={stringPosition} interval={250}></InputDisplay>
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