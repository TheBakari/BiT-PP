/*task 1
  Write a conditional statement to find the sign of product of three numbers. Display the result in the console with the specified sign.
  Sample numbers: 3, -7, 2 
  Output: The sign is - 
*/
var a=3;
var b=-7;
var c=2;
if(a * b * c <0)
{
    console.log("The sign is -");
}
else{
    console.log("The sign is +");
}

/*task 2
  Write a conditional statement to find the largest of five numbers. Display the result in the console.
  Sample numbers: -5, -2, -6, 0, -1 
  Output: 0  
*/
var a=-5;
var b=-2;
var c=-6;
var d=0;
var e=-1;
if(a > b && a > c && a > d && a > e){
    console.log("The largest number is: a=" + a);
}
else if(b > c && b > d && b > e){
    console.log("The largest number is: b=" + b);
}
else if(c > d && c > e){
    console.log("The largest number is: c=" + c);
}
else if(d > e){
    console.log("The largest number is: d=" + d);
}
else {
    console.log("The largest number is: e=" + e);
}
/*task 3
  Write a conditional statement to print three numbers as sorted number list.
  Sample numbers : 0, -1, 4 
  Output : 4, 0, -1 
*/
var a=0;
var b=-1;
var c=4;
if (a > b && a > b) {
    if (b > c) {
      console.log("Desceding array is: " + a + ", " + b + ", " + c);
    }
  }
  if (a > b && a > c) {
    if (c > b) {
      console.log("Desceding array is: " + a + ", " + c + ", " + b);
    }
  }
  if (b > a && b > c) {
    if (a > c) {
      console.log("Desceding array is: " + b + ", " + a + ", " + c);
    }
  }
  if (b > a && b > c) {
    if (c > a) {
      console.log("Desceding array is: " + b + ", " + c + ", " + a);
    }
  }
  if (c > a && c > b) {
    if (a > b) {
      console.log("Desceding array is: " + c + ", " + a + ", " + b);
    }
  }
  if (c > a && c > b) {
    if (b > a)
      console.log("Desceding array is: " + c + ", " + b + ", " + a);
  }
  /*task 4
  Write a program to check if the variable is a number and if it’s a number, check if it is divisible by 2. If it is, print the result, if not, show “X”.
  Sample input: 10                      Sample input: 7
  Output: 10 / 2 = 5                    Output: X  
*/
var a=7;
if( typeof a=="number" && a % 2 == 0 ){
    console.log ("Output: 10 / 2 = 5  ");
}
else
{
    console.log("Output: X  ");
}

/*task 5
  Write a program that compares two numbers and displays the larger. Display the result in the console. 
*/
var a=5;
var b=10;
if(a > b){
    console.log("Largetst number is: " + a)
}
else if(a === b)
{
    console.log("Numbers are equal")
}
else
{
    console.log ("Largest number is: " +b);
}
/*Task 6. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ] 
Sample Input: 60°C
	Output : 60°C is 140 °F
 */
var c = 60;
var a =(9*c/5+32);
console.log(c+"°C is "+ a +"°F");

/*task 7
  Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double difference between that number and 13.
  Sample Input: 11                  Sample Input: 32
  Output : 2                            Output : 38
*/

var a=13;
var b=32;
if(a < b)
{
    console.log(( b-a )*2);
}
else{
    console.log( a - b);
}
/*task 8
  Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
  Sample Input: 12,5                    Sample Input: 8,8
  Output : 17                 Output : 48
*/
var a=8;
var b=8;
if(a != b)
{
    console.log(a + b);
}
else{
    console.log((a + b)*3);
}
/*task 9
  Write a JavaScript program to check two given numbers and print “true” if one of the number is 50 or if their sum is 50.
  Sample Input: 5,54            Sample Input: 6,50          Sample Input: 40,10
  Output : -                      Output : true                 Output : true
*/
var a=25;
var b=25;
if(a + b == 50 || a===50 || b===50 )
{
    console.log(true);
}
else{
    console.log(false);
}
/*task 10
  Write a JavaScript program to check a given integer is within 20 of 100 or 400, and print range in which number belongs.
  Sample Input: 13          Sample Input: 34             Sample Input: 256
  Output : -                    Output : 20 ⇔ 100           Output : 100 ⇔ 400
*/
var a = 450;
if (a < 20) {
  console.log("Number " + a + " is smaller than 20");
} else if (a >= 20 && a <= 100) {
  console.log("Number " + a + " is in range betwwen 20 ⇔ 100");
} else if (a >= 100 && a <= 400) {
  console.log("Number " + a + " is in range betwwen 100 ⇔ 400");
} else {
  console.log("Number " + a + " is larger than 400");
}

  var a = -5;
  var b = 1;
  var c = 6;
  var d = 3;
  var e = -35;
  var max = a;
  if(b > max){
    max = b;
  }
  if(c > max){
    max = c;
  }
  if(d > max){
    max = d;
  }
  if(e > max){
    max = e;
  }
  console.log(max);