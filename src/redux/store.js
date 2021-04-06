import { applyMiddleware, createStore } from 'redux'

import rootReducer from './rootReducer'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import AsyncStorage from '@react-native-async-storage/async-storage'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['AuthUser']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
    let store = createStore(persistedReducer, {}, applyMiddleware(thunk));
    let persistor = persistStore(store)
    return { store, persistor }
}