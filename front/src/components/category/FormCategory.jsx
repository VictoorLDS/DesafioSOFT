import "../styles/FormCategory.css";
import {useState} from 'react';

const url = "http://localhost/routes/categories.php";
const FormCategory = () => {
    const [name, setName] = useState("");
    const [tax, setTax] = useState("");

    async function handlePostCategory(e){
        e.preventDefault();
        const categoryData = new FormData()
        categoryData.append("name", name)
        categoryData.append("tax", tax)

        await fetch(url,{
            method: "POST",
            body: categoryData,
        })
        window.location.reload()
    }

    return (
    <>
    <div className="formCat">
        <h1>Categories</h1>
        <form onSubmit={handlePostCategory} id="category-form">
            <div className="inputscat">
                <input className="inputc" type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}  placeholder="Category Name"/>
                <input required min={1} className="inputc" type="number" name="tax" id="tax" value={tax} onChange={(e) => setTax(e.target.value)} placeholder="Tax"/>
            </div>
            <button type="submit" className="addbutton" id="add-cat-but" name="add-cat-but" >Add Category</button>
        </form>
    </div>
    </>
  )
}

export default FormCategory