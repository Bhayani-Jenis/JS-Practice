const discountCodes={
    "SAVE10":0.1,
    "SAVE20":0.2,
    
}

function applyCoupon(amount, discount=0){
    return amount-(amount * discount)
}

console.log(applyCoupon(1000,discountCodes["SAVE20"]));
