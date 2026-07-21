//String

const str1="Rohit";
const str2='Negi';

const day = 18;
const str3=`Strike is 
Coming soon on ${day}th of June`; //can write to next lines also and import external variables also

console.log(str3);

const str =`Hello Coder Army Army`;
console.log(str.length);
console.log(str[3]);

str[3]="n";  // X immutable cant change 
console.log(str);


//upper-lower case
console.log(str.toUpperCase()); //Do not change on real string :return new string
console.log(str.toLowerCase()); //Do not change on real string :return new string

console.log(str.indexOf('Ar'));
console.log(str.lastIndexOf('Ar'));
console.log(str.includes('Cod'));    //return true-false


//Slice
console.log(str.slice(2,7));  //From start
console.log(str.slice(3));

console.log(str.slice(-5,-2));  //From last
console.log(str.slice(-5));


console.log(str.substring(2,5));  //Can't mark down -ve Indices


//Concatenation
const a= "Sishu";
const b= "Singh";
const c = a +" " +b;
console.log(c);





//Date in Java script
const now=new Date();

console.log(now);
console.log(now.toString());
console.log(now.toISOString());
console.log(now.toLocaleString());

console.log(now.getDay());   // 1 Mon -7 Sun
console.log(now.getDate());
console.log(now.getFullYear());
console.log(now.getMonth());    // 0 Jan-11 Feb




//Inconsistencies in Date
//Day:mon-tue(1 based)    Month:0-11(Jan-Dec)

//Creating own date objects
const now = new Date(2026,6,21,23,10,18,127);      //date(year,month,date,hour,min,sec,milisec)
console.log(now);
console.log(now.toString());
//Returns 2026-07-21 -> 06 mon:August (0 Based) in input, But  07 mon:August(1 based) in output 





//Millisecond Clock Starts/Timestamp in 1970
const now=Date.now();
console.log(now); //Output:1784656240935 current time always in milisecs
const dates=new Date(1784656240935); //Curr milisec into dates and time
console.log(dates);
console.log(dates.toString());



const firstDate=new Date(0); //milisec clock started from this Date : 8 Jan 1970
console.log(firstDate.toString());

