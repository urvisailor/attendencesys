import Types from './types';
const initialState = {
  token: {},
  user:{},
  loading:false
};

export const authReducer=(state=initialState,action)=>{
    switch (action.type) {
        case Types.LOGIN:
            return {
                ...state,
                isloading:true
            };
        case Types.LOGIN_SUCCESS:{
            return{
                ...state,
                isloading:false,
                token:action.payload
            }
        };
        case Types.LOGIN_FAILED:{
            return {
                ...state,
                isloading:false
            }
        };
        case Types.USER_DETAILS:
            return {
                ...state,
                isloading:true
            };
        case Types.USER_DETAILS_SUCCESS:{
            return{
                ...state,
                isloading:false,
                user:action.payload
            }
        };
        case Types.USER_DETAILS_FAILED:{
            return {
                ...state,
                isloading:false
            }
        }
    }
    return state
}