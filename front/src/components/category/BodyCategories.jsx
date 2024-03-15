import "../../styles/styleCategories/BodyCategories.css"
import FormCategory from "./FormCategory"
import TableCategory from "./TableCategory"

const BodyCategories = () => {
  return (
    <>
    <main className="container">
    <FormCategory/>
    <TableCategory/>
    </main>
    </>
  )
}

export default BodyCategories