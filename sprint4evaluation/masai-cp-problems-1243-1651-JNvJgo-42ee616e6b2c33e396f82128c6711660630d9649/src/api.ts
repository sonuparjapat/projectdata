import axios, { AxiosResponse } from "axios"
interface data{
  name: string,
  brand:string,
  price: number,
  image:string,
  like:number,
  dislike:number
}
// const data=`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`
export const addProduct = async(data:data) => {
  // Add product functionality here
  const res:AxiosResponse<data>=await axios.post(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`,data)
};

export const getProducts = async() => {
  const res:AxiosResponse<data[]> =await axios.get(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products`)
  return res.data
  // Get products functionality
};

export const updateLike = async(id:number,inclike:number) => {
  console.log(id,inclike)
  const res:AxiosResponse<data>=await axios.post(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products/id`,{
  "like":inclike
  })
  // Update like functionality
};

export const updateDisLike = () => {
  // Update dislike functionality
};

export const deleteProduct = async(id?:number) => {
  const res:AxiosResponse<data[]> =await axios.delete(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/products/${id}`)
  
};
