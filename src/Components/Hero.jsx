function Hero(props) {
  console.log(props)
  return (
    <div
      style={{
        backgroundColor: "#DCE5DC",
        width: "600px",
        padding: "20px",
        margin: "20px",
      }}
    >
      <h1>My name is {props.heroName}</h1>
      <img
        src={props.heroImage}
        style={{ width: "400px", borderRadius: "5px" }}
      ></img>
    </div>
  );
}

export default Hero;
