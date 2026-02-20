// Assignment 6
// Create a type UserPublicProfile without email and isActive .
// Create a Record that maps user IDs (string) to User objects.

type User1={
    id:number,
    name:string,
    email:string,
    isActive:Boolean,
    address:string,
}
//-------------1
type UserPublicProfile=Omit<User1,"email"|"isActive">

//-------------2

type userRecord=Record<User1["id"],User1>
