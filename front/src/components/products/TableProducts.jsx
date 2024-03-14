import '../styles/TableProduct.css'
import { useEffect, useState } from "react"
const url = "http://localhost/routes/products.php";

const TableProducts = () => {

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
          <div className="table">
        <table>
          <thead className="table-header">
            <tr>
              <td>
                <b>Code</b>
              </td>
              <td>
                <b>Product</b>
              </td>
              <td>
                <b>Price</b>
              </td>
              <td>
                <b>Amount</b>
              </td>
              <td>
                <b>Category</b>
              </td>
            </tr>
          </thead>
          <tbody className="table-body" id="categories-list">
            {products.map((product) => (
              <tr key={product.code}>
                <td>{product.code}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.amount}</td>
                <td>{product.category_name}</td>
                <td><button className="deletebutton" onClick={() => deleteProduct(product.code)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default TableProducts