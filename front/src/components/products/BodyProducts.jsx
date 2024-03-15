import "../../styles/styleProducts/BodyProducts.css"
import FormProducts from "./FormProducts"
import TableProducts from "./TableProducts"

const BodyProducts = () => {
  return (
    <>
    <main className="container">
    <FormProducts/>
    <TableProducts/>
    </main>
    </>
  )
}

export default BodyProducts