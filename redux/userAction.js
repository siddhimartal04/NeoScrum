
import { LOGIN_ACTION, REGISTER_ACTION } from './types'

const UserLogin = (loginDetails) => {
    return {
        type : LOGIN_ACTION,
        payload : loginDetails
    }
}

const UserRegistration = (registrationDetails) => {
    return {
        type : REGISTER_ACTION,
        payload : registrationDetails
    }
}


export const  handleUserLogin = (data) => {
   

    return (dispatch) => {
        const loginDetails = {
            email: data.email,
            password: data.password,
        
        }
        dispatch(UserLogin(loginDetails))
    }
}

export const  handleUserRegistration = (data) => {
    return (dispatch) => {
        const registrationDetails = {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: data.password,
            confirmPassword: data.confirmPassword,
            phoneNumber: data.phoneNo,
            gender: data.gender
        }
        dispatch(UserRegistration(registrationDetails))
    }
}