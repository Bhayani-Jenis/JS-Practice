type Admin = {
  role: "admin";
  permissions: string[];
};
type Customer = {
  role: "customer";
  purchaseHistory: number[];
};
type Guest = {
  role: "guest";
  payment: Object[];
};

type User = Admin | Customer | Guest;
function logUser(user: User) {
  if (user.role === "admin") {
    //since you check for role here in this block user has only give permission as suggestion in ide
    //givves only acceess of fields of Admin type
    console.log(user.permissions);
  } else if (user.role === "customer") {
    //in this when we type user.role than ide only suggest two remaining roles we dont narrowed yet
    //and in block only propertyies of Customer type
    console.log(user.purchaseHistory);
  } else {
    //this block is for remaining one role guest and their properties are used in this block
    console.log(user.payment);
  }
}



type Pgowner={
    role:'pgowner',
    Pgs:Number[]
}
type Pgseeker={
    role:'pgseeker'
    bookedpg:Number[]
}

type PgUsers=Pgowner|Pgseeker


interface Pgowner1{
    role:'pgowner',
    Pgs:Number[]
}
interface Pgseeker1{
    role:'pgseeker'
    bookedpg:Number[]
}

type PgUsers1=Pgowner1|Pgseeker1

function showdata(user:PgUsers1){
    if(user.role==='pgowner'){
        console.log(user.Pgs);
        
    }
    else{
        console.log(user.bookedpg);
    }
}




