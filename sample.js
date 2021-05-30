//Javascript Programming
//printing statement
console.log("This is javascript program");
//variable declaration
var n1=10;
let n2=12;
const n3=2;
console.log(n1);
console.log(n2);
console.log(n3);
//sample program
var a,b,c;
a=10;
b=2;
c=a+b;
console.log(c);
//find the variable type
var a=1;
let name='Balasurya';
let n=5.48;
console.log(typeof(a));
console.log(typeof(name));
console.log(typeof(n));
//exponantial
const num=5.6e6;
console.log(num);
//infinity value
const i=Infinity;
const i1=-Infinity;
console.log("This is plus "+i);
console.log("This is minus "+i1);
//min & max Integer
const num1=Number.MIN_SAFE_INTEGER;
console.log(num1);
const num2=Number.MAX_SAFE_INTEGER;
console.log(num2);
//string
let str="This is string";
let str1="Welcome to 'javascript' programming";
let str2="Welcome to \"javascript\" programming";
console.log(str);
console.log(typeof(str));
console.log(str1);
console.log(str2);
//multiline string
let str3="Welcome to \n\javascript programming";
let str4=`Welcome to 
javascript programming`;
let str5="Welcome to \t javascript programming";
console.log(str3);
console.log(str4);
console.log(str5);
//Arithmetic operators
//Addition
var a1,b1,c1;
a1=10;
b1=20;
c1=a1+b1;
console.log("sum of a1+b1 :"+c1);
//subtraction
var a2,b2,c2;
a2=10;
b2=20;
c2=a2-b2;
console.log("sub of a1-b1 :"+c2);
//multiply
var a2,b2,c2;
a2=10;
b2=20;
c2=a2*b2;
console.log("multiplying of a1*b1 :"+c2);
//division
var a2,b2,c2;
a2=10;
b2=20;
c2=b2/a2;
console.log("divid b1/a1 :"+c2);
//modulus
var a2,b2,c2;
a2=10;
b2=21;
c2=b2%a2;
console.log("modulus of b1%a1 :"+c2);
//exponential
var a2,b2,c2;
a2=5;
b2=2;
c2=b2**a2;
console.log("power of b1^a1 :"+c2);
//increment & decreament
var a2=10;
a2++;     //a2=10+1
console.log(a2); //a2=11
a2--;    //a2=11-1
console.log(a2);//a2=10
//string operator
let string1="welcome to"
let string2="javascript programming"
let string3=string1+string2;
let string4=string1+" "+string2;
string1+="\'javascript\'";
console.log(str3);
console.log(string4);
console.log(string1);
//adding string & number
let room="room no"+5;
console.log(room);
//Boolean operators
var Bool1=true;
var Bool2=false;
console.log(typeof(Bool1));
console.log(typeof(Bool2));
//comparison operator
var no1=5;
var no2=10;
console.log(no1==no2);
console.log(no1===no2);
console.log(no1!=no2);
console.log(no1>no2);
console.log(no1>=no2);
console.log(no1<no2);
console.log(no1<=no2);
//Control Statements
//condition statements
//if condition
var number1,number2;
number1=20;
number2=40;
if (number1 < number2) {
    console.log("number2 is big value");
}
//if else statement
var number1,number2;
number1=50;
number2=70;
if (number1 > number2) {
    console.log("number1 is big value");
}
else{
    console.log("number2 is big value")
}
//else if statement
var number1=50;
var number2=100;
var number3=10;
if (number1 > number2 && number1 > number3) {
    console.log("number1 is big value");
}
else if(number2 > number1 && number2 > number3){
    console.log("number2 is big value");
}
else{
    console.log("number3 is big value")
}
//switch case statement
var stuname="Balasurya";
switch (stuname) {
    case "Balasurya":
        console.log("Studentname :"+stuname);
        break;
        case "Kowshick":
            console.log("Studentname :"+stuname);
            break;
        case "Hossana":
            console.log("Studentname :"+stuname);
            break;
        default:
            console.log("Student name isn\'t found");
            break;
}
var mark = 45;
if (mark >=91 && mark <=100) {
    console.log("AA grade");
}
else if (mark >=81 && mark <=90) {
    console.log("AB grade");
}
else if (mark >=71 && mark <=80) {
    console.log("BB grade");
}
else if (mark >=61 && mark <=70) {
    console.log("CC grade");
}
else if (mark >=51 && mark <=60) {
    console.log("DD grade");
}
else if (mark >=41 && mark <=50) {
    console.log("EE grade");
}
else if (mark >=35 && mark <=40) {
    console.log("FF grade");
}
else{
    console.log("fail");
}
//without parameter
function process() {
    var a=11;
    var b=10;
    console.log(a);
    console.log(b);
}
process();

//withparameter
function process1(a,b) {
    var a,b;
    console.log(a);
    console.log(b);
}
process1(10,30);

//funtion with return value
function Rprocess() {
    return 200;
}
var a=Rprocess();
console.log(a);
//or
console.log(Rprocess());

//function overloading

//it has same function name but diff parameters
//you can use it many more files but can't use in single file
function Rprocess(a,b) {
    return a,b;
}
function Rprocess(a,b,c) {
    return a+b+c;
}
function Rprocess(a,b,c,d) {
    return a+b+c+d;
}
Rprocess(100,200);
console.log(Rprocess());

//Looping statement
//do while
var h=0;
do {
    console.log("welcome to js");
    h++;
} while (h<=10);

//while
var k=1;
while (k<=10) {
    console.log("welcome");
    k++;
}
//for Loop
var nums=0;
for (let i = 0; i < 10; i++) {
    console.log("Welcome to Javascript Programming");
}
