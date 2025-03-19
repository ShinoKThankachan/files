import { useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";

function Home(){
  const prodNavigate=useNavigate()
  const getProduct=(id)=>{
    prodNavigate(`/products/${id}`)
  }
  const [Products,setProducts]=useState([])
  useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res=>res.json())
    .then(json=>{
      console.log(json)
      setProducts(json.products)

      })
  },[])
  return (
    <>
     
      <h1>Home</h1>
      {Products.map((product,index)=>(
        <ul key={product.id}>
          <li>{index+1}.{product.name}{product.images.thumbnail}<button onClick={()=>getProduct(product.id)}>View Product</button></li>
        </ul>
      ))}
    </>
  )
}

export default Home;
