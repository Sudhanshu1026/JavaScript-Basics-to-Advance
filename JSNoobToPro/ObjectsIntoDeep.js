//Object in JavaScript -> key : value   pair

//CRUD operation: Create read update delete
//Create
const user = {
   name: "Rohit",
   age: 20,
   emailId: "negi@gmail.com",
   amount: 3400,
   "home address": "dwarka" //Use string key type -> space in key
}

//Read
console.log(user.name);
console.log(user.age);
console.log(user["age"]);
console.log(user["home address"]);
console.log(typeof user);
console.log(user.age);


//Update
user.aadhar = 1234;
user.amount = 5000;

console.log(user);


// Delete
delete user.emailId;
console.log(user);


const user = {
   name: "Rohit",
   age: 20,
   emailId: "negi@gmail.com",
   amount: 3400,
}

const user2 = user; //Copy By Reference
user2.age = 90;

console.log(user);






//Important
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));




//for in loop in Object 
for(let keys in user){
    console.log(keys, user[keys]);
}
// keys ={name,age}    user[keys]= user["name"] user["age"]




const user = {
   name: "Rohit",
   age: 20,
   emailId: "negi@gmail.com",
   amount: 3400,
}
//object ko destructing karna
const name = user.name;
const age = user.age;

const {name:userName,age:userAge} = user;

const arr = [10,20,40,90,11];
const [first,second]= arr;

console.log(userName,userAge);
console.log(first,second);







//for of loop array ke
const temparr = Object.keys(user);   //Returns a array of 'keys'
console.log(temnparr)


for(let keys of temparr){
    console.log(keys);
}

for(let values of Object.values(user)){
    console.log(values);
}

console.log(Object.entries(user));
// [
//   [ 'name', 'Rohit' ],
//   [ 'age', 20 ],
//   [ 'emailId', 'negi@gmail.com' ],
//   [ 'amount', 3400 ]
// ]

for(let [keys,values] of Object.entries(user)){
    console.log(keys, values);
}









//Creating Method/function inside Objects
const user = {
   name: "Rohit",
   age: 20,
   emailId: "negi@gmail.com",
   amount: 3400,
   greeting: function(){  //Function
    console.log(`Strike is coming on 18 october ${this.name}`); //this=user
    return 20;
   }
}

const user2 = {
    name:"Mohan",
    account:201,
     greeting: function(){
    console.log(`Strike is coming on 18 october ${this.name}`); //this=user2
    return 20;
   }
}

user2.greeting = user.greeting;

user2.greeting();
const va = user.greeting();
console.log(va);

//nested object

const user = {
   name: "Rohit",
   age: 20,
   emailId: "negi@gmail.com",
   amount: 3400,
   address: {
    city:"kotdwar",
    state:"Uttarkhand",
    country:"India"
   }
}

//shallow copy
const user2 = {...user}; //Only Handles Level 1 Features..Not nested part.
user2.name = "Mohan";
user2.address.city = "Dwarka";

console.log(user2);

console.log(user.address.city);


//deep copy

const user2 = structuredClone(user);//Handle all Levels and create exact copy.
user2.address.city = "Dwarka";
console.log(user);


// Key:( String || Symbol ) -> Using Symbol as a key in Object
const sym = Symbol("id");

const user = {
    name:"Rohit",
    age:20,
    0: 100,
    2: "Mohan",
    [sym]:"Hello Ji"
}
console.log(user[sym]);






//How array is stored in javascript as an Objects .
const arr = [10,20,30,40];
// {
//     0:10,
//     1:20,
//     2:30,
//     3: 40
// }