// Tasks for variables
// 1) Working with variables
let name, admin;
name = "John";
admin = name;
alert(admin);

// 2) Giving the right name
let ourPlanetName="Earth";
let currentUserName;

// 3) Uppercase const?
const BIRTHDAY = "18.04.1982";
const age = "" // some function on age;

//Tasks for Numbers
// 1) The postfix and prefix forms
let a = 1, b = 1;
let c = ++a; 
let d = b++; 
// a = 2, b = 2, c = 2, d = 1
// 2) Assignment result
let a2 = 2;
let x = 1 + ( a2 *= 2);
// a2 = 4, x = 5

// 3) Type conversions
"" + 1 + 0 // '10'
"" - 1 + 0 // -1
true + false // 1
6 / '3' // 2
'2' * '3' // 6
4 + 5 + 'px' // 9px
'$' + 4 + 5 // $45
'4' - 2 //2
'4px' - 2 // nan
' -9 ' + 5 // -9 5
' -9 ' - 5 // -14
null + 1 // 1
undefined + 1//NaN
' \t \n ' - 2 //-2 

// 4) Fix the addition
let a4  = prompt('First Number', 1);
let b4 = prompt('Second Number', 2);
alert(+a4 + +b4)

// Assignment
// 1
console.log(1+2);
// 2
console.log( 1 + 2 + 3 + 4 + 5 + 6);
// 3
console.log(((4+6+9) / 77 ).toFixed(5));
// 4
let assignment_a = 10;
console.log(assignment_a);
console.log(9 * assignment_a);
let assignment_b = 7*assignment_a;
console.log(assignment_b);
// 5
const MAX = 57;
let actual = MAX - 13;
let percentage = actual / MAX;
console.log(percentage.toFixed(4));