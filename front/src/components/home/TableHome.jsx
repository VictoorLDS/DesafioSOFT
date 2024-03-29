import { cancelCart } from '../../redux/cart/actions'
import { useState, useEffect } from 'react';
import "../../styles/styleHome/TableHome.css"
import CartItem from './CartItem';
const urlorderitem = "http://localhost/routes/order_item.php";
const urlorder = "http://localhost/routes/orders.php";
const urlproducts = "http://localhost/routes/products.php";
import { useDispatch, useSelector } from 'react-redux';

const TableHome = () => {

  const dispatch = useDispatch()

   const {cartProducts} = useSelector(rootReducer => rootReducer.cartReducer)
   const [product, setProducts] = useState([])
   const [totalTax, setTotalTax] = useState(0)
   const [totalValue, setTotal] = useState(0)


   async function getProducts(){
    const res = await fetch(urlproducts)
    const data = await res.json()
    setProducts(data)
   }
  useEffect(() => {
    getProducts()
  },[])

  function objDataToFormData(obj) {

    const formData = new FormData();
  
    Object.entries(obj).forEach(([key, value]) => {
      formData.append(key, value);
    });
    return formData;
  }


  async function postOrder(orderData){
    await fetch(urlorder,{
      method: "POST",
      body: orderData,
    })
  }

  async function postOrderItem(orderItemData){
    await fetch(urlorderitem,{
      method: "POST",
      body: orderItemData,
    })
  }

  async function handleCreateHistory() {
    const usercode = JSON.parse(localStorage.getItem("user"))
    console.log(usercode)
    const order = {
      code: Math.random().toString(16).slice(2),
      total: totalValue,
      tax: totalTax,
      users_code: usercode.code
    };
    console.log(order)
    const orderData = objDataToFormData(order);
    await postOrder(orderData)

    cartProducts.forEach(async(i) => {

      const orderItem = {
        order_code: order.code,
        product_code: i.product,
        amount: i.amount,
        price: i.price,
        tax: (i.tax)/100,
      }
      const selectedProd = product.find((i) => {
        return i.code == orderItem.product_code

      })
      console.log(orderItem, selectedProd)
      if(orderItem.amount > selectedProd.amount){
        return alert("Unavailable Amount")
      }
      else{
        const orderItemData = objDataToFormData(orderItem)
        await postOrderItem(orderItemData)
      }
      handleCancelCart()
    })
  }


  const handleCancelCart = () => {
    dispatch(cancelCart())
  }
 

 function uptadeTotal(){
   setTotal(0)
   setTotalTax(0)
   if(cartProducts.length){
     let totallocal = 0
     let taxlocal = 0

     cartProducts.forEach((i) => {
       totallocal += ( i.amount * i.price)
       taxlocal +=( i.amount * (i.tax/100))
      })
      setTotal(totallocal)
      setTotalTax(taxlocal)
    }
  }

 useEffect(() => {
  uptadeTotal()
 }, [cartProducts])


  return (
    <>
      <div className="table">
        <table>
          <thead className="table-header">
            <tr>
              <td>
                <b>Product Code</b>
              </td>
              <td>
                <b>Amount</b>
              </td>
              <td>
                <b>Price</b>
              </td>
              <td>
                <b>Tax</b>
              </td>
            </tr>
          </thead>
          <tbody className="table-body" id="cart-list">
          <CartItem/>
          </tbody>
        </table>
        <div className="totals">
          <h2>
            Total Price: <span id="total-price" className="totalsvalue">{totalValue}</span>
          </h2>
          <h2>
            Total Tax: <span id="total-tax" className="totalsvalue">{totalTax}</span>{" "}
          </h2>
          <button className="buttoncancel" onClick={handleCancelCart}>Cancel</button>
          <button className="buttonfinish" onClick={handleCreateHistory}>Finish</button>
        </div>
      </div>
    </>
  );
}

export {TableHome}