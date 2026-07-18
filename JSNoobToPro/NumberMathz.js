//Number
let a=10;
let c = 345.7383
let s=c.toFixed(2);  //Returns string upto decimal len = 2 and rounded up.
console.log(s , typeof s);

let n = c.toPrecision(4);
console.log(n,typeof n);





//Another way to create a Number
let a = new Number(20);  //Creates a object type number 
console.log(a,typeof a);

let b=new Number(20);
console.log(a==b); //false->Both obj pointing diff memory locn  
let b=a;
console.log(a==b);

let x=new Number(0);
console.log(Boolean(x));  //Dispite of value it returns True: Objects always have some address ref -> Always true
// This is why we do not use this way much




// MATH Objects
console.log(Math.abs(-23));
console.log(Math.PI);
console.log(Math.pow(2,3));
console.log(Math.sqrt(25));
console.log(Math.ceil(6.3));
console.log(Math.floor(6.3));
console.log(Math.max(29,294,29482,29322));

console.log(Math.random()); //Imp:Always generates a Random number in Range [0,1) -> where 0 is included.

//SATTEBAZZI GAME : Guess Number between 0 to 10
console.log(Math.random()*10); // Generate Number 0.00,1.324242 , 2.232321 to 9.9999
console.log(Math.floor(Math.random()*10));  // Generate only whole no not decimals


//Chess game : Draw Number between 1 to 6
console.log(Math.random()*6); // Generate Number 0.00,1.324242 , 2.232321 to 5.9999
console.log(Math.floor(Math.random()*6) +1);  // Generate only whole no not decimals

//Formula Used -: "Math.floor(Math.random()*totalnumberOfOutcome)+shift"

//OTP Generate: 4 digit  (1000-9999)
console.log(Math.floor(Math.random()*(9999-1000+1))+1000);

/* Note:we do not use Math Random to Generate OTP : Not Safe , 
 bcoz math random only provide output based on different Inputs (Seed) 
 and Seed can be same or predictible for diffrent users (Seed=DeviceTime).
 
 
 Crypto Lib Solves Problems of Seed :Use Random Events -> Mouse Locations + Ram Usages + Server Heats to create seeds*/
 





