import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { authdata } from "../Redux/AuthReducer/action";
import { useLocation, useNavigate } from "react-router-dom";
export const Login = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const location=useLocation()
  // eve.holt@reqres.in
  const handlesubmit=()=>{
    let obj={
      "email":email,
      "password":password
    }
dispatch(authdata(obj)).then((res)=>{return navigate(location.state,{replace:true})})
  }
  const data=useSelector((state)=>state.authReducer)
  console.log(data)
  return (
    <DIV>
      <h2>Log In</h2>
      <input onChange={(e)=>setEmail(e.target.value)} data-testid="user-email" type="email" placeholder="Email" />
      <input
        data-testid="user-password"
        type="password"
        placeholder="Password" 
        onChange={(e)=>setPassword(e.target.value)}
      />
      <button onClick={handlesubmit} data-testid="user-login">Log In</button>
    </DIV>
  );
};

const DIV = styled.div`
  width: 400px;
  padding: 20px;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid gray;
  align-items: center;

  input {
    width: 80%;
    height: 30px;
    font-size: larger;
  }

  button {
    width: 150px;
    height: 30px;
    font-size: large;
  }
`;
