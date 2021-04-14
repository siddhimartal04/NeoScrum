import { LOGIN_ACTION, REGISTER_ACTION, LOGOUT_ACTION ,ADD_ADDRESS,
    REMOVE_ADDRESS ,
    SAVE_ADDRESS,
    SET_USER_PROFILE} from './types'

const initialUserState = {
    isLogin: false,
    fname: null,
    lname: null,
    email: null,
    password: null,
    confirmpassword: null,
    gender: null,
    phoneno:null,
    userAddress : {
        address: null,
        landmark: null,
        city: null,
        pinCode: null,
        state: null,
        country: null,
    },
    addressList: [],
    userProfileImage: null
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
                userAddress : {
                    address: null,
                    landmark: null,
                    city: null,
                    pinCode: null,
                    state: null,
                    country: null,
                },
                addressList: [],
                userProfileImage: null
            }
            case ADD_ADDRESS :
            return {
                ...state,
                
                userAddress : {
                    address: action.payload.address,
                    landmark: action.payload.landmark,
                    city: action.payload.city,
                    pinCode: action.payload.pinCode,
                    state: action.payload.state,
                    country: action.payload.country,
                },

                addressList: [...state.addressList, {
                    address: action.payload.address,
                    landmark: action.payload.landmark,
                    city: action.payload.city,
                    pinCode: action.payload.pinCode,
                    state: action.payload.state,
                    country: action.payload.country,
                }]
            }

        case REMOVE_ADDRESS : {
            return {
                ...state,
                addressList: state.addressList.filter(address => address != action.payload),
                userAddress:    state.userAddress.address === action.payload.address && 
                                state.userAddress.pinCode === action.payload.pinCode &&
                                state.userAddress.city === action.payload.city &&
                                state.userAddress.state === action.payload.state &&
                                state.userAddress.country === action.payload.country &&
                                state.userAddress.landmark === action.payload.landmark ? {address:null,landmark:null,pinCode:null,city:null,state:null,country:null} : {...state.userAddress}
            }   
        }

        case SAVE_ADDRESS : {
            return {
                ...state,
                userAddress: {
                    address: action.payload.address,
                    landmark: action.payload.landmark,
                    city: action.payload.city,
                    pinCode: action.payload.pinCode,
                    state: action.payload.state,
                    country: action.payload.country,
                }
            }
        }

        case SET_USER_PROFILE : {
            return {
                ...state,
                userProfileImage: action.payload
            }
        }

        default : return state
    }
}