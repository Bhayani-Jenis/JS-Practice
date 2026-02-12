enum States{
    initial="INITIATED",
    success='SUCCESS',
    failed="FAILED"
}

function demo1(status:States){
    console.log("status is "+ status);
}
demo1(States.success)
// demo("SUCCESS")
//this line gives error since our method only accepts states enum type as a parameter any othther value gives error 
// Argument of type '"SUCCESS"' is not assignable to parameter of type 'states'.



// Why enums are better than magic strings?
//
//enum is like predefined values in it so it gives suggestions in ide when we use enum name 
//enum is like center for all used variable if we change in enum it chnages all those places where we used them
//