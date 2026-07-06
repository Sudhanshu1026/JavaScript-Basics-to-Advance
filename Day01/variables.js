//How to create Variables

//let : new way 
let name="Sishu";
let age=20;
console.log(name,age);




//const
const account =1234;
// account =172; X Not able to change
console.log(account);





//var : older way-> Today we use let / const
var a=10;
a=26;
var a =30; // var let us declare same 'a' again and agian  

if(true){
    var a=20;  // var can be accesed after scope-> dont respect scopes
}

console.log(a);