 //Data Types in Java Script

 // (1).Primitive DataTypes-> number, string, boolean, undefined, null, bigint, symbol.



//Number
let a=10; 
let b=20.37;
console.log(a,b);
console.log(typeof a,typeof b);

//String
let c="Sudhanshu";
let d="is coming";
let e=', Move Aside'
console.log(c,d,e);
console.log(typeof c,typeof d, typeof e);



// boolean
let login=true;
let f=false;

console.log(login,f);
console.log(typeof login,typeof f);



// undifined
let n;        //Because it do not contains any value-> Undifined
console.log(n);  
console.log(typeof n);



// bigint : to store big sized nums 
let num=34434932493849384n;
console.log(num);
console.log(typeof num);


// null : intentionally no value
let weather = null;
console.log(weather);
console.log(typeof weather); //returns object : Biggest BUG

// symbol
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1==id2); //false: Both are not same-> symbol creates unique id for each inputs
console.log(typeof id1,typeof id2);







//   (2).Non-Primitive DataTypes -> array, object, function. 

// array
let arr=[10,20,50,"Sishu",true];
console.log(arr);
console.log(typeof arr);


// object
//To store : Sishu 176 22 Gen -> use object

let user={
    name:"Sishu",
    rollno:176,
    age:22,
    category:'Gen'
}

console.log(user);
console.log(user.name);
console.log(typeof user);




//function : in JS function is data type

function greet(){
    console.log("Hello");
}
greet();

let ans = function add(){   //Store function into an Variable
    console.log(10+20);
}


//How to access
console.log(ans());
ans();
console.log(typeof greet,typeof ans);






/*  Primitive data types are Immutable:passed by value 
 Non-Primitive data type are Mutable:passed by reference.  */

 let x=10;
 let y=x;
 y=20;
 console.log(x,y);      //a=10 10 b=20 



 let array=[10,20,30,40];
 array[0]=70;

 console.log(array);

 

 let newUser={
    NAME:"sishu",
    AGE:20
 }

 newUser.NAME="Rahul";
 console.log(newUser);