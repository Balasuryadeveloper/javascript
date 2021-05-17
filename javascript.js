function diff(a,b){
    return(a === 15 || b === 15 || a-b == 15 || a+b === 15);
}
console.log(diff(10,5));
console.log(diff(20,5));
console.log(diff(12,3));
console.log(diff(10,20));
console.log(diff(10,15));
console.log(diff(1,14));