function Car(props){
return(
    <div className="car-card">
      <h1 className="heading">It is OG {props.CarName}</h1>
      <img className="image" src={props.Image}
      ></img>
    </div>
)
}
export default Car;