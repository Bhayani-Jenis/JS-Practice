let a=10
const b="jenis"

// a="jd"
//ERROR::Type 'string' is not assignable to type 'number'.

// b=90
//ERROR:Cannot assign to 'b' because it is a constant.

function sum(a:number,b:number){
    return a+b;
}
console.log(typeof sum(1,2));

//number