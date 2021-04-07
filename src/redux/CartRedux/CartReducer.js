import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART,
    UPDATE_PRODUCT_QUANTITY
} from './CartActionType'

const initialCartState = {
    cartItems : []
}

export const CartReducer = (state = initialCartState, action) => {
    switch (action.type) {

        case ADD_TO_CART : 
            return {
                ...state,
                cartItems: [...state.cartItems , action.payload]
            }

            case REMOVE_FROM_CART :
                return {
                    ...state,
                    cartItems: state.cartItems.filter(item => item.product !== action.payload)
                }
                case UPDATE_PRODUCT_QUANTITY : 

                return {
                    ...state,
                    cartItems: state.cartItems.map(item => item.product.id === action.payload.product.id ? {...item, quantity: action.payload.quantity} : item)
                }

        case CLEAR_CART : 
            return {
                ...state,
                cartItems: []
            }

        default : return state
    }
}

