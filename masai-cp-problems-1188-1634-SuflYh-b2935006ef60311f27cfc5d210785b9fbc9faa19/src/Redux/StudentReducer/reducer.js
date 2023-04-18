import { STUDENT_REQUEST_FAILURE, STUDENT_REQUEST_PENDING, STUDENT_REQUEST_SUCCESS } from "./actionTypes"

const initialstate={
    isLoading: false,
    isError: false,
    students: [],
  }

export const reducer=(state=initialstate,action)=>{
    const{type,payload}=action
    switch(type){
        case STUDENT_REQUEST_PENDING:{
            return {...state,isLoading:true,isError:false,students:[]}
        }
        case STUDENT_REQUEST_SUCCESS:{
            return {...state,isLoading:false,isError:false,students:payload}
        }
        case STUDENT_REQUEST_FAILURE:{
            return {...state,isLoading:false,isError:true,students:[]}
        }
        default:{
            return state
        }
    }
   return state
}