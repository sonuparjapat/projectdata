import { useState } from "react"

export default function Counter(){
    const [count,setCount]=useState(0)
    const handleAdd=()=>{
        setCount((pre)=>pre+1)
    }
    const handleReduce=()=>{
        setCount((pre)=>pre-1)
    }
    return (
        <>
        <h3 data-testid="counter">Counter:{count}</h3>
        <button  className="add" onClick={handleAdd}>ADD</button>
        <button className="reduce"  onClick={handleReduce}>REDUCE</button>



        </>
    )
}