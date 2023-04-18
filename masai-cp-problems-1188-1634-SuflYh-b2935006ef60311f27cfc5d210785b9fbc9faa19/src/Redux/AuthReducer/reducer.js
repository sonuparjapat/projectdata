import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes"

const initialstate={
    isLoading: false,
    isError: false,
    isAuth: false,
    token: "",
  }

export const reducer=(state=initialstate,action)=>{
    const{type,payload}=action
    switch(type){
        case LOGIN_REQUEST:{
            return {...state,isLoading:true,isError:false,isAuth:false,token:""}
        }
        case LOGIN_SUCCESS:{
            return {...state,isLoading:false,isError:false,isAuth:true,token:payload}
        }
        case LOGIN_FAILURE:{
            return {...state,isLoading:false,isError:true,isAuth:false,token:""}
        }
        default:{
            return state
          }
    }
 
}
