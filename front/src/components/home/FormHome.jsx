import { useEffect, useState, Fragment } from "react"
import "../../styles/styleHome/FormHome.css"
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/cart/actions"
import ButtonDefault from "../buttons/ButtonDefault";
const urlproducts = "http://localhost/routes/products.php";


const FormHome = () => {
  const dispatch = useDispatch()
  function handleAddToCart(e){
    e.preventDefault()
    dispatch(addProductToCart({product, amount, price, tax}))
  }
  
  const [product, setProduct] = useState(0)
  const [products, setProducts] = useState([])
  const [amount, setAmount] = useState("")
  const [price, setPrice] = useState("")
  const [tax, setTax] = useState("")
  const [productSelected, setProductSelected] = useState({})


  
  async function getProducts(){
    const res = await fetch(urlproducts)
    const data = await res.json()
    setProducts(data)
  }
  useEffect(()=>{
    getProducts()
},[])

useEffect(() =>{
  changeFormValues()
  console.log(product)
},[product])

async function changeFormValues() {
  const res = await fetch(urlproducts).then(res => res.json());
  const products = res
  const prodSel = products.find((p) => p.code == product);
  if (prodSel) {
    setProductSelected(prodSel)
    setPrice(prodSel.price)
    setTax((prodSel.tax))
  }
}



  return (
    <>
        <div className="formHome">
        <h1>Home</h1>
        <form id="home-form">
            <div className="inputsprod">
              <select name="product" defaultValue={0} onChange={(e) => setProduct(e.target.value)} id="prod-select">
                {products.map((i) => (
                    <Fragment key={i.code}>
                    <option value={0} hidden>Select</option>
                    <option value={i.code} key={i.code}>{i.name}</option>
                    </Fragment>
                ))}
                </select>
                <input className="input" required min={1} max={productSelected?.amount}  type="number" name="amount" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)}  placeholder="Amount"/>
                <input disabled required className="input" type="number" name="price" id="price" value={price}  placeholder="Price"/>
                <input disabled required className="input" type="number" name="tax" id="tax" value={tax} placeholder="Tax"/>
             </div>
             <ButtonDefault classStyle={"addbutton"} isDelete={false} buttonFunction={handleAddToCart} Text={"Add to Cart"}/>
        </form>
    </div>
    </>
  )
}

export default FormHome