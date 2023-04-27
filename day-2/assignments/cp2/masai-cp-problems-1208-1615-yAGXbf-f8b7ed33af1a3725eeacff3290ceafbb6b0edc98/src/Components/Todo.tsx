import React from "react";
import { mytodo } from "./Add";
interface props{
id:number,
  title:string,
  description:string,
  status:boolean,
  updatestatus:(id:number)=>void
}
function Todo({id,title,description,status,updatestatus}:props) {
console.log(false)
//  const handlechange=()=>{
//   updatestatus()
//  }
  return (
    <div data-testid="todo-container">
      <h2 data-testid="todo-title">{/* Title should come here  */} {title}</h2>
      <p data-testid="todo-desc">{/* Description should come here  */}{description}</p>
      {/* Based on the status value below checkbox will be checked/unchecked  */}
      <input 
   
      
      checked={status} 
      onChange={()=>updatestatus(id)} data-testid="todo-status" type="checkbox" />
    </div>
  )
}

export default Todo;
