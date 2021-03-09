//PRAKTICAN RAD 2 LIVE SESION
//Write a program that compares two numbers and display the larger. Result should be displayed in the console.
var result="";
var num1=21;
var num2=7;
if(num1>num2){
    result='Number '+num1+' is larger then '+num2;
}else if(num2>num1)
{
    result='Number '+num2+' is larger then '+num1;
}else
{
    //console.log("Numbers are even");
    result="Numbers are even";
}

console.log(result);

// Write a program to check if the
// number is divisible by 2. If it
// is, print even, if not, print
// odd.

// Sample numbers: 3, 4, 9 (check one at the time)

// Output: odd, even, odd

var num =3;
var num1=4;
var num2=9;
if(num%2===0)
{
    console.log("Even");
}else
{
    console.log("odd");
}

// Write a program to check if the
// number is divisible by 3 and 5.
// If it is, print that number.

// Sample numbers: 15, 12 (check one at the time)

// Output: 15

var broj=25;

if(broj % 3 === 0 && broj % 5 === 0){
    console.log(broj+'is divisible by 3 and 5');
}else if(broj%3===0){
    console.log('The number is divisible by 3 but not with 5');
}
else if (broj%5===0){
    console.log('The number is divisible by 5 but not with 3');
}else{
    console.log(broj+'is not divisible by 3 and 5')
}