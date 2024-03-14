import "../styles/TableCategory.css";
import { useState, useEffect } from "react";
const TableCategory = () => {
  const url = "http://localhost/routes/categories.php";
  const [categories, setCategories] = useState([]);

  async function getCategories() {
    const res = await fetch(url);
    const data = await res.json();
    setCategories(data);
    
  }
  useEffect(() => {
    getCategories();
  }, []);

  async function deleteCategory(code){
    await fetch(`http://localhost/routes/categories.php?code=${code}`,{
        method: "DELETE",
    })
    getCategories()
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
                <b>Category</b>
              </td>
              <td>
                <b>Tax</b>
              </td>
            </tr>
          </thead>
          <tbody className="table-body" id="categories-list">
            {categories.map((category) => (
              <tr key={category.code}>
                <td>{category.code}</td>
                <td>{category.name}</td>
                <td>{category.tax}%</td>
                <td><button className="deletebutton" onClick={() => deleteCategory(category.code)}>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableCategory;
