import { useState, useEffect } from "react"
import ButtonDefault from "../buttons/ButtonDefault"

const urlcategory = "http://localhost/routes/categories.php"

export default function CategoryItem(){

  const [categories, setCategories] = useState([])

  async function getCategories(){
      const res = await fetch(urlcategory)
      const data = await res.json()
      setCategories(data)
  }

  useEffect(() => {
    getCategories()
  }, [categories])

  async function deleteCategory(code){
    console.log("deleteCategory")
    await fetch(`http://localhost/routes/categories.php?code=${code}`,{
        method: "DELETE",
    })
  }

  return (
    <>
      {categories.map((i) => 
        <tr key={i.code}>
            <td>{i.code}</td>
            <td>{i.name}</td>
            <td>{i.tax}</td>
            <td><ButtonDefault codeItem={i.code} isDelete={true}  classStyle={"deletebutton"} buttonFunction={deleteCategory} Text={"Delete"}/></td>
        </tr>
      )}
    </>
  )
}


