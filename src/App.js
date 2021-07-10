import { useState, useEffect } from 'react';
import './App.css';
import Buttons from './Components/Buttons';
import Input from './Components/Input';


function App() {
  const [idArray, setidArray] = useState([
    ["one", 1],
    ["two", 2] ,
    ["three", 3],
    ["four", 4],
    ["five", 5],
    ["six", 6],
    ["seven", 7],
    ["eight", 8],
    ["nine", 9],
    ["add", "+"],
    ["subtract", "-"],
    ["divide", "/"],
    ["multiply", "x"],
    ["clear", "AC"],
    ["zero", 0],
    ["decimal", "."],
    ["equals", "="],
])
  const [input, setInput] = useState([0])
  const [evalTracker, setEvalTracker] = useState([0])

  let onClickFunc = (val) => {
    if (input.length < 16) {
      if ((/\D/).test(val) && ((/[-*\/\+\.]$/).test(input))) {
        console.log("this is incorrect")
    }
    else if (val === "=" && (/\D$/).test(input)) {
      console.log("incorrect")
    }

    if ((/[*x\/]/).test(val) && (/[-*x\/\+]$/).test(input)) {
      if (input.length > 1) {
      let inputCharArray = input.split('');
      inputCharArray[inputCharArray.length -1] = ''
      setInput([...inputCharArray, val].join(''))
      }
      else {
        console.log('help')
      }
    }
    else if (val === "AC") {
      setInput([0])
      setEvalTracker([0])
    }
    else if (val === "+" && (/\+$/).test(input)) {
      console.log("incorrect")
    }
    else if(val === "x") {
      setInput([...input, "*"].join(''));
    }
    else if (input === "-" && (/[-x\/=\+]/).test(val)) {
      console.log("this is incorrect")
    }
    else if (val === "-" && (/[-\+\/x=]$/).test(input)) {
      console.log("incorrect")
    }
    else if (val === "." && (/(\d\.)$/).test(input)) {
      console.log("this is incorrect")
    }
    else if (val === "." && (/(\d\.\d+)$/).test(input)) {
      console.log("this is incorrect")
    }
    else if (input[0] === 0) {
      setInput([val])
    }
    else if (input === 0 && (/[x\/=]/).test(val)) {
      console.log("this is incorrect")
    }
    else if (val === "=" && ((/\d$/).test(input))) {
      setInput([...input].join(''));
      setInput([eval((input))]);
      setEvalTracker([1])
    }
    else if (evalTracker[0] === 1 && (/[\d\.]/).test(val)) {
      setInput([val])
      setEvalTracker([0])
      // if equals has already been pressed, and another val 1234567890 has been entered, change input to val
    }
    else {
        setInput([...input, val].join(''));
        setEvalTracker([0])
    }
  }
  else {
    console.log("LENGTH TOO LONG")
    setInput("LENGTH IS TOO LONG")
    if (val === "AC") {
      setInput([0])
    }
  }
}

  return (
    <div className="App">
      <Input input={input} />
     <Buttons idArray={idArray} onClickFunc={onClickFunc}/>
    </div>
  );
}

export default App;
