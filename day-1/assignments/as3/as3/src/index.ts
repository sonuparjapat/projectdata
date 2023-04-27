interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}
const obj:Admin|User={
    type:"admin",
    name:"hello",
    age:14,
    role:"frontend"
}