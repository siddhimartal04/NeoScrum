
import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART
} from './CartActionType'

const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item
    }
}

const removeFromCart = (item) => {
    return {
        type: REMOVE_FROM_CART,
        payload: item
    }
}

const clearCart = () => {
    return {
        type: CLEAR_CART
    }
}

export const handleAddToCart = (item) => {
    return (dispatch) => {
        
        dispatch(addToCart(item))
    }
}

export const handleRemoveFromCart = (item) => {
    return (dispatch) => {
        dispatch(removeFromCart(item))
    }
}

export const handleClearCart = () => {
    return (dispatch) => {
        dispatch(clearCart())
    }
}