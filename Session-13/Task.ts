// Create a PaymentState discriminated union.
// Add exhaustive checking to handle all states.
// Create a generic ApiResponse<T> for products.
// Write a type guard to check if response is success.




///----------------------------------------1-------------------------------
// Create a PaymentState discriminated union.
type PaymentState={status:"success",paymentdata:"data is there"}|{status:"error",message:"error during payment data fetching"}


///----------------------------------------2-------------------------------
// Add exhaustive checking to handle all states.
function paymentcheck(data:PaymentState){
        switch(data.status){
            case 'success':
                console.log(data.paymentdata)
                break;
            case "error":
                console.log(data.message);
                break;
            default:
                const extra:never=data
                return extra    
        }
}
paymentcheck({status:"error",message:"error during payment data fetching"})

///----------------------------------------3-------------------------------
// Create a generic ApiResponse<T> for products.
type Product={
    id:number,
    name:string,
}
type ApiResponse<T>={status:"success",data:T}|{status:"error",message:"product fetching failed"}


///----------------------------------------4-------------------------------
// Write a type guard to check if response is success.
function isSuccess<T>(data:ApiResponse<T>):data is {status:"success",data:T}{
return data.status==='success'
}





