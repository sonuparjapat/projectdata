import { useEffect, useRef } from "react"

export default function Check(){
    const inputelement=useRef()
//   console.log(inputelement.current.focus())
useEffect(()=>{
inputelement.current.focus()
},[])
    return (
        <>
        <input ref={inputelement} className="input-class" placeholder="add something"/></>
    )
}