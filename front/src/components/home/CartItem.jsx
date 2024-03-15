import { removeProductFromCart } from '../../redux/cart/actions'
import { useSelector, useDispatch } from 'react-redux'
import ButtonDefault from '../buttons/ButtonDefault'

const CartItem = () => {
const dispatch = useDispatch()

const {cartProducts} = useSelector((rootReducer) => rootReducer.cartReducer)

const handleDeleteCartItem = (index) => {
    dispatch(removeProductFromCart(index))
  }

  return (
    <>
    {cartProducts.map((i, index) => (
        <tr key={index}>
            <td>{i.product}</td>
            <td>{i.amount}</td>
            <td>{i.price}</td>
            <td>{i.tax/100}</td>
            <td>
            <ButtonDefault codeItem={index} classStyle={"deletebutton"} isDelete={true} buttonFunction={handleDeleteCartItem} Text={"Delete"}/>
            </td>
        </tr>
            ))}
    </>
  )
}

export default CartItem