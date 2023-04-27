let x:string
x="hello"
let age:number;
age=19
let isFetching:boolean;
isFetching=true
let array:number[];
array=[1,1,2]

let arr=<Type>(a:Type)=>{
    let arr=[]
    arr.push(a)
    return arr
  
}
console.log(arr<string>("a"))

let tuple:[string,boolean]
tuple=["hello",true]


type user={
    User:String,
    SuperUser:String,
    Admin:String,
    SuperAdmin:String
 
 }
 let obj:user={
     User:"hello",
     SuperUser:"superman",
     Admin:"america",
     SuperAdmin:"Thor"
     
 }
 


const product=(x:number,y:number)=>{
    return x*y
}
console.log(product(1,2))
const divide=(x:number,y:number)=>{
    return x/y
}
console.log(divide(1,2))
const naming=(x:string)=>{
    console.log(x)
}
naming("sonu")
