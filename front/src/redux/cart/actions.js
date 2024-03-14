import CartActionTypes from "./action-types"

export const addProductToCart = (payload) => ({
    type: CartActionTypes.ADD_PRODUCT,
    payload,
});

export const removeProductFromCart = (payload) => ({
    type:CartActionTypes.REMOVE_PRODUCT,
    payload,
})
export const cancelCart = () => ({
    type:CartActionTypes.CANCEL_CART,
})