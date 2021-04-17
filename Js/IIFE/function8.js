/*=====================================================================================================
1. Write IIFE that replaces the first and the last element of the given array and prints out its
elements.
Input array: [4, 5, 11, 9]
Output array: [ 9, 5, 11, 4]
=====================================================================================================*/
var input=[4, 5, 11, 9];
    (function(array){
        var temp;

        temp=array[0];
        array[0]=array[array.length-1];
        array[array.length-1]=temp;

        console.log(array)
    })(input);

/*=====================================================================================================
2. Write IIFE that calculates the surface area of the given rectangle with sides a and b.
Input: 4 5
Output: 20 
=====================================================================================================*/

(function(a,b){
    console.log(a*b); 
})(4,5)

/*==================================================================
3.	Write IIFE that replaces all appearances of the letters m or M with * and returns the number of replacements. 
	Input: prograMming
	Output: progra**ing, 2
===================================================================*/

(function (a){
    var result = '';
    var counter = 0;
    for (var i=0; i<a.length; i++){
        if (a[i]=='m' || a[i]=='M'){
            result += '*'
            counter ++;
        }
        else {
            result += a[i];
        }
    }
    console.log (result + ', ' + counter)
})('prograMming')

/*==================================================================
4.	Write a function with parameters name and surname that returns a function that
suggests an email in the form name.surname@gmail.com.
Input: pera peric
Output: pera.peric@gmail.com
===================================================================*/


(function(a){
    var result="";
    for(var i=0;i<a.length;i++){
        if(a[i]==" "){
            result+=".";
        }else if(i===a.length-1){
            result +=a[i];
            result +="@gmail.com";
        }else{
            result+=a[i];
        }
    }
    console.log(result) 
})("nikola draganic")


/*==================================================================
5. Write a function that returns a function that calculates a decimal value of the given octal
number.
Input: 034
Output: 28
===================================================================*/

/*==================================================================
6.Write a function that checks if a given string is valid password. The password is valid if it
is at least 6 characters long and contains at least one digit. The function should receive
two callbacks named successCallback and errorCallback that should be called in case
password is correct or invalid.
Input: JSGuru
Output: Your password is invalid
===================================================================*/

// var a="JSGuru123";

// function password(a){
//    var result=""
//     for(var i=0; i<a.length;i++){
//         if(a.length>=6){
//             result="Password is ok";
//     }
//     return result
// }
// console.log(password(a))



