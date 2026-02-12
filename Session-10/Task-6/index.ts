interface BaseUser {
  id: number;
  email: string;
}
interface Customer extends BaseUser {
  role: "customer";
  purchaseHistory: number[];
}
interface Admin extends BaseUser {
  role: "admin";
  permissions: string[];
}

function demo2(obj: BaseUser) {
  console.log(`${obj.email}`);
}

const objcustomer: Customer = {
  id: 1,
  email: "jd@mail.com",
  role: "customer",
  purchaseHistory: [],
};

const objAdmin: Admin = {
  id: 1,
  email: "jd@mail.com",
  role: "admin",
  permissions: [],
};

demo2(objAdmin);
demo2(objcustomer);

interface ApiResponce {
  status: number;
  message: string;
}

function showresdata(obj: ApiResponce) {
  console.log(obj.status);

  console.log(obj.message);
}
const resobj: ApiResponce = {
  status: 404,
  message: "Error ocuur",
};
showresdata(resobj);

interface customerdata extends ApiResponce {
  data: Customer;
}
const cusres: customerdata = {
  status: 200,
  message: "Responce Ok",
  data: objcustomer,
};
showresdata(cusres);

interface Product {
  id: number;
  name: string;
  price: number;
  ingredients: string[];
}
const productobj: Product = {
  id: 1,
  name: "jeera",
  price: 900,
  ingredients: [],
};

console.log(productobj);


// Why are interfaces preferred in large projects?
// because of easily extended and merging properties behaviour interface is highely useful in big projects
//it also useful because after using interface ide suggestion support is increase highely which is very good in big projects