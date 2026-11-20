import { useState } from "react";

const Card = () => {
  const [user, setUser] = useState({ name: "Anubhavi", age: 18 });
  const [name, setName] = useState("");

  function handleClick() {
    setUser({ ...user, age: user.age + 1 });
  }

  function handleChange(e) {
    setName(e.target.value);
  }
  return (
    <div>
      <h1>Hooks</h1>

      <div>
      <input type="text" />
      <p>
        Hello my name is {user.name} and my age is {user.age}
        <br></br>
        <button onClick={handleClick}>Change User</button>
      </p>
      </div>

      {/* <div>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={handleChange}
        />
        {name.trim() !== "" && <p>Helllo, {name}</p>}
      </div> */}
    </div>
  );
};

export default Card;
