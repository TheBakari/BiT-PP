/*
1.	Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A, E, I, O, and U. 
*/
var string = "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";


function vowels(string){
    var counter=0;
    for(var i=0; i<string.length; i++){
        if(string[i]=="a" || string[i]=="e" || string[i]=="i" || string[i]=="o" || string[i]=="u" || string[i]=="A" || string[i]=="E" || string[i]=="I" || string[i]=="O" || string[i]=="U"){
            counter ++;
        }
    }
    return counter;
}
var func=vowels(string)
console.log(func)


/*
2.	Write a function that combines two arrays by alternatingly taking elements.
[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]
*/

var array1 = ["a", "b", "c"];
var array2 = [1, 2, 3];

function combine(array1, array2){
    var newArray=[]
    for(var i=0; i<array1.length;i++){
        newArray[newArray.length]=array1[i];
        newArray[newArray.length]=array2[i];
    }
    return newArray
}
var func=combine(array1,array2)
console.log(func)

/*
3.	Write a function that rotates a list by k elements.
For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]
*/
var array=[1,2,3,4,5,6]
var n=2;
function rotatesArray(array,n){
    var newArray=[];
    for(var i=n,j=0;i<array.length+n;i++){
        if(i>=array.length){
            newArray[newArray.length]=array[j];
            j++
        }else {
            newArray[newArray.length]=array[i]
        }
    }
    return newArray
}

var func=rotatesArray(array,n)
console.log(func)


/* 4.	Write a function that takes a number and returns array of its digits  */

var num=12345;

function numb(num){
    var result=[];
    var digit;
    var string=""+num;

    for(var i=0; i<string.length;i++){
        digit=parseInt(string[i]);
        result[i]=digit
    }
    return result;
}

var func=numb(num);
console.log(func)


/*
5.	Write a program that prints a multiplication table for numbers up to 12.
*/
var num=12;
function multiplication(num){
    var string="";
    var sum=0;
    for(var i=1;i<=num;i++){
        for(var j=1;j<=num; j++){
            sum=i*j;
            string+=i+" * "+j+" = "+ sum+"\t\n";
        }
        string+="\n";
    }
    return string;
}
var func=multiplication(num)
console.log(func)

/*
6.	Write a function to input temperature in Centigrade and convert to Fahrenheit.
*/
var c=25;

function temperature(c){
    var result;
    var temp=(9*c/5)+32;
    result = c + "°C is " + temp + "°F";

  return result;
}

var func = temperature(c);
console.log(func);


/*
7.	Write a function to find the maximum element in array of numbers. Filter out all non-number elements.
*/
var array = [NaN, 0, 15, false, -22, '', undefined, 47, null, 75, 63 , 101];

function maxElement(array) {
  var string = "";
  var filteredNumbers = [];
  var max = -Infinity;
  var counter = 0;
  for(var i = 0; i < array.length; i++) {

    var num = parseFloat(array[i]);
    if(isFinite(num)){
      filteredNumbers[filteredNumbers.length] = num;
      if(filteredNumbers[counter] > max){
        max = filteredNumbers[counter];
      }
      counter++;
    }
      
  }
  string += "Filter with only numbers is: " + filteredNumbers + "\n";
  string += "Maximum number from filter is " + max;


  return string;
}

var func = maxElement(array);
console.log(func);

/* 8.	Write a function to find the maximum and minimum elements. Function returns an array.*/

var array = [1, 15, 21, 3, 84, 32, 4, 5];

function minMax(array){
    var min=array[0];
    var max=array[0];
    var newArray=[];
    for(var i=0; i<array.length;i++){
        if(array[i]<min){
            min=array[i]
        }
        if(array[i]>max){
            max=array[i]
        }
    }
    newArray[0]=min;
    newArray[i]=max;
    return newArray
}
var func=minMax(array)
console.log(func)


/* 9. Write a function to find the median element of array.*/

var array = [1, 15, 21, 75,136, 84, 32, 4, 5];


function median(array) {
  var result;
  for (var i = 0, j = array.length - 1; i < array.length; i++, j--) {
    if (array.length % 2 === 0) {
      if (i > j) {
        result = array[j] + 0.5;
        break;
      }
    }
    if (array.length % 2 !== 0) {
      if (i === j) {
        result = array[i];
        
      }
    }
  }

  return result;
}

var func = median(array);
console.log(func);

/*10.	Write a function to find the element that occurs most frequently. */

var array = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mf = 1;
var m = 0;
var item;

function frequent(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = i; j < array.length; j++) {
      if (array[i] == array[j]) {
        m++;
      }
      if (mf < m) {
        mf = m;
        item = array[i];
      }
    }
    m = 0;
  }
  return "The most frquent item is " + item;
}

var func = frequent(array);
console.log(func);

/*11.	Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. If number of elements is even, return just the first and the last. In other cases (empty array), input array should be returned.*/

var array = [1, 15, 21, 75, 84, 32, 4, 5, 198];

function firstMiddleLast(array) {
  var middleElement;
  var firstElemnt = array[0];
  var lastElement = array[array.length - 1];
  var newArray = [];

  if (array.length === 0) {
    return newArray;
  }

  if (array.length % 2 === 0) {
    newArray[newArray.length] = firstElemnt;
    newArray[newArray.length] = lastElement;
    return newArray;
  }
  
  if (array.length % 2 !== 0) {
    for (var i = 0, j = array.length - 1; i < array.length; i++, j--) {
      if (i === j) {
        middleElement = array[i];
        newArray[newArray.length] = firstElemnt;
        newArray[newArray.length] = middleElement;
        newArray[newArray.length] = lastElement;
        return newArray;
      }
    }
  }
}

var func = firstMiddleLast(array);
console.log(func);

/*12.	Write a function to find the average of N elements. Make the function flexible to receive dynamic number or parameters.*/

function average() {
    var sum = 0;
    var avg;
    for (i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    avg = sum / arguments.length;
    return avg;
  }
  
  var func = average(12, 15, 18, 120, -25, 3, 63);
  console.log(func);

  /*13.	Write a function to find all the numbers greater than the average.*/

  var array = [1, 2, 13, 11, 10, 12];


function average(array) {
  var newArray = [];
  var sum = 0;

  for (i = 0; i < array.length; i++) {
      sum += array[i];
  }

  var average = sum / array.length;

  for (j = 0; j < array.length; j++) {
      if (array[j] > average) {
          newArray[newArray.length] = array[j];
      }
  }

  return newArray;
}

var func = average(array);
console.log(func);

/*14.	The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters). Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:
●	Starvation: less than 15
●	Anorexic: less than 17.5
●	Underweight: less than 18.5
●	Ideal: greater than or equal to 18.5 but less than 25
●	Overweight: greater than or equal to 25 but less than 30
●	Obese: greater than or equal to 30 but less than 40
●	Morbidly obese: greater than or equal to 40*/

var height = 1.99;
var weight = 102;

function bodyMass(weight, height) {
  var bmi = weight / (height * height);
  var result = "";

  if (bmi < 15) {
    result = "Your BMI is " + bmi + ". Eat something, you are Starvation.\n";
  } else if (bmi >= 15 && bmi < 17.5) {
    result = "Your BMI is " + bmi + ". Eat something, you are Anorexic.\n";
  } else if (bmi >= 17.5 && bmi < 18.5) {
    result = "Your BMI is " + bmi + ". Can be better, you are Underwwight.\n";
  } else if (bmi >= 18.5 && 25 < 71) {
    result = "Your BMI is " + bmi + ". You are in good shape. Your BMI is Ideal\n";
  } else if (bmi >= 25 && bmi < 30) {
    result = "Your BMI is " + bmi + ". Slow down with food, you are Overweight.\n";
  } else if (bmi >= 30 && bmi < 40) {
    result = "Your BMI is " + bmi + ". Go to diet, you are Obese.\n";
  } else {
    result = "Your BMI is " + bmi + ". Please watchout and be very careful, you are Morbidly obese.\n";
  }

  return result;
}

var func = bodyMass(weight, height);
console.log(func);

/*
15.	Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:
For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
*********
* Hello *
* World *
* in    *
* a     *
* frame *
*/
var array = ["Hello", "World", "in", "a", "frame"];

function frame(array) {
  var limiter = 0;
  var frame = "";
  var inFrame = "";
  var string = "";

  for (var i = 0; i < array.length; i++) {
    if (array[i].length > limiter) {
      limiter = array[i].length;
    }
    inFrame += "* " + array[i] + " *" + "\n";
  }
  for (var j = 0; j < limiter + 4; j++) {
    frame += "*";
  }
  string = frame + "\n" + inFrame + frame;
  return string;
}

var func = frame(array);
console.log(func);
