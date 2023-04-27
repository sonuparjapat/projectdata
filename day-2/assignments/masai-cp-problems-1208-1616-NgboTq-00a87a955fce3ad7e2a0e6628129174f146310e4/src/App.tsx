import React from "react";
import { useState } from "react";
function App() {
  const x=(localStorage.getItem("counter"))||0
  const [count,setCount]=useState(Number(x))

const handlecount=(e:number)=>{

setCount((pre)=>pre+e)


}
const handleother=(e:number)=>{
  setCount((pre)=>pre+e)
}
localStorage.setItem("counter",`${count}`)

console.log(x)
  return (
    <div className="App">
      <h1 data-testid="counter">{count}</h1>
      <button  onClick={(e)=>handlecount(1)} data-testid="increment">Increment</button>
      <button onClick={(e)=>handlecount(-1)} data-testid="decrement">Decrement</button>
      <button  onClick={(e)=>handleother(5)} data-testid="increment5">Increment 5 times</button>
      <button onClick={(e)=>handlecount(-5)} data-testid="decrement5">Decrement 5 times</button>
    </div>
  );
}

export default App;
