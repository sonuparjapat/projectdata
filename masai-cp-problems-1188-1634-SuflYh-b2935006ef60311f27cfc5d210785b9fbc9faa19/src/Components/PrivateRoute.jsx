import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
export const PrivateRoute = ({children}) => {
  const location=useLocation()
const data=useSelector((state)=>state.authReducer.isAuth)

if(data==false){
  return <div><Navigate to="/login" state={location.pathname} replace /></div>
}
return children
  
};
