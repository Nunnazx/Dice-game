
import { useState } from "react";
import Dice from "./Components/Dice"
import Gameplay from "./Components/Gameplay"
function App() {
 const [isGameplay,setisGameplay]=useState(false)

 const  toggalegame=()=> {
  setisGameplay((prev)=>!prev);
  
 };
  return (
    <>{isGameplay?<Gameplay/>:<Dice toggle={toggalegame}/>}</>
  );
}

export default App
