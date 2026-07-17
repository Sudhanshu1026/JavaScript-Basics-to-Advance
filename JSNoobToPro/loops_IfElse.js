//Loops in JavaScript

//For loop
for(let i=0;i<=5;i++){
    console.log(i);
}

//while loop
let i=0;
while(i<=5){
    console.log(i);
    i++;
}


//Do While Loop
let i=0;
do{
    console.log(i);
    i++;
}
while(i<=5);












//if-else conditions in JavaScript

//if-else
    let age=12;
if (age >= 18) {
  console.log("You are Adult,Can Place Voting");
} else {
  console.log("You are Teen,Can't Place Vote");
}


//if-else ladder
let age=45;
if(age<18){
    console.log("Kid");
}
else if(age>60){
    console.log("Old");
}
else{
    console.log("Adult");
}