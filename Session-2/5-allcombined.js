function applyCoupon(amount, couponCode){
    if(couponCode==="SAVE10"){
        return amount-(amount*0.1)
    }
    else if(couponCode==="SAVE20"){
        return amount-(amount*0.2)

    }
    else{
        return amount;

    }
}
console.log(applyCoupon(1000,"SAVE20"));
