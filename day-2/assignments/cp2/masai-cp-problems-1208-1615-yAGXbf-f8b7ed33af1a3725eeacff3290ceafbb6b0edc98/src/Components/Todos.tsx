import React, { useEffect } from "react";
import { mytodo } from "./Add";
import Todo from "./Todo";
import { useState } from "react";
function Todos() {
  const [todo,setTodo]=useState<mytodo[]>([])
  

// console.log("hello")
 useEffect(()=>{

const data=JSON.parse(localStorage.getItem("todos")||"[]")
setTodo(data)
 },[todo.length])
const updatestatus=(id:number)=>{
  const newdata=todo.map((el)=>el.id===id?({...el,status:!el.status}):el)
setTodo(newdata)
console.log(todo)
localStorage.setItem("todos",JSON.stringify(newdata))
}
  return <div>
 
    {/* All Todos Should be shown here  */}
   {todo.map((item:mytodo)=>
   <Todo  updatestatus={updatestatus} key={item.id} {...item}/>
   )} 

    </div>;
}

export default Todos;

