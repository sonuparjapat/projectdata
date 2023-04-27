interface person{
title:string,
status:boolean,
id:number
}
let obj:person={
    title:"hello",
    status:false,
    id:3
}

const getName=({firstname,lastname}:person2)=>{
    return `${firstname} ${lastname?lastname:""}`

}
console.log(getName({firstname:"sonu"}))
interface person2{
    firstname:string,
    lastname?:string
}

// Q3

interface Address{
    houseNumber:number,
street:string,
city:string,
state:string,
postalCode:number,
country:string
}
let question4:Address={
houseNumber:4,
street:"rawat",
city:"ambala",
state:"haryana",
postalCode:123,
country:"india"
}

console.log(question4)
// Q4
interface PersonDetails{
  Mr?:string,
  Phone:number[],
  addresses:string[],
  email?:string,
  firstname:string,
  lastname:string,
  middlename?:string

}
let persondetails:PersonDetails={
    Phone:[1,2,3],
    addresses:["ambala city haryana"],
    email:"sjfsfjs",
    firstname:"sonu",
    lastname:"parjapat",

}
console.log(persondetails)

// Q5
let arr=[]
const PhoneBook=<Type>(obj:Type)=>{
let x=arr.push(obj)
return x
 

}
console.log(PhoneBook<PersonDetails>({Phone:[1,2,3],addresses:["hello"],email:"fslfjs",firstname:"sfsjfs",lastname:"sfljs"}))
