import { useLocation,useParams } from "react-router-dom";

function Product(){

  const {id}=useParams();
  
  return (
    <div>
      <h1>Product</h1>
      <p>Product id is : {id}</p>
    </div>
  )
}
export default Product;