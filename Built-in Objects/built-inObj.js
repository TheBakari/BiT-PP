// Write a functional expression that duplicates each element of a given array.
// Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]


var array = [2, 4, 7, 11, -2, 1];

function duplicates (array) {
  var newArray = [];
  array.forEach (function (element) {
    newArray.push(element, element);
  });
  return newArray;
}

console.log(duplicates(array));



// Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13]


var array = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];

var newArray = array.filter(function(item, pos) {
  return array.indexOf(item) === pos;
});

function compareNumbers(a, b) {
  return a - b;
}

console.log(newArray.sort(compareNumbers));


// 3.
// a. Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true
    var array=[1,2,9,2,1]

    function odd(array){
        var newArray="";
            if(array.length%2 !==0){
                newArray=true
            }else{
                newArray=false
            }
        return newArray
    }

    console.log(odd(array))

// b. Write a function that counts the number of elements less than the middle
// element. If the given array has an even number of elements, print out an error
// message.
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

var array=[-1, 8.1, 3, 6, 2.3, 44, 2.11]

function middleElements (array) {
    var output;
    if(array.length % 2 === 0) {
      return "Array has even number od elements!!";
    } else {
      output =  array.length / 2 + 0.5;
      return output;
    }
    
  }

  console.log(middleElements(array));



//   Write a function that finds the smallest element of a given array. The function should
// return an object that contains the smallest value and its last position in the array.
// Input: [1, 4, -2, 11, 8, 1, -2, 3]
// Output: { minValue: -2, minLastIndex: 6 }
var array=[1, 4, -2, 11, 8, 1, -2, 3]
var copy=[...array]
function minValue(array){
    var minValue=Math.min(...array);
    var minLastIndex=array.lastIndexOf(minValue)
    return {minValue,minLastIndex}
}

console.log(minValue(array))

console.log(copy==array)


// 5.
// a. Write a function that finds all the elements in a given array less than a given
// element.
// Input: [2, 3, 8, -2, 11, 4], 6
// Output: [2, 3, -2, 4]
    var array=[2, 3, 8, -2, 11, 4];
    var element=6;

    function givenArray(array,element){
        var output=array.filter(function(number){
            return number<element;
        });
        return output;
    };
    console.log(givenArray(array, element));


// b. Write a function that finds all the elements in a given array that start with the “pro”
// substring. The function should be case insensitive.
// Input: [’JavaScript’, ’Programming’, ’fun’, ’product’]
// Output: [’Programming’, ‘product’]

var bArray = ["JavaScript", "Programming", "fun", "product"];
var string = "pro";

function  findString(array,string){
    var output=[]
    var sliceArray=array.slice();
    sliceArray=sliceArray.map(function(value){
        return value.toUpperCase();
    })
    for(var i = 0; i < array.length; i++) {
        if(sliceArray[i].slice(0, string.length) == string.toUpperCase()) {
          output.push(array[i]);
        }
    }
    return output
}

console.log(findString(bArray,string))


// c. Write a function that expects an array and a callback function that filters out
// some of the elements. Use functions defined in a) or b) to test it.
var arrayC = ["kaskader", "kaSkadno", "programer", "jezik"];


function filterC(array,value,f){
    return f(array,value)
}
var outputOne=filterC(arrayC, "kas", findString)

var outputTwo=filterC(array,4,givenArray)

console.log(outputOne)

console.log(outputTwo)

// a. Write a list (array) of products you usually buy in the supermarket. Write a price
// and name for each product. For example,
// [

// {name: ‘apples’, price: 100},
// {name: ‘milk’, price: 80},
// {name:’bananas’, price: 150}
// ]

// b. Write a function that calculates the total price of your shopping list.
// c. Write a function that calculates the average product price of your shopping list.
// Print this value with the precision of three decimals.
// d. Write a function that prints out the name of the most expensive product on your
// shopping list. Write the name in uppercase.

/* a task */
var productLists = [
    {name: "apples", price: 100}, 
    {name: "milk", price: 80}, 
    {name: "bananas", price: 150}
  ]
  
  /* b task */
  function getTotalPrice (params) {
    var sum = 0;
  
    for(var i in params) {
      sum += params[i].price;
    }
  
    return sum;
  };
  
  /* c task */
  function getAveragePrice (params) {
    var sum = 0;
  
    for(var i in params) {
      sum += params[i].price;
    }
  
    return sum / params.length;
  };
  
  /* d task */
  function getMostExpensive (params) {
  
    var expensive = params[0].price; 
  
    for(var i in params) {
      if(params[i].price > expensive) {
        expensive = params[i].price;
      }
    }
  
    return expensive;
  };
  
  console.log("Total price: " , getTotalPrice(productLists));
  console.log("Average price: ", getAveragePrice(productLists));
  console.log("Most expensive product: ", getMostExpensive(productLists));


//   a. Write a function that checks if a given string is written in all capitals.
// b. Write a function that checks if a given string contains any digits.
// c. Write a function that checks if a given string is a valid hexadecimal color.
// d. Write a function that checks if a given number belongs to the interval from 1900
// to 2018.
// e. Write a function named validator that returns an object with properties
// stringValidator, passwordValidator, colorValidator, and yearValidator referencing
// the functions from a) to d).

var string1 = "SomeString";
var string2 = "Bomb1na";
var string3 = "00FF00";

/* a task */
function allCapitals (value) {
  var output;
  var string1UpperCase = value.toUpperCase();
  if(string1UpperCase == value) {
    output = "String is written in all capitals";
  } else {
    output = "String isn't written in all capitals";
  }

  return output;
};

/* b task */
function checkIsDigit(params) {
  var input = params + "";
  var output;
  for (var i = 0; i < input.length; i++) {
    if (isFinite(parseInt(input[i]))) {
      output = "Contains digit!";
      break;
    } else {
      output = "No digit/s!";
    }
  }
  return output;
}

/* c task */
/* function ifHexadecimal(params) {
  var output;
  if(params.length !== 6)
  return output;
} */

console.log(allCapitals(string1));
console.log(checkIsDigit(string2));


// d. Write a function that checks if a given number belongs to the interval from 1900
// to 2018.
var string4 = '2017';
function isBetween (params) {
  var input = parseFloat(params);
  var output = '';
  if (params > 1900 && params < 2018){
    return output = 'Number is between 1900 and 2018.'
  }
  else {
    return output = 'Number is not between 1900 and 2018.'
  }
}
console.log (isBetween(string4));

// e. Write a function named validator that returns an object with properties
// // stringValidator, passwordValidator, colorValidator, and yearValidator referencing
// // the functions from a) to d).

function Valditor (stringValidator, passwordValidator, colorValidator, yearValidator){
  this.stringValidator = stringValidator;
  this.passwordValidator = passwordValidator;
  this.colorValidator = colorValidator;
  this.yearValidator = yearValidator;
}

var novi = new Valditor (string1, string2, string3, string4);

console.log(novi);


// 8. Write a function that calculates a number of days to your birthday.

// Input: 25 February
// Output: 5 days

var myBirthday, today, bday, diff, days;
myBirthday = [22,9]; // 6th of February
today = new Date();
bday = new Date(today.getFullYear(),myBirthday[1]-1,myBirthday[0]);
if( today.getTime() > bday.getTime()) {
    bday.setFullYear(bday.getFullYear()+1);
}
diff = bday.getTime()-today.getTime();
days = Math.floor(diff/(1000*60*60*24));
console.log(days+" days until my birthday!");

// Write a function that for a given departure and arrival time calculates the time the trip
// takes.
// Input: 8:22:13 11:43:22
// Output: 3 hours 21 minutes 9 seconds
function Time(hours, minutes, seconds) {
  this.hours = hours;
  this.minutes = minutes;
  this.seconds = seconds;
}

var currentTime = new Time (11,43,22);
var arrivalTime = new Time (8,22,13);
// var output = "";
// output += currentTime.hours - arrivalTime.hours + ":" + currentTime.minutes - arrivalTime.minutes;

var output = new Time (currentTime.hours - arrivalTime.hours, currentTime.minutes-arrivalTime.minutes, currentTime.seconds - arrivalTime.seconds);

console.log (output);



// 10.
// a. Write a constructor function that creates points in space. Each point in space has
// its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.
// b. Write a function that calculates the distance between two points in the space.

function Space(x,y,z) {
  this.x = x;
  this.y = y;
  this.z =z;
}

var spacePoint1 = new Space (3,5,1)
var spacePoint2 = new Space(2, 16, 8);

 function calculDistance(point1, point2) {
  return Math.sqrt(Math.pow((point1.x - point2.x), 2) + Math.pow((point1.y - point2.y), 2) + Math.pow((point1.z - point2.z), 2));
  // return "Distance between x and y is:" + betweenXandY +", between x and z is:" + betweenXandZ + " and between y and z is:" + betweenYandZ;
}

console.log(calculDistance(spacePoint1, spacePoint2));

// 11.
// a. Write a function that generates a random integer value between 5 and 20.
// b. Write a function that generates a random integer value between 50 and 100.
// c. Write a function which expects a number and a callback generator function and
// returns an array of numbers produced by the generator function.

  function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomInteger(5,20))

  function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomNumber(50,100))



function numb(num, generator){
  var newArray = [];
  for (var i = 0; i < num; i++) {
    newArray.push(generator(5, 20));
  }
  return newArray;
}

console.log(numb(5,randomInteger))

/*12. Write a function that shuffles the elements of a given array.
  
  Input: [3, 6, 11, 2, 9, 1]
  Output: [6, 2, 9, 1, 3, 11] (it can be any random permutation of the given array)*/

  function shuffle(array) {
    array.forEach(function (el, i) {
      var randomIndex = parseInt(Math.random() * array.length);
      var p = array[randomIndex];
      array[randomIndex] = array[i];
      array[i] = p;
    });
    return array;
  }
  
  console.log(shuffle([3, 6, 11, 2, 9, 1]));