import NavBar from "../components/NavBar"
import BodyCategories from "../components/category/BodyCategories"
import RequireAuth from "../components/requireAuth"

const Categories = () => {

return(
    <>
    <RequireAuth/>
    <NavBar/>
    <BodyCategories/>
    </>
)

}
export default Categories