let x=90;
let y=100;

function xyz(x,y){
    x=y;
}
xyz(x,y);
console.log(x," ",y);


// output::
// 90  100

// here since we called the function but the value of x is not equal to y 
// So, in call by value only the copy of actual variable is passed in those function which does not chnage in actual value