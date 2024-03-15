import "../../styles/styleProducts/TableProduct.css"
import ProductItem from './ProductItem'

const TableProducts = () => {
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
        <ProductItem/>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default TableProducts