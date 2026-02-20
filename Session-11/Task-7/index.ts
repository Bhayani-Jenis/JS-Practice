// Assignment 7
// Create a custom utility ReadonlyByKeys<T, K> that makes selected keys readonly.
// Create a utility NonNullableFields<T> that removes null and undefined from all properties.
// Apply both to User and test different scenarios.


//-------------------1
type User2={
    id:number,
    name:string,
    email:string,
    isActive:Boolean,
    address:string,
}

type ReadonlyByKeys<T,K extends keyof T>=Omit<T,K> & Readonly<Pick<T,K>>

type newUser=ReadonlyByKeys<User2,"email">


//-------------------2

type User3={
    id:number|undefined,
    name:string|null,
    email:string,
    isActive:Boolean|undefined,
    address:string|null,
}


type NonNullableFields<T>={
    [K in keyof T]:NonNullable<T[K]>
}

type newUser2=NonNullableFields<User3>






//----------------------3

//testing for first task 
const user:newUser={
    id:1,
    name:"Jd",
    email:"string",
    isActive:true,
    address:"string",
}
user.id=3
// user.email="jd@mail.com"
// email is a readonly property so we cant change their value it gives us compile time error



//testing for second task

const user2:newUser2={
    id:1,
    name:"Jd",
    email:"string",
    isActive:null,
    address:"string",
}

//here null and undefined gives error when we give them in any property