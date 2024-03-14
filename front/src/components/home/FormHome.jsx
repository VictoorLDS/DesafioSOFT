import { useEffect, useState, Fragment } from "react"
import '../styles/FormHome.css'
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/cart/actions"
const urlproducts = "http://localhost/routes/products.php";


const FormHome = () => {
  const dispatch = useDispatch()
  const handleAddToCart = (e) => {
    e.preventDefault()
    console.log({product, amount, price, tax})

    dispatch(addProductToCart({product, amount, price, tax}))
  }
  
  const [product, setProduct] = useState("")
  const [products, setProducts] = useState([])
  const [amount, setAmount] = useState("")
  const [price, setPrice] = useState("")
  const [tax, setTax] = useState("")
  const [productSelected, setProductSelect] = useState({})

  
  async function getProducts(){
    const res = await fetch(urlproducts)
    const data = await res.json()
    setProducts(data)
    console.log(data)
  }
  useEffect(()=>{
    getProducts()
},[])
async function changeFormValues() {
  const res = await fetch(urlproducts);
  const data = await res.json();
  const products = data
   setProductSelect(products.find((p) => p.code == product));
  if (productSelected) {
    setPrice(productSelected.price)
    setTax((productSelected.tax))
  }
}
changeFormValues()




  return (
    <>
            <div className="formHome">
        <h1>Home</h1>
        <form id="home-form" onSubmit={handleAddToCart}>
            <div className="inputsprod">
              <select name="product" value={product} onChange={(e) => setProduct(e.target.value)} id="prod-select">
                {products.map((product) => (
                    <Fragment key={product.code}>
                    <option hidden>Select</option>
                    <option value={product.code} key={product.code}>{product.name}</option>
                    </Fragment>
                ))}
                </select>
                <input className="input" required min={1} max={productSelected?.amount} type="number" name="amount" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)}  placeholder="Amount"/>
                <input disabled required className="input" type="number" name="price" id="price" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price"/>
                <input disabled required className="input" type="number" name="tax" id="tax" value={tax} onChange={(e) => setTax(e.target.value)} placeholder="Tax"/>
             </div>

            <button type="submit" className="addbutton" id="add-prod-but" name="add-prod-but" >Add Product</button>
        </form>
    </div>
    </>
  )
}

export default FormHome