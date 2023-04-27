import React, { useEffect, useState } from 'react'
import { postTodo } from './posttodo'
import { todo } from './commontodo'
import { gettodo } from './GetTodo'
import TodoItem from './TodoItem'
export default function Todoinput() {
    const [todos,setTodos]=useState<todo[]>([])
    const [title,setTitle]=useState<string>("")
    const handlechange=(e:React.ChangeEvent<HTMLInputElement>)=>{
setTitle(e.target.value)
    }
    const handlesubmit=(e:React.FormEvent<HTMLFormElement>)=>{
e.preventDefault()
        postTodo(title)

setTitle("")
    }
    useEffect(()=>{
gettodo().then((res)=>{
setTodos(res)
})
    },[])
  return (
    <div>
        <form onSubmit={handlesubmit}>

            <input placeholder="Add Todo" onChange={handlechange}/>
            <button>Add Todo</button>
        </form>
      
    </div>
  )
}
