// Q1. Simple Object Context
const laptop = {
    brand: "Dell",
    getBrand: function() {
        return this.brand;
    }
};
const myBrand = laptop.getBrand();
console.log(myBrand);

//Output:-Dell
//beacause laptop.getBrand() calls the function imediately and the value Dell is stored in mybrand so it is logs Dell

//--------------------------------------------------------------------------------------------------------------------------------

// Q2. Basic Promise Flow
console.log(1);
Promise.resolve().then(() => {
    console.log(2);
});
console.log(3);

//Output:-1,3,2
//here Promise is async task so it goes to microtask queue to make execution sequentially and don't
//block thread it will execute whenever call stake is empty.so it will print syncronous task first than async task like promise and timeouts 

//--------------------------------------------------------------------------------------------------------------------------------



// Q3. The Broken Chain

Promise.reject("Error Occurred")
    .then(() => console.log("Success"))
    .catch((err) => console.log(err));

//Output:-Error Occurred
//here Promise is execute with .reject method so it goes to catch block directly and print error message which is given in reject


//--------------------------------------------------------------------------------------------------------------------------------



// Q4. Global vs. Local Scope

var status = "Offline";

const server = {
    status: "Online",
    getStatus: function() {
        return this.status;
    }
};

console.log(server.getStatus());
//Output:-Online
// here getStatus method called by server object so this method point to server object and this.status is equeal as server.status so it 
// prints online

//--------------------------------------------------------------------------------------------------------------------------------





// Q5. Math in Promises

Promise.resolve(10)
    .then((num) => num * 2)
    .then((result) => console.log(result));


    //Output:-20
//here promise.resolve goes to than block with value provided is 10 and than block return 10*2 =20 in next than block and it prints 20; 