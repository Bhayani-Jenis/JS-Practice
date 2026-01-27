// 3. Predict the result of the following execution.
function SmartPhone(brand) {
  this.brand = brand;

  return {
    brand: "Generic",
    os: "Android"
  };
}

SmartPhone.prototype.getBrand = function () {
  return this.brand;
};

const myPhone = new SmartPhone("Apple");

console.log(myPhone.brand);    // Generic
console.log(myPhone.getBrand); // undefined
// here we get undefined because smartphone return object so myphne is no longer object but it act like object and object has no access of getbrand function

//if we comment out return part from SmartPhone and then call getbrand function than it runs properly
//LIKE THIS

// function SmartPhone(brand) {
//   this.brand = brand;
// }


