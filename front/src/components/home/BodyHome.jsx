import "../../styles/styleHome/BodyHome.css"
import FormHome from "./FormHome"
import {TableHome} from "./TableHome"

const BodyHome = () => {
  return (
    <>
    <main className="container">
    <FormHome/>
    <TableHome/>
    </main>
    </>
  )
}

export default BodyHome