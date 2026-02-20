// Assignment 2
// Create a function activateUser that accepts only objects having isActive: boolean .
// Create another function that requires both id and email .
// Try passing invalid objects and observe TypeScript errors.

function activateUser<T extends { isActive: boolean }>(obj: T) {}

function anotherActivateUser<T extends { isActive: boolean; email: string }>(
  obj: T,
) {}

const obj = {
  id: 3,
  name: "jd",
};
const obj1 = {
  id: 3,
  name: "jd",
  isActive: true,
};
activateUser(obj);
//Gives Error like Below
// Argument of type '{ id: number; name: string; }' is not assignable to parameter of type '{ isActive: boolean; }'.
//   Property 'isActive' is missing in type '{ id: number; name: string; }' but required in type '{ isActive: boolean; }'.ts(2345)
// index.ts(6, 35): 'isActive' is declared here.

anotherActivateUser(obj1);
//Gives Error like Below
// Argument of type '{ id: number; name: string; isActive: boolean; }' is not assignable to parameter of type '{ isActive: boolean; email: string; }'.
//   Property 'email' is missing in type '{ id: number; name: string; isActive: boolean; }' but required in type '{ isActive: boolean; email: string; }'.ts(2345)
// index.ts(8, 61): 'email' is declared here.
