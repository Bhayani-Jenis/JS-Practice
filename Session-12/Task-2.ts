// Assignment 2
// Create FirstArgument<T> to extract first parameter type.
// Test it with a function that takes (id: string, active: boolean) .


// -----------------------------1------------------------------
// Create FirstArgument<T> to extract first parameter type.



type FirstArgument<T>=T extends (...args:infer R)=>boolean?R[0]:number
type arg1type=FirstArgument<typeof func>


//second method
type FirstArgument1<T>=T extends (a:infer R,...args:any[])=>boolean?R:number
type arg1type2=FirstArgument<typeof func>



// -----------------------------2------------------------------
// Test it with a function that takes (id: string, active: boolean) .



function func(id:string,active:boolean){
    return active;
}


