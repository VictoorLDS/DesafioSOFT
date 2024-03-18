import { useState } from "react"
import NavBar from "../components/NavBar"
import BodyHistory from "../components/history/BodyHistory"
import HistoryModal from "../components/history/HistoryModal"
import RequireAuth from "../components/requireAuth"

const History = () => {
  const [order, setOrder] = useState({})
  return (
    <>
    <RequireAuth/>
    <NavBar/>
    <BodyHistory setOrder={setOrder}/>
    {order?.code && <HistoryModal setOrder={setOrder} order={order}/>}
    </>
  )
}

export default History