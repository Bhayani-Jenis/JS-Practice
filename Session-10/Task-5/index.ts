type a=number|string


type b=number&string
//above line is not safe to use because no variable is two types of same type so never supports b


type A=number|string

function show(a:A){
    if(typeof a==='number'){
        console.log("number "+a);
        
    }
    else{
        console.log("string "+a);
    }
}
show(9)
show("hello")
// show({})
//above line gives error like Argument of type '{}' is not assignable to parameter of type 'A'.