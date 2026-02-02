const users = [
    {
        id: 1,
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        age: 25,
        isActive: true,
        scores: [85, 90, 78]
    },
    {
        id: 2,
        name: "Bob Smith",
        email: "bob.smith@example.com",
        age: 32,
        isActive: false,
        scores: [70, 65, 80]
    },
    {
        id: 3,
        name: "Charlie Brown",
        email: "charlie.brown@example.com",
        age: 28,
        isActive: true,
        scores: [95, 88, 92]
    },
    {
        id: 4,
        name: "Diana Prince",
        email: "diana.prince@example.com",
        age: 40,
        isActive: true,
        scores: [60, 75, 70]
    },
    {
        id: 5,
        name: "Ethan Hunt",
        email: "ethan.hunt@example.com",
        age: 35,
        isActive: false,
        scores: [88, 90, 85]
    },
    {
        id: 6,
        name: "Fiona Gallagher",
        email: "fiona.gallagher@example.com",
        age: 22,
        isActive: true,
        scores: [100, 95, 98]
    },
    {
        id: 7,
        name: "George Martin",
        email: "george.martin@example.com",
        age: 29,
        isActive: false,
        scores: [55, 60, 65]
    },
    {
        id: 8,
        name: "Hannah Lee",
        email: "hannah.lee@example.com",
        age: 31,
        isActive: true,
        scores: [78, 85, 82]
    },
    {
        id: 9,
        name: "Ian Somerhalder",
        email: "ian.somerhalder@example.com",
        age: 27,
        isActive: true,
        scores: [92, 88, 95]
    },
    {
        id: 10,
        name: "Julia Roberts",
        email: "julia.roberts@example.com",
        age: 38,
        isActive: false,
        scores: [80, 85, 90]
    }
];


function getActiveUsers(users) {
    let a = users.filter((x) => x.isActive)
    console.log(a);
}


function getUserAverageScore(users) {
    let avgret = users.reduce((acc, x) => {
        let a = (x['scores'].reduce((acc1, ele) => acc1 + ele, 0) / x['scores'].length).toFixed(2)
        acc.push({ name: x.name, avgrating: a });
        return acc;
    }, [])

    return avgret;

}
let a = getUserAverageScore(users);

function getTopScorer(a) {
    let score = 0

    let name = a.reduce((acc, x) => {
        if (parseInt(x['avgrating']) > score) {
            score = parseInt(x['avgrating'])
            acc = x['name']
        }
        return acc

    }, "")

    return name
}
// console.log(getTopScorer(a));

function sortUsersByAge(users){
        return users.sort((a,b)=>a['age']-b['age'])
}
// console.log(sortUsersByAge(users));
function removeUserById(users,id){
    return users.filter((x)=>x.id!==id)
}

function nameAndEmail(user){
    let n=user.name.toLowerCase();
    console.log(`${n}  <${user.email}>`);
    
}
// users.forEach((x)=>nameAndEmail(x))

function getUsersNames(users){
    return users.map((x)=>x.name)
}

// console.log(getUsersNames(users));


function findUserByEmail(users,email){
    return users.find((x)=>x.email===email)
}
// console.log(findUserByEmail(users,"ian.somerhalder@example.com"));

function groupUsersByAge(users){
        let a=users.reduce((acc,curr)=>{
            let agemin=parseInt(curr.age/10)*10
            // console.log(agemin,curr.age);
            
            let agemax=agemin+9;

            acc[`${agemin}-${agemax}`]=acc[`${agemin}-${agemax}`]||[]
            acc[`${agemin}-${agemax}`].push(curr)

            return acc;
        },{})
        return a;
}
// console.log(groupUsersByAge(users));


