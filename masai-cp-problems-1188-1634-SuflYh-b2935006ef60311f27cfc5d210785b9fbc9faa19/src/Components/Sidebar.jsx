import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
export const Sidebar = () => {
  const [searchParams,setSearchParams]=useSearchParams()
  const initialdata=searchParams.getAll("batch")
  const inititalpage=searchParams.get("page")
  const [page,setPage]=useState(1)
  const [category,setCategory]=useState(initialdata|| [])
  const handlechange=(e)=>{
let value=e.target.value
let newcategory=[...category]
if(newcategory.includes(value)){
  newcategory=newcategory.filter((el)=>el!==value)
}else{newcategory.push(value)}
setCategory(newcategory)
  }
  useEffect(()=>{
    console.log(page)
let params={
 
 page:page,
 limit:10,

  batch:category
  
}
setSearchParams(params)
  },[category,page])
  return (
    <DIV>
      <h3>Filter by Batch</h3>
      <div>
        <input  onChange={handlechange} value={"WEB101"} data-testid="batch-web101"  checked={category.includes("WEB101")} type="checkbox" />
        <label>WEB-101</label>
        <br />
        <br />
        <input  onChange={handlechange} value={"JS201"}data-testid="batch-js201" checked={category.includes("JS201")} type="checkbox" />
        <label>JS-201</label>
        <br />
        <br />
        <input  onChange={handlechange} value={"RCT101"}data-testid="batch-rct101" checked={category.includes("RCT101")} type="checkbox" />
        <label>RCT101</label>
        <br />
        <br />
        <input  onChange={handlechange} value={"RCT211"} data-testid="batch-rct211" checked={category.includes("RCT211")} type="checkbox" />
        <label>RCT211</label>
        <br />
        <br />
        <input onChange={handlechange} value={"NXM101"} checked={category.includes("NXM101")} data-testid="batch-nxm101" type="checkbox" />
        <label>NXM-101</label>
        <br />
      </div>
      <br />
      <br />
      <br />
      <h3>Paginate</h3>
      <PAGE>
        <button data-testid="page-prev">Previous</button>
        <button data-testid="page-next">Next</button>
      </PAGE>
    </DIV>
  );
};

const PAGE = styled.div`
  button {
    margin: 20px;
    border: none;
    width: 100px;
    height: 35px;
    margin-bottom: 10px;
  }
`;

const DIV = styled.div`
  width: 15%;
  border-right: 1px solid gray;
  text-align: left;
  margin-left: 20px;

  label {
    margin-left: 5px;
  }

  input,
  label {
    font-size: larger;
  }
`;
