import axios from "axios"
import {AxiosResponse} from "axios"
import { todo } from "./commontodo"
export const postTodo=async(title:string)=>{
    const newTodo={
        id:Math.random(),
        title:title,
        status:false,

    }
    try{
        const res:AxiosResponse<todo>=await axios.post(" http://localhost:8080/todos"
        ,newTodo)}catch(error){
            console.log(error)
        }
}