import axios from "axios";
import { useEffect, useState } from "react";
import "../css/Products.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Product() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(" http://localhost:4000/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <>
      <table className="table mt-4 pt-4 btt">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Price</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.pdtName}</td>
                  <td>{item.pdtPrice}</td>
                  <td>{item.pdtDescription}</td>
                  <td>
                    <button>
                      <i class="bi bi-trash-fill"></i>
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <div> No Data Found</div>
          )}
          <tr></tr>
        </tbody>
      </table>
      <div className="addData">
        <form>
          <input type="text"></input>
          <button type="submit">Add Name</button>
        </form>
      </div>
    </>
  );
}
export default Product;
