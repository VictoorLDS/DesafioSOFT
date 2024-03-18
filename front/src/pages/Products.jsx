import NavBar from "../components/NavBar"
import BodyProducts from "../components/products/BodyProducts"
import RequireAuth from "../components/requireAuth"

const Products = () => {

return(
    <>
    <RequireAuth/>
    <NavBar/>
    <BodyProducts/>
    </>
)

}
export default Products