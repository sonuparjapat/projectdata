import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getstudentdata } from "../Redux/StudentReducer/action";
import { StudentCard } from "./StudentCard";
import { useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
export const StudentList = () => {
 const location=useLocation()
  const dispatch=useDispatch()
  const [page,setPage]=useState(1)
  
  const data=useSelector((state)=>state.studentReducer.students)
  const [searchParams]=useSearchParams()
  let obj={
    params:{
      "batch":searchParams.getAll("batch"),
     "page":searchParams.get("page"),
     "limit":searchParams.get("limit")

    
    }
  }
  useEffect(()=>{
    
   dispatch(getstudentdata(obj))
  },[location.search])
  console.log(data)
  return (
    <div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:"10px"}} data-testid="student-list">
        {data.map((item)=>
        <StudentCard key={item.id} {...item}/>
        )}
        {/* Map through the student list using StudentCard component  */}
      </div>
    </div>
  );
};
