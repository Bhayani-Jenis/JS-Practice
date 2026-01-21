const transactions = [
  { userId: 1, type: "credit", amount: 500 },
  { userId: 2, type: "debit", amount: 200 },
  { userId: 1, type: "debit", amount: 100 },
  { userId: 3, type: "credit", amount: 700 },
  { userId: 2, type: "credit", amount: 300 },
  { userId: 1, type: "credit", amount: 200 }
];


//Using only map, filter, and reduce:

// Calculate net balance per user

// Ignore users whose final balance is ≤ 0

// Return result sorted descending by balance

    const result = Object.values(
    transactions.reduce((acc, { userId, type, amount }) => {
    const value = type === "credit" ? amount : -amount;

    acc[userId] = acc[userId] || { userId, balance: 0 };
    acc[userId].balance += value;

    return acc;
  }, {})
)
  .filter(user => user.balance > 0)
  .sort((a, b) => b.balance - a.balance);

console.log(result);



const departments = [
  {
    name: "Engineering",
    employees: [
      { name: "A", salary: 5000 },
      { name: "B", salary: 7000 }
    ]
  },
  {
    name: "HR",
    employees: [
      { name: "C", salary: 4000 },
      { name: "D", salary: 6000 }
    ]
  }
];

// Flatten all employees

// Add department name to each employee

// Calculate average salary per department

// Return:

// {
//   Engineering: 6000,
//   HR: 5000
// }

const a=departments.map((x)=>x.employees.map(y=>({...y,department:x.name}))).flat()
const total=a.reduce((acc,item)=>{
    if(!acc[item.department])
    acc[item.department]={department:item.department,salary:0,total:0}
        acc[item.department].salary+=item.salary;
                acc[item.department].total+=1;
    return acc;
},{})
const avg=Object.values(total).map(x=>({department:x.department,average_salary:x.salary/x.total}))
console.log(avg);


const text = "JS is great and JS is powerful and JS is fun";
// Using map, filter, reduce:

// Count frequency of each word

// Ignore words with length < 3

// Convert result to array

// Sort by frequency (desc)

// Output:
// [
//   ["js", 3],
//   ["and", 2],
//   ["great", 1],
//   ["powerful", 1],
//   ["fun", 1]
// ]

const freq=text.split(" ").reduce((acc,item)=>{
if(!acc.has(item)){
  acc.set(item,1);
}
else{
  acc.set(item,acc.get(item)+1);
}
return acc;
},new Map())

console.log(Array.from(freq).sort((a,b)=>b[1]-a[1]));

