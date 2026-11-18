import { useState } from "react";
import "./App.css";
import Car from "./components/Car";

function App() {
  return (
    <div style={{display:"flex"}}>
      <Car 
      CarName="Thar"
      Image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAL5qnSxww9Os_yZrvDhAT13K7oUe3ioOMqUOpAS3w1g&s=10" />
      <Car
       CarName="BMW"
       Image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEiwKEarU8qvuHkf-m-VCI-8qxygnSiruZKbQKY8wvag&s=10"/>
      <Car 
      CarName="Defender"
      Image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcZLdijHDCMN5kb5-KR8ZQ6OBrqZSYlqaW7PPPCM7a4Q&s=10"/>
      <Car 
      CarName="Roll Royce"
      Image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv-bvumL7oKlU89tn81_8yFdFkFeKb2CsVOuWV6MiBxA&s=10"/>
      <Car 
      CarName="Mercedes"
      Image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMuSyBpYzFVjXDQoGeq3JSW_g9aptkT72bHx_51r-tXQ&s=10"/>
    </div>
  );
}
export default App;
