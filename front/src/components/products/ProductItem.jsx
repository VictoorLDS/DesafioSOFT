import { useEffect, useState } from "react"
import ButtonDefault from "../buttons/ButtonDefault";
const url = "http://localhost/routes/products.php";

const ProductItem = () => {
    const [products, setProducts] = useState([])


    async function getProducts() {
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data);
    }

    useEffect(() =>{
        getProducts()
    }, [])

    async function deleteProduct(code){
        await fetch(`http://localhost/routes/products.php?code=${code}`,{
            method: "DELETE",
            
        })
        getProducts()
      }
  return (
    <>
    {products.map((product) => (
       <tr key={product.code}>
            <td>{product.code}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.amount}</td>
            <td>{product.category_name}</td>
            <td><ButtonDefault codeItem={product.code} isDelete={true}  classStyle={"deletebutton"} buttonFunction={deleteProduct} Text={"Delete"}/></td>
       </tr>
            ))}
    </>
  )
}

export default ProductItem