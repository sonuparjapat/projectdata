import React from "react";

// accept the page name as prop here
interface data{
  addproducts?:string,
  homepage?:string
}
export const Navbar = ({addproducts,homepage}:data) => {
  return (
    <div>
      <h2>Product List</h2>
      <a className="home-link" href="/">
        Home
      </a>
      <a className="add-product-link" href="/add-product">
        Add Product
      </a>
      <h3 data-testid="page-name">{addproducts?addproducts:homepage}</h3>
    </div>
  );
};
