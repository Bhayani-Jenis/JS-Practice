type OrderBase = {
  orderId: number;
  amount: number;
};
type Auditable = {
  createdAt: Date;
  createdBy: string;
};
type Order = OrderBase & Auditable;

interface BaseOrder {
  orderId: number;
  amount: number;
}
interface AuditedOrder extends BaseOrder {
  createdAt: Date;
  createdBy: string;
}

let a: Order = {
  orderId: 2,
  amount: 10,
  createdAt: new Date(),
  createdBy: "jenis",
};
//if we does not provide createdBy or any other value than it shows error like this
// Type '{ orderId: number; amount: number; createdAt: Date; }' is not assignable to type 'Order'.
//   Property 'createdBy' is missing in type '{ orderId: number; amount: number; createdAt: Date; }' but required in type 'Auditable'.

let b: AuditedOrder = {
  orderId: 2,
  amount: 10,
  createdAt: new Date(),
  createdBy: "jenis",
};
//if we use interface that this error logs(missing cretedby)
//Property 'createdBy' is missing in type '{ orderId: number; amount: number; createdAt: Date; }'
// but required in type 'AuditedOrder'.
//

//both type of intersection use is good it is totally dependes for which work you have to use
// for normally variables use we use & type intersection
//for class related codes we use interface intersection like implements

//in both type enforce to define all property in extended variable

type username = {
  name: string;
};
type contactinfo = {
  mobile: number;
};
type userinfo = username & contactinfo;

interface username1 {
  name: string;
};
interface contactinfo1 extends username1  {
  mobile: number;
};

let user:userinfo={
  name:'jd',
}
//error occur in we dont give contactinfo in user variable
//  Type '{ name: string; }' is not assignable to type 'userinfo'.
//   Property 'mobile' is missing in type '{ name: string; }' but required in type 'contactinfo'.
let user1:contactinfo1={
  name:'jd',
}
//error also occur in this we dont give contactinfo in user variable
//Property 'mobile' is missing in type '{ name: string; }' but required in type 'contactinfo1'.


//insersion is better in conditions where we strictly needs all the properties of all the types 
//or if we make optional those property than we use union between all types or interfaces