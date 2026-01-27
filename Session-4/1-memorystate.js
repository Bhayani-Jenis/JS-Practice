// 1. Predict the output and explain the memory state.

const registry = {
  active: [{ id: 1, name: "Alpha" }],
  archived: []
};

function cloneAndModify(data) {
  // Goal: Create a copy so the original registry isn't changed
  const copy = { ...data };

  copy.active.push({ id: 2, name: "Beta" });
  copy.active[0].name = "Gamma";
  copy.version = 2.0;

  return copy;
}

const newRegistry = cloneAndModify(registry);

console.log(registry.active.length); // 2
console.log(registry.active[0].name); // Gamma
console.log(registry.version);       // undefined
console.log(newRegistry);// it shows the version variable because version is primitive data  type and primitive data  type has different copies in different objects

//here registry has a values in array form and it is store in heap memory while their address stores in stack memory
//so whenever we create a copy of registry(object) then it only gives reference of non-primitive datatypes and creates a actual copy of primitive datatype


//if we use spread operator to direcly in array to copy so it makes a saperate copy of array
// let a=[1,2,3]
// let b=[...a]
// b.push(4)
// console.log(a); [1,2,3]
// console.log(b)[1,2,3,4]




