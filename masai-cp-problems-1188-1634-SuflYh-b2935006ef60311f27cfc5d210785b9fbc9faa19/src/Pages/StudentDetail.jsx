
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getstudentdata, studentdetail } from "../Redux/StudentReducer/action";
export const StudentDetail = () => {
  const dispatch=useDispatch()
const {id}=useParams()

useEffect(()=>{
dispatch(studentdetail(id))

},[id])
const data=useSelector((state)=>state.studentReducer.students)
console.log(data)
  return (
    <div  className={"student-card"}>
    
      <h1    className="student-id">{data.id}</h1>
      <img  className="student-image" src={data.Poster}/>
      <p className="student-name"   >{data.name}</p>
      <p  className="student-code"  >{data.student_code}</p>
      <p  className="student-batch"   >{data.batch}</p>
      <p   className="student-score"  >{data.score}</p>
      <h3  className="student-green-card"   >{data.green_card}</h3>

    </div>
  );
};
