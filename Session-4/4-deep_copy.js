// 4. Write a function called masterClone(obj) that performs a deep copy without using JSON.stringify or structuredClone.
// Requirements:
// It must handle nested objects.
// It must handle nested arrays.
// It must not copy functions by reference (they can remain shared, but the object structure must be unique).

function masterClone(obj){
        if(obj==null || typeof(obj)!=='object')return obj

        let copy=Array.isArray(obj)?[]:{};

        for(let i in obj){       
        copy[i]=masterClone(obj[i])       
    }
    return copy;
}
let a={
    name:'jd',
    age:21,
    address:{
        state:'gujrat'
    },
    number:[21,80,90],
    func:function name(params) {
        return params;
    }
}
let b=masterClone(a)
a.address.state='dilli'
console.log(a);
console.log(b);
