// 2. Identify why the following code throws an error and fix it without using the class keyword.
function Animal(name) {
  this.name = name;
}
Animal.prototype.eat = function() {
  console.log(`${this.name} is eating.`);
};
function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}
// Intent: Dog should inherit from Animal
Dog.prototype = Animal.prototype;
// Dog.prototype=Object.create(Animal.prototype)
// Dog.prototype.constructor=Dog

Dog.prototype.bark = function() {
  console.log("Woof!");
};

const myDog = new Dog("Buddy", "Golden");
const genericAnimal = new Animal("Generic");

genericAnimal.bark(); // Why does this happen?
// in line number 13 we only gives reference of animal to dog prototype whenever we change in dog class than it also goes in animal so
//object of animal has a access of bark function

console.log(myDog.constructor.name); // Why is this 'Animal' and not 'Dog'?
//because we provide reference of animal to dog class at line 13 so constructor of dog class is also a animal
console.log(myDog);
console.log(myDog.constructor);

console.log(Dog.prototype); //{ eat: [Function (anonymous)], bark: [Function (anonymous)] }
console.log(Animal.prototype); //{ eat: [Function (anonymous)], bark: [Function (anonymous)] }
//here we saw that both prototype has same methods

console.log(myDog.constructor.name); //Animal

console.log(genericAnimal.constructor.name);//Animal



