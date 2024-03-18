/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"

const CardOrder = ({setOrder}) => {
    const [orders, setOrders] = useState([])

    async function getOrders(){
      const {code} = JSON.parse(localStorage.getItem("user"))
        const res = await fetch(`http://localhost/routes/orders.php?code=${code}`)
        const data = await res.json()
        // console.log(data)
        setOrders(data)
    }
    useEffect(() =>{
        getOrders()
    }, [])
  return (
    <>
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
    </>
    
  )
}

export default CardOrder