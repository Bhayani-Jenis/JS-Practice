// Assignment 5
// Create a constructor type for UserRepository .
// Create a callable type that formats User name

// -----------------------------1------------------------------
// Create a constructor type for UserRepository .
type UserRepository<T>=new (...args:any[])=>T



// -----------------------------2------------------------------
// Create a callable type that formats User name

type Formatter={
    (value:string):string
}
//this callable type can contains function and also we can crete objects in this so it behaves differently from normal function type where we only able to give function type 
//but in this types we can give function as well as objects

const formatedusername:Formatter=(a)=>a.toUpperCase()







