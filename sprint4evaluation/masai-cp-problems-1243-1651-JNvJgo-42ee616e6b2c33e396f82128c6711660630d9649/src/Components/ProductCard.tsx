import React from "react";
import { getProducts, updateLike } from "../api";
import { useState,useEffect } from "react";
import { deleteProduct } from "../api";
interface mydata{
  id?:number,
  name: string,
  brand:string,
  price: number,
  image:string,
  like:number,
  dislike:number,
 handledelete:(id:number)=>void
}

export const ProductCard = ({id,image,name,price,brand,like,dislike,handledelete}:mydata) => {
// const [inclike,setIncLike]=useState<number>(0)
// const [id,setId]=useState<number>(0)
//   const handleclick=(id:number)=>{

// onClick={()=>handleclick(id)}
// updateLike(id,inclike)
//   }
//   useEffect(()=>{
// updateLike(id,inclike)
//   },[inclike])

  return (
    <div className={`product-card`}>
      {/* Add all elements of product card here */}

      <img className="product-image" src={image}/>
      <div className="product-name">{name}</div>
      <div className="product-price">{price}</div>
      <div className="product-brand">{brand}</div>
      <button  data-testid="like-button">Like</button>
      <div className="product-like">{like}</div>
      <button data-testid="dislike-button">Dislike</button>
      <button onClick={()=>(handledelete(id))} data-testid="delete-button">Delete</button>
      {/* Delete button with `data-testid=delete-button` */}
     
      <div className="product-dislike">{dislike}</div>
    </div>
  );
};
