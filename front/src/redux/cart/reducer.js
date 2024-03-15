import CartActionTypes from "./action-types"
const initialState = {
    cartProducts: [],
}

const cartReducer = (state = initialState, action) => {
    if(action.type == CartActionTypes.ADD_PRODUCT){
        var productAlreadyInCart = state.cartProducts.find((item) => {
            if(item.product == action.payload.product){
                return item
            }
        })
    }
    switch (action.type) {
        case CartActionTypes.ADD_PRODUCT:
        if(productAlreadyInCart){
            return{
                ...initialState,
                cartProducts: state.cartProducts.map((item)=>{
                    if(item.product == productAlreadyInCart.product){
                        let amount = parseInt(item.amount) + parseInt(action.payload.amount)
                        return {...item, amount}
                    }
                })
            }
            
        }    

        return{
            ... initialState,
            cartProducts: [... state.cartProducts, action.payload],
        }
        case CartActionTypes.REMOVE_PRODUCT:
            if(state.cartProducts.length == 0){
                 return{
                    ...initialState,
                    cartProduct: [state.cartProducts = []]
                }
            } 
            return{
                ...state,
                cartProducts: [...state.cartProducts.filter((cartProduct, index) => index != action.payload )
                ],

            }
        case CartActionTypes.CANCEL_CART:
            return{
                ...initialState,    
            }
        default:
            return state;
        }
    }

export default cartReducer