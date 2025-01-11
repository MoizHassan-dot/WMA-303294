
/*

Problem 1: Write a js program to find maximum between two numbers

let num1 = 10;
let num2 = 30;
if (num1 > num2) {
    console.log(num1 + " is greater.");
} else {
    console.log(num2 + " is greater.");
}

Problem 2: Write a js program to find maximum between three numbers.

let num1 = 10, num2 = 20, num3 = 30;
if (num1 >= num2 && num1 >= num3) {
    console.log(num1 + " is the largest.");
} else if (num2 >= num1 && num2 >= num3) {
    console.log(num2 + " is the largest.");
} else {
    console.log(num3 + " is the largest.");
}


problem 3: Write a js program to check whether a number is negative, positive or zero.

let num = 10;

if(num > 0){
    console.log(num + " Number is positive.");
}
else if(num <0){
    console.lof(num + " is negative.");
}
else{
    console.log(num + " is zero.");
}

problem 4: Write a js program to check whether a number is divisible by 5 and 11 or not.

let num = 55;

if(num % 5 == 0 && num % 11 == 0){
    console.log(num + " is divisible by 5 and 11.");
}

problem 5: Write a js program to check whether a number is even or odd.


let num = 10;

if(num % 2 == 0){
    console.log(num + " is even.");
}
else{
    console.log(num + " is odd.");
}

problem 6: Write a js program to check whether a year is leap year or not.

let year = 2020;

if(year % 4 == 0){
    console.log(year + " is a leap year.");
}
else{
    console.log(year + " is not a leap year.");
}

problem 7: .a js program to check whether a character is alphabet or not.

let ch = 'a';

if(ch >= 'a' && ch <= 'z' || ch >= 'A' && ch <= 'Z'){
    console.log(ch + " is a character.");
}
else{
    console.log(ch + " is not a character.");
}

problem 8: Write a js program to input any alphabet and check whether it is vowel or consonant.

let ch = 'A';

if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' || ch == 'A' ||ch == 'E' ||ch == 'I' ||ch == 'O' || ch == 'U'){
    console.log(ch + " is a vowel ");
}
else{
    console.log(ch + " is a consonant" );
}

problem 9: Write a js program to input any character and check whether it is alphabet, digit or special character.

let input = '$';

if(input >= 0 && input <= 9){
    console.log(input + " is a digit");
}
else if(input >= 'a' && input <= 'z' || input >= 'A' && input <= 'Z' ){
    console.log(input + " is an alphabet");
}
else{
    console.log(input + " is a special character");
}

problem 10: Write a js program to check whether a character is uppercase or lowercase alphabet.

let char = 'b';
if (char >= 'A' && char <= 'Z') {
    console.log(char + " is an uppercase alphabet.");
} else if (char >= 'a' && char <= 'z') {
    console.log(char + " is a lowercase alphabet.");
} else {
    console.log(char + " is not an alphabet.");
}

problem 11: Write a js program to input week number and print week day.

let weekNumber = 10;
switch (weekNumber) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    case 6: console.log("Saturday"); break;
    case 7: console.log("Sunday"); break;
    default: console.log("Invalid week number");
}

problem 12 : Write a js program to input month number and print number of days in that month

let month = 1;

if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
    console.log(month + " month has 31 days.");
}
else if(month == 4 || month == 6 || month == 9 || month == 11){
    console.log(month + " month has 30 days.");
}
else if(month == 2){
    console.log(month + " month has 28 days.");
}
else{
    console.log("Invalid month.");
}

problem 13 : 

let physics = 85;
let chemistry = 90;
let biology = 92;
let maths = 94;
let computer = 88;
let totalMarks = physics + chemistry + biology + maths + computer;
let percentage = (totalMarks / 500) * 100;

if (percentage >= 90) {
    console.log("Grade A");
} else if (percentage >= 80) {
    console.log("Grade B");
} else if (percentage >= 70) {
    console.log("Grade C");
} else if (percentage >= 60) {
    console.log("Grade D");
} else if (percentage >= 40) {
    console.log("Grade E");
} else {
    console.log("Grade F");
}

problem 14:   
Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
For first 50 units Rs. 0.50/unit
For next 100 units Rs. 0.75/unit
For next 100 units Rs. 1.20/unit
For unit above 250 Rs. 1.50/unit
An additional surcharge of 20% is added to the bill


let units = 300;
let bill = 0;

if (units <= 50) {
    bill = units * 0.50;
} else if (units > 50 && units <= 150) {
    bill = units * 0.75;
} else if (units > 150 || units <= 250) {
    bill = units * 1.20;
} else {
    bill = units * 1.50;
}

bill += bill * 0.20; // Surcharge

console.log("Total electricity bill: Rs. " + bill);

*/