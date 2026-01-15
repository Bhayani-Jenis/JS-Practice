let a={
    name:'jenis',
    age:'20'
}
function xyz(x) {
    x.name='keyur';    
}
xyz(a);
console.log(a);

// output::
// { name: 'keyur', age: '20' }

// here we can show that the object datatype is primitive since when we pass 
// it in function parameter than the reference of actual variables address is passed so it chnaged the actual value