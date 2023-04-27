import React from "react";
import { Navbar } from "../Components/Navbar";
import { useState } from "react";

import { addProduct } from "../api";
interface initialdata{
  
    name:string,
    brand:string,
    price:number,
    image:string,
    like:number,
    dislike:number,
  
}
const maininitialdata={
  name: "",
  brand: "",
  price: 0,
  image: "",
  like: 0,
  dislike: 0,
}
export const AddProduct = () => {
  const [data,setData]=useState<initialdata>(maininitialdata)
  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const name=e.target.name
    const value=e.target.value
setData({...data,[name]:value})


  }
  const handlesubmit=(e:React.FormEvent<HTMLFormElement> )=>{
    e.preventDefault()
addProduct(data)
  }
  console.log(data)
  return (
    <div>
      <Navbar addproducts={"Add Product Page"} />
      <form onSubmit={handlesubmit}>
       <input  placeholder="name"  onChange={handleChange}  name="name" className="product-name" /> 
       <input placeholder="image"  onChange={handleChange} name="image" className="product-image" /> 
       <input placeholder="brand"  onChange={handleChange}name="brand" className="product-brand" /> 
       <input placeholder="price"  onChange={handleChange} name="price" className="product-price" /> 
       <button  className="submit-form" >Submit</button>
        
      </form>
    </div>
  );
};
