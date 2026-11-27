import React, { useEffect, useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [operator, setOperator] = useState("");
  const [firstNum, setFirstnum] = useState(null);
  const [output, setOutput] = useState("");
  const [secondNum, setSecondnum] = useState("");
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  //-----------api-------------------

  async function fetchQuote(quote) {
    let apiKey = import.meta.env.VITE_API_KEY;
    // console.log(Boolean(apiKey));
    let apiUrl = `https://api.api-ninjas.com/v2/randomquotes`;
    const response = await fetch(apiUrl, {
      // method: "GET",
      headers: { 
        "X-Api-Key": apiKey,
      },
    });
    const data = await response.json();
    setQuote(data[0].quote);
    setAuthor(data[0].author);
  }

  useEffect(() => {
    fetchQuote();

    const interval = setInterval(() => {
      fetchQuote();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  //-----CALCULATOR---------------------

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

    // console.log(secondNumber);

    if (operator === "+") {
      result = firstNum + secondNumber;
    } else if (operator === "-") {
      result = firstNum - secondNumber;
    } else if (operator === "*") {
      result = firstNum * secondNumber;
    } else if (operator === "/") {
      result = firstNum / secondNumber;
    }
    // console.log(result);

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
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleOperator("*")}>*</button>

          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleOperator("-")}>-</button>

          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleOperator("+")}>+</button>

          <button>00</button>
          <button>0</button>
          <button>.</button>
          <button onClick={calculateResult}>=</button>
        </div>
      </div>

      <div className="quotebox">
        <h1>Code of the day..</h1>
        <h2>{quote}</h2>
        <p>{quote.author}</p>
      </div>
    </div>
  );
};

export default Calculator;
