import { LOGIN_ACTION, REGISTER_ACTION } from './types'

const initialUserState = {
    isLogin: false,
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    confirnPassword: null,
    gender: null,
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
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email,
                password: action.payload.password,
                confirnPassword: action.payload.ConfPass,
                gender: action.payload.gender
            }
        default : return state
    }
}