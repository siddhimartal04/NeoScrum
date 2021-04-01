import { combineReducers } from 'redux'

import { AuthReducer } from './userReducer'

const rootReducer = combineReducers({
    AuthUser: AuthReducer
})

export default rootReducer