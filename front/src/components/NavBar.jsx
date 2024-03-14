import './styles/NavBar.css'

const NavBar = () => {

return(
    <>
    <header className="header">
    <h1 className="titleheader">Suite Store</h1>
    <ul>
        <li><p><a href="/">Home</a></p></li>
        <li><p><a href="/products">Products</a></p></li>
        <li><p><a href="/categories">Categoria</a></p></li>
        <li><p><a href="/history">History</a></p></li>
    </ul>
</header>
    </>
)

}
export default NavBar