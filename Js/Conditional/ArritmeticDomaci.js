/*====================
Arithmetic operations
=====================*/

/* question 4
  Play around in the console: add, subtract, multiply and divide some numbers. Use numbers stored in variables you created as well. Think about expressions: 3-2-31, 3*5-7/3, 4/2-1.14*3. Why do we get these results? 
*/
var a = 3;
var b = 2;
var c = 31;
var d = 5;
var e = 7;
var f = 4;
var g = 1.14;
console.log(a - b - c);
console.log(a * d - e / a);
console.log(f / b - g * a);

/*question 5
  How many grams weight 1.2kg of bananas? 
*/
var a = 1.2;
console.log("There are " + a * 1000 + " grams in 1.2kg of bananas.");

/*question 6
  How many extra seconds we wait for our friend Anna who is being late for 5 minutes? What about Tom who is being late half an hour? It is hard to be on time these days…
*/
var a = 5;
var b = 30;
console.log("Anna is being late for " + a * 60 + " seconds.");
console.log("Tomm is being late for " + b * 60 + " seconds.");

/*question 7
  How many MB of additional memory we have if we buy a 4GB USB stick? How many news articles each in size 98KB can fit in it?
*/
var a = 4;
var b = a * 1024 * 1024;
console.log("There are  " + a * 1024 + "MB in 4GB USB stick.");
console.log(b / 98 + " news articles");

/*question 9
  Do you know any other way to write a = a * 2? How about: b = b + 3; c = c / 5; d = d - 7?
*/
var a = 4;
var b = 2;
var c = 3;
var d = 5;
a *= 2;
b += 3;
c /= 5;
d -= 7;

/*question 10
  Create the following variables:
    - a variable containing your name,
    - a variable containing your age,
    - a variable describing if you have a cat or not.
* Each variable has to start with a different type of character.
Print them all out in the console and check their types.

*/
var firstName = "Boris";
var age = 31;
var cat = true;
console.log(typeof firstName + " " + typeof age + " " + typeof cat);

/*question 11
  Check which type are these values:
    - “number”
    - true
    - null
    - “false”
    - 56

*/
var a = "number";
var b = true;
var c = null;
var d = "false";
var e = 56;
console.log(typeof a + " " + typeof b + " " + typeof c + " " + typeof d + " " + typeof e);

/*question 12
  Use the console to check the results you think should go in the following table:

*/
