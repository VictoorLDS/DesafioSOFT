/* eslint-disable react/prop-types */
import "../../styles/styleHistory/BodyHistory.css"
import CardOrder from "./CardOrder"

const BodyHistory = ({setOrder}) => {
  return (
    <>
    <div className="orders">
        <CardOrder setOrder={setOrder}/>
    </div>
    </>
  )
}

export default BodyHistory