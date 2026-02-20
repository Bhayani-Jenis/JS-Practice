// Assignment 5
// Create a type ReadOnlyUser where all properties are readonly.
// Create a type StringifiedUser where all properties become string.
// Create a type OptionalAndNullableUser where all properties are optional and nullable.


type User={
    id:number,
    name:string
}


//--------1
type ReadOnlyUser={
readonly[K in keyof User]: User[K]
}


//---------2
type StringifiedUser={
    [K in keyof User]:string
}

//----------3
type OptionalAndNullableUser={
    [K in keyof User]?:User[K]|null
}

