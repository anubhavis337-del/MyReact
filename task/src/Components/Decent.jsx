import React, { useEffect, useState } from "react";
import './Decent.css'

const Decent = () => {
  const [input, setInput] = useState("");
  const [operator, setOperator] = useState("");
  const [firstNum, setFirstnum] = useState(null);
  const [output, setOutput] = useState("");
  const [secondNum, setSecondnum] = useState("");
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  //----------- API -------------------

  async function fetchQuote() {
    let apiKey = import.meta.env.VITE_API_KEY;
    let apiUrl = "https://api.api-ninjas.com/v2/randomquotes";

    const response = await fetch(apiUrl, {
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

  //----- CALCULATOR ---------------------

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

    if (operator === "+") {
      result = firstNum + secondNumber;
    } else if (operator === "-") {
      result = firstNum - secondNumber;
    } else if (operator === "*") {
      result = firstNum * secondNumber;
    } else if (operator === "/") {
      result = firstNum / secondNumber;
    }

    setOutput(String(result));
    setInput("");
    setFirstnum(null);
    setOperator("");
  }

  return (
    <div className="page">

      {/* Header */}
      <header className="header">
        <div className="logo">
          <span className="logo-icon">✦</span>
          <h2>Calc<span>Vibe</span></h2>
        </div>

        <nav>
          <a href="#calculator">Calculator</a>
          <a href="#quotes">Daily Quotes</a>
        </nav>

        <div className="header-tag">
          React Project
        </div>
      </header>

      {/* Main Content */}
      <main className="container">

        {/* Calculator */}
        <section className="calculator-section" id="calculator">

          <div className="section-heading">
            <span>01 / CALCULATE</span>
            <h1>Smart Calculator</h1>
            <p>Simple calculations, made easier.</p>
          </div>

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
        </section>

        {/* Quote Section */}
        <section className="quote-section" id="quotes">

          <div className="section-heading">
            <span>02 / INSPIRATION</span>
            <h1>A Thought for Today</h1>
            <p>A little inspiration goes a long way.</p>
          </div>

          <div className="quotebox">
            <div className="quote-symbol">“</div>

            <h2>{quote}</h2>

            <p>— {author}</p>

            <button onClick={fetchQuote}>
              ✦ New Quote
            </button>

            <small>New inspiration every minute</small>
          </div>

        </section>
      </main>

      {/* Footer */}
      <footer className="footer">

        <div>
          <h3>Calc<span>Vibe</span></h3>
          <p>Calculate smart. Think positive.</p>
        </div>

        <p className="copyright">
          © 2026 CalcVibe. Built with React.
        </p>

        <div className="footer-links">
          <a href="#calculator">Calculator</a>
          <a href="#quotes">Quotes</a>
        </div>

      </footer>

    </div>
  );
};

export default Decent;