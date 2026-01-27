let role = "USER"

// switch (role) {
//     case "ADMIN":
//         console.log("Full access");
//         break;
//     case "USER":
//         console.log("Limited access");
//         break;
//     case "MANAGER":
//         console.log("Moderate access");
//         break;
//     default:
//         console.log("Invalid Role");
//         break;
// }


const a={
    "ADMIN":"FULL ACCESS",
    "USER":"LIMITED ACCESS",
    "MANAGER":"MODERATE ACCESS",
    12:"INVALID ROLE"
}
console.log(a["12"]);
