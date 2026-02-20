// Assignment 4
// Create a constant adminUser .
// Create a type from it using typeof .
// Add a new property and observe how the type changes automatically.


const adminUser={
    id:1,
    name:"jd",
    email:"jd@mail.com"
}

type newAdminUser=typeof adminUser


//here if i add any other property like address than type is chnaged for newAdminUser directly