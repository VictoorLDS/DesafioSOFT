import "../styles/NavBar.css"
import ButtonDefault from "./buttons/ButtonDefault"
import { useNavigate } from "react-router-dom"

const NavBar = () => {
    const navigate = useNavigate()
    function handleLogOut(){
        localStorage.setItem("user", JSON.stringify({code: 0}))
        navigate("/")
    }

return(
    <>
    <header className="header">
    <div>
    <h1 className="titleheader">Suite Store</h1>
    <ul>
        <li><p><a href="/home">Home</a></p></li>
        <li><p><a href="/products">Products</a></p></li>
        <li><p><a href="/categories">Categoria</a></p></li>
        <li><p><a href="/history">History</a></p></li>
    </ul>
    </div>
    <ButtonDefault buttonFunction={handleLogOut} classStyle={"logoutbutton"} Text={"LogOut"}/>
</header>
    </>
)

}
export default NavBar