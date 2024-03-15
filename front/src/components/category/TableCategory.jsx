import "../../styles/styleCategories/TableCategory.css";
import CategoryItem from "./CategoryItem";
const TableCategory = () => {
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
          <CategoryItem/>
          </tbody> 
        </table>
      </div>
    </>
  );
};

export default TableCategory;
