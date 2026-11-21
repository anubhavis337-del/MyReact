import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [operator, setOperator] = useState("");
  const [firstNum, setFirstnum] = useState(null);
  const [output, setOutput] = useState("");
  const [secondNum, setSecondnum] = useState("");

  function handleClick(num) {
    if (input === "0") {
      setInput(num);
    } else {
      setInput(input + num);
    }
    if (operator !== "") {
      setSecondnum(secondNum + num);
    }
  }
  function handleOperator(op) {
    setFirstnum(Number(input));
    setOperator(op);
    setInput(input + " " + op);
    setSecondnum("");
  }

  function handleClear() {
    setInput("");
    setOperator("");
    setFirstnum(null);
    setOutput("");
    setSecondnum("");
  }
  function calculateResult() {
    let secondNumber = Number(secondNum);
    let result = 0;

    console.log(secondNumber);

    if (operator === "+") {
      result = firstNum + secondNumber;
    } else if (operator === "-") {
      result = firstNum - secondNumber;
    } else if (operator === "*") {
      result = firstNum * secondNumber;
    } else if (operator === "/") {
      result = firstNum / secondNumber;
    }
    console.log(result);

    setOutput(String(result));
    setInput("");
    setFirstnum(null);
    setOperator("");
  }

  return (
    <div className="container">

    <div className="calculator">
      <div className="display">
        <div className="input">{input}</div>
        <div className="output">{output}</div>
      </div>

      <div className="buttons">
        <button onClick={handleClear}>C</button>
        <button>⌫</button>
        <button>%</button>
        <button onClick={() => handleOperator("/")}>/</button>

        <button onClick={() => handleClick("7")}>7</button>
        <button>8</button>
        <button>9</button>
        <button onClick={() => handleOperator("*")}>*</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button>5</button>
        <button>6</button>
        <button onClick={() => handleOperator("-")}>-</button>

        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button onClick={() => handleOperator("+")}>+</button>

        <button>00</button>
        <button>0</button>
        <button>.</button>
        <button onClick={calculateResult}>=</button>
      </div>
    </div>

    <div className="quotebox">
        <h1>hiiii this is first quote</h1>

        
      </div>
    </div>
  );
};

export default Calculator;
