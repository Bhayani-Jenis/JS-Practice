// Assignment 3
// Create a function updateField that takes:
// object
// key
// value
// Ensure the value type matches the key type.
// Try assigning wrong type and observe the error.


function updateField<T,K extends keyof T>(obj:T,key:K){

}

const obj={
    id:1,
    name:"jd"
}
updateField(obj,"email")

//it gives a error like this
// Argument of type '"email"' is not assignable to parameter of type '"id" | "name"'.




