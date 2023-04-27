import React, { memo } from "react";
export interface mytodo{
  id:number,
  title:string,
  description:string,
  status:boolean
}
import { useState } from "react";
import Todos from "./Todos";
const Add = () => {
  const todos=JSON.parse(localStorage.getItem("todos")||"[]")

 
  const [title,setTiltle]=useState("")
  const [desc,setDesc]=useState("")
const handlesubmit=(e:React.FormEvent<HTMLFormElement>)=>{
 e.preventDefault()
const newtodo={
  id:Math.random(),
  title:title,
  description:desc,
  status:false
}


localStorage.setItem("todos",JSON.stringify([...todos,newtodo]))
setTiltle("")
setDesc("")
}

  return (
    <>
    <form onSubmit={handlesubmit} data-testid="form">
      <input onChange={(e)=>setTiltle(e.target.value)} data-testid="title" type="text" id="title" />
      <textarea
        data-testid="description"
        id="description"
        cols={30}
        rows={10}
        onChange={(e)=>setTiltle(e.target.value)}
      ></textarea>
      <input type="submit" value="Craete Todo" />
    </form>
  
{/* <Todos state={state}/> */}

    </>
  );
}

export default Add;
