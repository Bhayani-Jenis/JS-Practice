const a={
    name:'jd',
    age:45,
    address:{
        village:'bhesan',
        state:'gujrat'
    }

}

const b={...a}
b.age=67
b.address.state='hj'
console.log(a);
console.log(b);

