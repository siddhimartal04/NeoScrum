
import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART,
    UPDATE_PRODUCT_QUANTITY
    
} from './CartActionType'

const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: {
            product: item,
            quantity : 1
    }
}
}

const removeFromCart = (item) => {
    return {
        type: REMOVE_FROM_CART,
        payload: item
    }
}
const updateProductQuantity = (item,quantity) => {
    return {
        type : UPDATE_PRODUCT_QUANTITY,
        payload : {
            product: item,
            quantity: quantity
        }
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
export const handleUpdateProductQuantity = (item,quantity) => {
    return (dispatch) => {
        dispatch(updateProductQuantity(item,quantity))
    }
}
export const handleClearCart = () => {
    return (dispatch) => {
        dispatch(clearCart())
    }
}