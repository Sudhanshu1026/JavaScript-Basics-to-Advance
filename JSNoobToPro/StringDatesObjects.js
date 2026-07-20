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
