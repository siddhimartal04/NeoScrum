import { LOGIN_ACTION, REGISTER_ACTION, LOGOUT_ACTION } from './types'

const initialUserState = {
    isLogin: false,
    fname: null,
    lname: null,
    email: null,
    password: null,
    confirmpassword: null,
    gender: null,
    phoneno:null,
}

export const AuthReducer = (state = initialUserState , action) => {
    switch(action.type) {

        case LOGIN_ACTION : 
            return {
                ...state,
                isLogin: true,
                email: action.payload.email,
                password: action.payload.password,
            }

        case REGISTER_ACTION :
            
            return {
                ...state,
                isLogin: true,
                fname: action.payload.fname,
                lname: action.payload.lname,
                email: action.payload.email,
                password: action.payload.password,
                confirmpassword: action.payload.confirmpassword,
                gender: action.payload.gender,
                phoneno: action.payload.phoneno
            }

        case LOGOUT_ACTION : 
            return {
                ...state,
                isLogin: false,
                fname: null,
                lname: null,
                email: null,
                password: null,
                confirmpassword: null,
                gender: null,
                phoneno:null,
            }

        default : return state
    }
}