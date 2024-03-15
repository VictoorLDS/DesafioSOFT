import { useEffect, useState, Fragment } from "react"
import "../../styles/styleProducts/FormProducts.css"
import ButtonDefault from "../buttons/ButtonDefault";
const url = "http://localhost/routes/products.php";
const urlcategory = "http://localhost/routes/categories.php"; 

const FormProducts =() => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [prodamount, setAmount] = useState("")
    const [category, setCategory] = useState("")
    const [categories, setCategories] = useState([])

    async function getCategories(){
        const res = await fetch(urlcategory)
        const data = await res.json();
        setCategories(data);
    }
    useEffect(()=>{
        getCategories()
    },[])

    async function handlePostProduct(){
        const productData = new FormData()
        productData.append("name", name)
        productData.append("price", price)
        productData.append("amount", prodamount)
        productData.append("category", category)


        await fetch(url,{
            method: "POST",
            body: productData,
        })
    }

  return (
    <>
        <div className="formProd">
        <h1>Products</h1>
        <form id="product-form">
            <div className="inputsprod">
                <input className="input" type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}  placeholder="Product Name"/>
                <input required min={1} className="input" type="number" name="price" id="price" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price"/>
                <input required min={1} className="input" type="number" name="price" id="amount" value={prodamount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount"/>
                <select name="category" value={category} onChange={(e) => setCategory(e.target.value)} id="cat-select">
                {categories.map((category) => (
                    <Fragment key={category.code}>
                    <option hidden>Select</option>
                    <option value={category.code} key={category.code}>{category.name}</option>
                    </Fragment>
                ))}
                </select>
             </div>

             <ButtonDefault classStyle={"addbutton"} buttonFunction={handlePostProduct} Text={"Add Product"}/>
        </form>
    </div>
    </>
  )
}

export default FormProducts