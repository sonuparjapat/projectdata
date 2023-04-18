import { STUDENT_REQUEST_FAILURE, STUDENT_REQUEST_PENDING, STUDENT_REQUEST_SUCCESS } from "./actionTypes"
import axios from "axios"
export const studentreq=()=>{
    return {type:STUDENT_REQUEST_PENDING}
}
export const studentsucc=(payload)=>{
    return {type:STUDENT_REQUEST_SUCCESS,payload}
}
export const studentfail=()=>{
    return {type:STUDENT_REQUEST_FAILURE}
}

const url="http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/students"
console.log(url)
export const getstudentdata=(obj)=>(dispatch)=>{
    studentreq()
axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/students`,obj).then((res)=>{


    dispatch(studentsucc(res.data))
}).catch((error)=>dispatch(studentfail()))
}
 


export const studentdetail=(id)=>(dispatch)=>{
    dispatch(studentreq())
    axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/students/${id}`).then((res)=>{
        dispatch(studentsucc(res.data))
    }).catch((errro)=>dispatch(studentfail()))
}