// Assignment 1
// Create a type IsNumber<T> .
// Create a type ExtractEmail<T> that extracts email type if present.




// -----------------------------1------------------------------
// Create a type IsNumber<T> .

type IsNumber<T>=T extends number?true:false;

type num=IsNumber<5>


// -----------------------------2------------------------------
// Create a type ExtractEmail<T> that extracts email type if present.

type ExtractEmail<T>=T extends {email:infer R}?R:never;


type emailtype=ExtractEmail<{email:string}>
//extractemail contains email property so it gives string as a return type or whatever type of email is given in return 
//

type emailtype2=ExtractEmail<{id:string}>
//in this line extractemail does not have email property so it gives never in return type or whatever we given in else case of ternary operator

type emailtype3=ExtractEmail<{id:string}|{email:string}>
//it also gives the type of email property




