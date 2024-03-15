import "../../styles/styleCategories/FormCategory.css";
import {useState} from 'react';
import ButtonDefault from "../buttons/ButtonDefault";

const url = "http://localhost/routes/categories.php";
const FormCategory = () => {
    const [name, setName] = useState("");
    const [tax, setTax] = useState("");

    async function handlePostCategory(){
        const categoryData = new FormData()
        categoryData.append("name", name)
        categoryData.append("tax", tax)

        await fetch(url,{
            method: "POST",
            body: categoryData,
        })
    }

    return (
    <>
    <div className="formCat">
        <h1>Categories</h1>
        <form id="category-form">
            <div className="inputscat">
                <input className="inputc" type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}  placeholder="Category Name"/>
                <input required min={1} className="inputc" type="number" name="tax" id="tax" value={tax} onChange={(e) => setTax(e.target.value)} placeholder="Tax"/>
            </div>
            <ButtonDefault classStyle={"addbutton"} buttonFunction={handlePostCategory} Text={"Add Category"}/>
        </form>
    </div>
    </>
  )
}

export default FormCategory