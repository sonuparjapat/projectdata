import axios from "axios"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes"

export const authpending=()=>{
    return {type:LOGIN_REQUEST}
}
export const authpsuccess=(payload)=>{
    return {type:LOGIN_SUCCESS,payload}
}
export const authfail=()=>{
    return {type:LOGIN_FAILURE}
}
export const authdata=(obj)=>(dispatch)=>{
    console.log(obj)
    dispatch(authpending())
return axios.post("https://reqres.in/api/login",obj).then((res)=>{

    console.log(res.data.token)
  
    dispatch(authpsuccess(res.data.token))
   
}).catch((error)=>{
    dispatch(authfail())
})
}