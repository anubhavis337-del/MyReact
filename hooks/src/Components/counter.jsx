import React, {useState} from "react"

const Counter = () => {
    let [count,setcount]=useState(0);

    function handleClick(){
        count=count+1;
        setcount(count);
    }

    function handledecrement(){
      setcount(count-1)
    }
return (
    <div>
        <h1>Counter:{count}</h1>
        <button onClick={handleClick}>Increment</button>
        <button onClick={()=> handledecrement()}>Decrement</button>
    </div>
)
}

export default Counter;