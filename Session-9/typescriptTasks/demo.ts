let prices:number[] = [1, 2, 3, 4, 5];

function calculateTotal(arr: number[]): number {
  let a: number = arr.reduce((acc, curr) => acc + curr, 0);
  return a;

}
console.log(calculateTotal(prices))

function addNumber(a:number,b:number):string|number{
if((a+b)>100){
    return "sum is greater than 100 "
}
return (a+b);
}

console.log(addNumber(500,10));

