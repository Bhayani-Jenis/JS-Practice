function show(x:any,y:any){
    console.log("sum is "+(x+y));
    console.log("division is "+(x/y));
}
show(2,"string")

//sum is 2string
//division is NAN

//it doen't check type before doing operation 
//gives error at run time if operations is not possible


function show1(x:unknown,y:unknown){
    if(typeof x==='number' && typeof y==='number')
        console.log("sum is "+(x+y));
    if(typeof x==='string' && typeof y==='string')
        console.log("division is "+x+y);
}
show1("hj",4)
//in unknown types we have to check type of variable before using it to avois error
//if we doesnot check type it gives error at compile time in unknown

let a:any;
let b:unknown;
a=50
b=90
show(a,b)
show1(a,b)

//here we can call function like this using type any and unknown since any gives runtime error and unknown checks at compile time 
//unknown is better than any


//FINAL Conclusion
//undefined is more safer than the  any type

