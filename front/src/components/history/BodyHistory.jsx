/* eslint-disable react/prop-types */
import "../styles/BodyHistory.css"
const urlorders = "http://localhost/routes/orders.php"
import { useState, useEffect } from "react"

const BodyHistory = ({setOrder}) => {
    const [orders, setOrders] = useState([])

    async function getOrders(){
        const res = await fetch(urlorders)
        const data = await res.json()
        // console.log(data)
        setOrders(data)
    }
    useEffect(() =>{
        getOrders()
    }, [])
  return (
    <>
    <div className="orders">
        {orders.map((order) => (
            <div className="cardOrder" key={order.code}>
            <h2>{order.code}</h2>
            <div className="divtotals">
            <span className="Totals"><p>Total Price: <span className="values"><b>{order.total}</b></span></p></span>
            <span className="Totals">Total Tax: <span className="values"><b>{order.tax}</b></span></span>
            </div>
            <button className="ViewDetailsBtn" onClick={() => {setOrder(order)}}>View Order Details</button>
            </div>
        ))}
    </div>
    </>
  )
}

export default BodyHistory