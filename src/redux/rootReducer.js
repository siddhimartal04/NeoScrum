import { combineReducers } from 'redux'

import { AuthReducer } from './userReducer'
import { CartReducer } from './CartRedux/CartReducer'
const rootReducer = combineReducers({
    AuthUser: AuthReducer,
    UserCart: CartReducer
})

export default rootReducer