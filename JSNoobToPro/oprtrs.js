//OPERATORS IN JAVA SCRIPT


//Arithmetic Operators
console.log(2+5); //Add
console.log(2-5); //Sub
console.log(2*5); //Mul
console.log(6/2); //Div
console.log(5%2); //Modulo

console.log(5**3); //n^m : 5^3=125



//Assignment Operators
let x=20;
let y=30;

x=x+y;
x=x-y;
x=x*y;

x+=y;
x-=y;
x*=y;



//Comparison Operator
let a=10;
let b=20;

console.log(a>b);
console.log(a>=b);
console.log(a<b);
console.log(a<=b);

console.log(a==b);  //Loosely 
console.log(a===b);  //Strictly


let c="10";
console.log(a==c);  //Loosely 
console.log(a===c);  //Strictly







//Type conversion

let txt1="300";
let num1=Number(txt1);
console.log(num1,typeof num1);




let num2=300;
let txt2=String(num2);
console.log(txt2,typeof txt2);

let txt3="300ahd";
let num3=Number(txt3);
console.log(num3,typeof num3);


console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));


//While comparison : JS Treats (null ->number 0) , (undifined -> NaN)
console.log(0 >= null);
console.log(0 <= null);
console.log(0 == null);
console.log(0 > null);
console.log(0 < null);

console.log(null>=undefined);
console.log(undefined >= 0);


console.log("Sishu">"rishu");

console.log(10>"10");
console.log(10>="10");

console.log(10<true);

/* Conclusn:If we have to compare two data of different types eg: number & Boolean -> first they will 
converted into number then comparison happens */