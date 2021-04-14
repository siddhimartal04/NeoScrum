
import { LOGIN_ACTION, REGISTER_ACTION, LOGOUT_ACTION ,ADD_ADDRESS,
    REMOVE_ADDRESS,
    SAVE_ADDRESS,
    SET_USER_PROFILE} from './types'

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
const AddAddress = (addressDetails) => {
    return {
        type: ADD_ADDRESS,
        payload: addressDetails
    }
}

const RemoveAddress = (addressDetails) => {
    return {
        type: REMOVE_ADDRESS,
        payload: addressDetails
    }
}

const SaveAddress = (addressDetails) => {
    return {
        type: SAVE_ADDRESS,
        payload: addressDetails
    }
}

const SetUserProfile = (photo) => {
    return {
        type: SET_USER_PROFILE,
        payload: photo
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
export const handleAddAddress = (data) => {
    return (dispatch) => {
        const addressDetails = {
            address: data.address,
            landmark: data.landmark,
            city: data.city,
            pinCode: data.pinCode,
            state: data.state,
            country: data.country
        }
        dispatch(AddAddress(addressDetails))
        console.log(addressDetails);
    }
}

export const handleRemoveAddress = (addressDetails) => {
    return (dispatch) => {
        dispatch(RemoveAddress(addressDetails))
    }
}

export const handleSaveAddress = (addressDetails) => {
    return (dispatch) => {
        dispatch(SaveAddress(addressDetails))
    }
}

export const handleSetUserProfile = (photo) => {
    return (dispatch) => {
        dispatch(SetUserProfile(photo))
    }
}