// 1.	Find the min and max element in the following array and switch their places. Print out the modified array in the console.
// Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
// Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]
var min;
var max;

function arrayMin(arr) {
    var i = arr.length, min = Infinity, indexOfMin;
    while (i--) {
      if (arr[i] < min) {
        min = arr[i];
        indexOfMin=i;
      }
    }
    return [min,indexOfMin];
  };
  
  function arrayMax(arr) {
    var i = arr.length, max = -Infinity, indexOfMax;
    while (i--) {
      if (arr[i] > max) {
        max = arr[i];
        indexOfMax=i;
      }
    }
    return [max,indexOfMax];
  };
function switchPlace(array) {
    var minData= arrayMin(array);
    var maxData= arrayMax(array);
    array[minData[1]]=maxData[0]
    array[maxData[1]]=minData[0]
    return array;
}

  console.log(switchPlace([ 3, 500, 12, 149, 53, 414, 1, 19 ]))

  


2. // Use the following array to make a new one by dividing its values by two and adding 5. If a given element's value is 0, change it to 20.
// Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
// Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]
function div (a){
    var newArray=[];
    var currentValue;
    for (var i=0; i<a.length; i++){
        currentValue = a[i]/2+5;
        if (currentValue===0){
            newArray[newArray.length]=20
        }
        else {
            newArray[newArray.length]=currentValue;
        }
    }
    return newArray;
}
console.log (div([ 3, 500, -10, 149, 53, 414, 1, 19 ]))




3. // Initialize two arrays. The first one should contain student names, the second one the number of points for each student. Display students' names with their corresponding grade. Use the following ranges:
// 51-60 -> 6,
// 61-70 -> 7,
// 71-80 -> 8,
// 81-90 -> 9,
// 91-100 -> 10.
// Input: 
// [ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
// Output: 
// Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.
function exam (n,a){
    var result = '';
    var points = 0;
    for (var i=0; i<a.length; i++){
        if (a[i]<51) {
            result +=n[i] + ' acquired ' + a[i] + ' points and failed to complete the exam. '
        }
        else if (a[i]>50 && a[i]<61){
            result += n[i] + ' acquired ' + a[i] + ' points and earned 6. '
        }
        else if (a[i]>60 && a[i]<71){
            result += n[i] + ' acquired ' + a[i] + ' points and earned 7. '
        }
        else if (a[i]>70 && a[i]<81){
            result += n[i] + ' acquired ' + a[i] + ' points and earned 8. '
        }
        else if (a[i]>80 && a[i]<91){
            result += n[i] + ' acquired ' + a[i] + ' points and earned 9. '
        }
        else if (a[i]>90 && a[i]<101){
            result += n[i] + ' acquired ' + a[i] + ' points and earned 10. '
        }
    }
    return result;
}
console.log (exam([ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]))



//4. (skip :))Sort a previously defined array. Place its sorted values into a new array whose
// values are equivalent to the first array&#39;s values multiplied by 2.
// Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]

var array = [13, 11, 15, 5, 6, 1, 8, 12];

function switchPlaces(array) {
  
  for (var i = 1; i < array.length; i++) {
    for (var j = 0; j < i; j++) {
      if (array[i] < array[j]) {
        var x = array[i];
        array[i] = array[j];
        array[j] = x;
      }
    }
  }

  for(var i = 0; i < array.length; i++) {
    array[i] = array[i] * 2;
  }


  return array;
}

var func = switchPlaces(array);
console.log(func);
// 5.	(skip :))Sort a previously defined array in a descending order and display it in the console.
// Input:  [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]
var array = [ 13, 11, 15, 5, 6, 1, 8, 12 ];

function descArray(array) {
  
  for (var i = 1; i < array.length; i++) {
    for (var j = 0; j < i; j++) {
      if (array[i] > array[j]) {
        var x = array[i];
        array[i] = array[j];
        array[j] = x;
      }
    }
  }


  return array;
}

var func = descArray(array);
console.log(func);
// 6.	Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then be multiplied by 12.5 and displayed in console.
// Output: 2350000
function subsum (a){
    var b=0;
    var c=0;
    result=0;
    result1=0;
    for (a=0;a<=1000;a++){
        if (a%2===0){
            b+=a;
        }
        if (a<=500 && a%2!==0){
            c+=a;
        } result=b-c;
            result1=result*12.5
    }
    return result1;
}
console.log (subsum(0))

// 7.	Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and create a new string from them. Print it out in the console.
// Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]

// Output: AnStJoJoDaMa
var array = [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ];
function letterString(array) {
    var result = "";
    for (var i = 0; i < array.length; i++) {
      if(typeof array[i] === "string" && array[i].length >= 2 ) {
        result += array[i][0] + array[i][1];
      }
    }
  
    return result;
  }
  
  var func = letterString(array);
  console.log(func);



// 8.	Write a program that takes a string and prints its characters out in reversed order in the console.
// Input:  Belgrade Institute of Technology
// Output: ygolonhceT fo etutitsnI edargleB

function reverseString(string){
    var reversed = '';
    
    for (var i = string.length -1; i >=0; i--){
      reversed += string[i];
    }
    return reversed;
  }
  console.log(reverseString('Belgrade Institute of Technology'));

// 9.	Write a program that displays all the combinations of two numbers between 1 and 7. Don't display two of the same numbers at the same time. Display the number of possible combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).
function combination() {
    var array = [];
    var sum = 0;
    for (var i = 1; i <= 7; i++) {
      for (var j = 1; j <= 7; j++) {
        if (i !== j){
          array[array.length] = [i,j];
          sum++;
        }
      }
    }
    array[array.length] = sum;
    return array;
  }
  
  var func = combination();
  console.log(func);
// 10.	Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
// Input:  17    | 15
// Output: true  | false

var num = 17;

function prime(num) {
  var string = "";
  if (num > 1) {
    if (num !== 2) {
      for (i = 2; i < num; i++) {
        if (num % i === 0) {
          string = "Number is not prime";
          break;
        } else {
          string = "Number is prime";
        }
      }
    } else {
      string = "Number is prime";
    }
  } else {
    string = "Number is lower than 2. Please type number greather than 1";
  }
  return string;
}
console.log(prime(num));
	
// 11.	Check if a given string is a palindrome (spaces are ignored).
// Input:  eye  | Geek  | a nut for a jar of tuna
// Output: true | false | true
var string = "a nut for a jar of tuna";

function reversedString(string) {
  var stringAsc = "";
  var stringDesc = "";
  for (var i = string.length - 1, j = 0; i >= 0, j < string.length; i--, j++) {
    if (string[i] !== " ") {
      stringDesc += string[i];
    }
    if (string[j] !== " ") {
      stringAsc += string[j];
    }
  }

  if (stringAsc == stringDesc) {
    return true;
  } else {
    return false;
  }
 
}

var func = reversedString(string);
console.log(func);
// 12.	Write a program that calculates the greatest common divisor of two integers. Note: The greatest common divisor of two non-zero integers is the greatest positive number that divides both numbers with no remainder.
// Input:  192 42 | 81 9
// Output: 6      | 9

var a = 192;
var b = 42;

function commonDivisor(a, b) {
  var divisor;
  while (a !== b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }
  divisor = a;

  return divisor;
}

var func = commonDivisor(a, b);
console.log(func);
