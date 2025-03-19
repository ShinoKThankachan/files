import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect } from "react";

function Home(){
  const navigate = useNavigate();
  const prodNavigate=useNavigate()
  const getProduct=(id)=>{
    prodNavigate(`/products/${id}`)
  }
  return (
    <div>
      <Navbar/>
      <h1>Home</h1>
      <button onClick={()=>getProduct(103)}>Products</button>
    </div>
  )
}

export default Home;
