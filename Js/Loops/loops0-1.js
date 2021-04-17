/**1. Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current
number is odd or even, and display a message to the screen. */

for(var i=0; i<15;i++)
{
    if(i % 2 ===0){ 
        console.log( i + " Number is even");
    }
    else {
        console.log(i + " Number is  odd")
    }
}

/** 2 Write a program to sum the multiples of 3 and 5 under 1000.*/
    var sum=0;
    for(var i=0; i < 1000; i++){
        if(i%3===0 && i%5===0)
        {
            sum = sum +i;
        }
    }
    console.log(sum);


/** 3 Write a program to compute the sum and product of an array of integers.*/
var array = [1, 2, 3, 4, 5, 6],
    s= 0;
    p= 1;
    
for (var i=0; i<array.length;i+=1)  {
    s += array[i]; 
    p *= array[i]
    }
console.log('Sum : '+s+'Product: '+p );

/** 4 Write a program which prints the elements of the following array as a single string.
var x = [&#39;1&#39;, &#39;A&#39;, &#39;B&#39;, &quot;c&quot;, &quot;r&quot;, true, NaN, undefined]; */
//For petlja
var array = ['1','A','B',"c","r",true, NaN, undefined];
var result='\n'
 for ( var i=0; i<array.length; i++){
     result += array[i]+", "
     
 }console.log(result)
// for i in petlja
 var x = ["1", "A", "B", "c", "r", true, NaN, undefined];
var string = "";
for (i in x) {
  string += x[i];
}
console.log("String of all elements in array x is: " + string);
/** 5 Write a program that prints the elements of the following array.
var a = [

[1, 2, 1, 24],
[8, 11, 9, 4],
[7, 0, 7, 27]
]; */
var a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
    ];
for( var i in a)
{
    console.log("row"+ i)
    for(var j in a[i])
    {
        console.log(" "+a[i][j])
    }
}

//Primer 2
var a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
    ];
var result="";
for(var i=0;i<a.length;i++){
    var currentElem =a[i];
   for(var j=0;j<currentElem.length; j++){
       var currentValue= currentElem[j];
      result = result + currentValue + '\t';
   }
   result = result + "\n";
}
console.log(result);

/**6  Write a program that outputs the sum of squares of the first 20 numbers.*/
for (i = 0; i <= 20; i++) {
    var square = i * i;
    console.log("Number " + i + " square " + square + " Sum squares is " + (square + square) + "\n");
  }

// // 7. Write a program that computes average marks of the following students. Then use this
// average to determine the corresponding grade.

// David 80
// Marko 77
// Dany 88
// John 95
// Thomas 68
// The grades are computed as follows :

// &lt; 60% F
// &lt; 70% D
// &lt; 80% C

// &lt; 90% B
// &lt; 100% A

var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

var Avgm=0;
for (var i=0;i<students.length;i++)
{
    Avgma += students[i][1];
    var avg = (Avgm/students.length);
}
console.log("Avg grade"+ Avgm/students.length)
    if(avg<60){
        console.log("Grade: F")
    }
    else if(avg<70){
        console.log("Grade: D")
    }
    else if(avg<80){
        console.log("Grade is C")
    }
    else if(avg<90){
        console.log("Grade is B")
    }
    else if (avg < 100) {
        console.log("Grade : A");
    }



/**8. Write a program that uses console.log to print all the numbers from 1 to 100, with two
exceptions. For numbers divisible by 3, print &quot;Fizz&quot; instead of the number, and for numbers
divisible by 5 (and not 3), print &quot;Buzz&quot; instead. When you have that working, modify your
program to print &quot;FizzBuzz&quot;, for numbers that are divisible by both 3 and 5 (and still print
&quot;Fizz&quot; or &quot;Buzz&quot; for numbers divisible by only one of those). */
// make a loop that goes from 1 to 100
for ( var num = 1; num < 101; num ++ ) {
    var checkForThree = num % 3;
    var checkForFive = num % 5;
    
    if ( (checkForThree == 0) && (checkForFive == 0) ) 
        console.log( "FizzBuzz");
    else if (checkForThree == 0)
      console.log( "Fizz");
    else if (checkForFive == 0)
      console.log( "Buzz");
    else
      console.log( num );
  } 