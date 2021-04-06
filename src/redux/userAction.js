
import { LOGIN_ACTION, REGISTER_ACTION, LOGOUT_ACTION ,RETRIEVE_TOKEN} from './types'

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

const UserLogout = () => {
    return {
        type : LOGOUT_ACTION
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
            fname: data.fname,
            lname: data.lname,
            email: data.email,
            password: data.password,
            confirmpassword: data.confirmpassword,
            phoneno: data.phoneno,
            gender: data.gender
        }
        dispatch(UserRegistration(registrationDetails))
    }
}

export const handleLogout = () => {
    return (dispatch) => {
        dispatch(UserLogout())
    }
}