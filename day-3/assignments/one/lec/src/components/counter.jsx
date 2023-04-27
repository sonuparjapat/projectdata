import { useState } from "react"
import Button from "./Button"
export default function Counter(){
    const [count,setCount]=useState(0)
    const handleadd=(x)=>{
        setCount((pre)=>pre+x)
    }
    return (
        <>
         <h3 data-testid="counter">Counter:{count}</h3>
         <Button color="red" size="large"  handleadd={()=>(handleadd(5))}>
    ADD
         </Button>
         <Button color="red" size="large" handleadd={()=>handleadd(-5)}>
 REDUCE
         </Button>
         </>
    )
}