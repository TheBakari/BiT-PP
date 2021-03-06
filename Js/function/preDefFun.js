 /*==================================================================
 1. Write a function that converts an array of strings into an array of numbers. Filter
  out all non-numeric values.
 Input: [&quot;1&quot;, &quot;21&quot;, undefined, &quot;42&quot;, &quot;1e+3&quot;, Infinity]
 Output: [1, 21, 42, 1000]
 ===================================================================*/

function convertStringsToBums(array){
    var trasnformedArray=[];
    //go

    for(var i=0;i<array.length;i++){
        var currentVale=array[i];
        //check if value is valid number
        var isValid=isFinite(currentVale);
        if(isValid){
            var number = parseFloat(currentVale);
            trasnformedArray[trasnformedArray.length]=number
        }
    }
    return trasnformedArray

}
console.log(convertStringsToBums(['1', '21', undefined, '42', '1e+3', Infinity]))
/*==================================================================
 2. Write a program to join all elements of the array into a string skipping elements
 that are undefined, null, NaN or Infinity.
 ===================================================================*/


var array = [NaN, 0, 15, false, -22, '', undefined, 47, null];

function convertArray(array) {
  var result = "";

  for (i = 0; i < array.length; i++) {
    if (isFinite(array[i]) && array[i] !== null) {
      result += array[i];
    }
  }
  return result;
}

console.log(convertArray(array));


/*==================================================================
3.	Write a program to filter out falsy values from the array.
	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
  Output: [15, -22, 47]
===================================================================*/
var array = [NaN, 0, 15, false, -22, '', undefined, 47, null];

function filter(array) {
  var newArray = [];

  for ( i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray[newArray.length] = array[i];
    }
  }
  return newArray;
}
console.log(filter(array)); 

/*==================================================================
4.	Write a program that calculates a number of integer values in the array.
	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
  Output: 3
===================================================================*/
var array = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];


function integerNumber(array) {
  var counter = 0;
  for (i = 0; i < array.length; i++) {
    var intNumber = parseInt(array[i]);
    if (isFinite(intNumber) && parseFloat(array[i]) === intNumber){
      counter++;
    } 
      

  }
  return counter;
}
console.log(integerNumber(array));

/*==================================================================
5.	Write a program that calculates a number of float values in the array.
	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
  Output: 2
===================================================================*/
var array = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];


function integerNumber(array) {
  var counter = 0;
  for (i = 0; i < array.length; i++) {
    var floatNumber = parseInt(array[i]);
    if (isFinite(floatNumber) && parseFloat(array[i]) !== floatNumber){
      counter++;
    } 
      

  }
  return counter;
}
console.log(integerNumber(array));