import {useState, useEffect} from "react";

const Effects = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    // console.log("anu")
  }

  useEffect(() => {
    console.log("hey i am inside useEffects");
  },[])

 
  return (
    <div>
      <h1>count:{count}</h1>
      <button
        onClick={handleClick}
        style={{ backgroundColor: "blueviolet", width: "100px" }}
      >
        Increment
      </button>
    </div>
  );
};

export default Effects;
