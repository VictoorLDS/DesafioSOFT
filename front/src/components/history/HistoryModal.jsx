/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import "../../styles/styleHistory/HistoryModal.css"
const urlorderitem = "http://localhost/routes/order_item.php";

const HistoryModal = ({order, setOrder}) => {
    const [orderitens, setorderitens] = useState([])

    async function getOrderItem(){
        const res = await fetch(urlorderitem)
        let data = await res.json()
        data = data.filter((i) => {
            // eslint-disable-next-line react/prop-types
            if(i.order_code == order.code){ 
                return i
            }
        })
        setorderitens(data)
        console.log(data)
    }
    useEffect(() => {
        getOrderItem()
    },[])

    function closeModal(event){
        console.log(event.target)
        if(event.target.id == 'closeModal'){
            return(
                setOrder({})
            )
        }

    }

  return (

    <>
    <div className="modal">
        <div className="container-modal">
            <div className='exitbutton' id='closeModal' onClick={(event) => {closeModal(event)}}>x</div>
            <div className='orderitens'>
            <span><h2>Order Itens</h2></span>
            {orderitens.map((orderitem) => (
            <div className='eachorderitem' key={orderitem.code}>
             <h1>{orderitem.code}</h1>
            <span>Order Code: {orderitem.order_code}</span>
            <span>Product Code: {orderitem.product_code}</span>
            <span>Amount: {orderitem.amount}</span>
            <span>Price: {orderitem.price}</span>
            <span>Tax: {orderitem.tax}</span>
            </div>
            ))}
            </div>
        </div>
    </div>
    </>
  )
}

export default HistoryModal