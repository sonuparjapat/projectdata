import React, { useEffect } from "react";
import { useState } from "react";
import {getProducts} from "../api"
import { Navbar } from "./Navbar";
import { ProductCard } from "./ProductCard";
// const data=`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`
interface mydata{
  id?:number,
  name: string,
  brand:string,
  price: number,
  image:string,
  like:number,
  dislike:number
}
const ProductList = () => {
  const [products, setProducts] = useState<mydata[]>([]);
  const [value,setValue]=useState(false)
  const handledelete=()=>{
    setValue(!value)
  }
  useEffect(()=>{
    getProducts().then((res)=>setProducts(res))
  },[])
  console.log(products)
  return (
    <>
    <Navbar homepage="Home Page"/>
    <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)"}} className={`product-list`}>
      {/* Add all product cards here in grid format  */}
     
      {products.map((item:mydata)=>
      <ProductCard  handledelete={handledelete} key={item.id} {...item}/>
     
   
      )}
    </div></>
  );
};

export default ProductList;
