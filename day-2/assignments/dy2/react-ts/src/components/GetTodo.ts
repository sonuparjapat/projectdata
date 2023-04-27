import axios, { AxiosResponse } from "axios"
import { todo } from "./commontodo"

export const gettodo=async()=>{
try{
    
  let res:AxiosResponse<todo[]>= await axios.get("http://localhost:8080/todos")
  return res.data
}catch(error){
    console.log(error)
}}
