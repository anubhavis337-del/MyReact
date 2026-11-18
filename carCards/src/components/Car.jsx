function Car(props){
return(
    <div>
      <h1>It is OG {props.CarName}</h1>
      <img src={props.Image}
      style={{width:"600px", borderRadius:"50px",border:"5px solid black"}}
      ></img>
    </div>
)
}
export default Car;