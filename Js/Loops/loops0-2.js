// 1.	Write a program that checks if a given element e is in the array a. 
// Input:  e = 3, a = [5, -4.2, 3, 7]
// Output: yes

// Input:  e = 3, a = [5, -4.2, 18, 7]
// Output: no
var e=3;
var a=[5,-4.2,3,7];
for(var i=0; i<a.length;i++)
{
    if(a[i]===e){
        result="yes";
        break;
    }
    else{
        result="No";
    } 
}
console.log(result);

// 2.	Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]
var array=[-3, 11, 5, 3.4, -8];
    for(var i=1;i<array.length;i++)
        if(array[i]>0){
        array[i]*=2;
         }

console.log(array);

//3  Write a program that finds the minimum of a given array and prints out its value and
// index.
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3
var c=[4, 2, 2, -1, 6];

var min=c[0];
var index=0
for(var i=0;i<c.length;i++){
     if (c[i] < min)
    {
        index=i;
        min=c[i];
    }
}
   
console.log(min+" Index of smallest number is: "+index);

// 4 Write a program that finds the first element larger than minimum and prints out its value. 
// Input array: [4, 2, 2, -1, 6] 
// Output: 2
var array=[4, 2, 2, -1, 6];
var min=array[0];

for(var i=0;i<array.length;i++){
     if (array[i] < min){
        index = i
        b = index -1;
        
    }
}
console.log(array[b])


// 5 Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16
var array=[3, 11, -5, -3, 2];
var sum=0;
    for(var i=0;i<array.length;i++){
         if(array[i]>0){
            sum+=array[i];
         }

    }
       
console.log(sum);

// 6 Write a program that checks if a given array is symmetric. An array is symmetric if it can
// be read the same way both from the left and the right hand side.
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.
var p = 0;
var array = [2, 4, -2, 7, -2, 4, 2];
for(var i = 0; i < array.length/2; i++){
    if(array[i] != array[array.length-1-i]){
        p = 1;
    }
}
if(p === 0){
    console.log("The array is symmetric");
} else{
    console.log("The array isn’t symmetric");
}

// 7.Write a program that intertwines two arrays. You can assume the arrays are of the same
// length.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]
var array1 = [4, 5, 6, 2];
var array2 = [3, 8, 11, 9];
var newArray = [];

for (var i = 0; i < array1.length; i++) {

  newArray[newArray.length] = array1[i];
  newArray[newArray.length] = array2[i];
  
}
console.log(newArray);

// 8.Write a program that concatenates two arrays.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]
var array1 = [4, 5, 6, 2];
var array2 = [3, 8, 11, 9];
for (var i = 0; i < array2.length; i++) {
  array1[array1.length] = array2[i];
}
console.log(array1);
  
// 9.Write a program that deletes a given element e from the array a.
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]

var a = [4, 6, 2, 8, 2, 2];
var e = 2;
var newArray = [];

for ( i = 0; i < a.length; i++) {

  if (a[i] !== e) {
    newArray[newArray.length] = a[i];
  }

}
console.log(newArray);

// 10.Write a program that inserts a given element e on the given position p in the array a. If
// the value of the position is greater than the array length, print the error message.
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]
var e = 78;
var p = 3;
var a = [2, -2, 33, 12, 5, 8];
var newArray = [];

if (p > a.length) {
  console.log("Error message!!");
} else {

  for (var i = 0; i < a.length; i++) {
    if (i === p) {
      newArray[newArray.length] = e;
      newArray[newArray.length] = a[i];
    } else {
      newArray[newArray.length] = a[i];
    }
  }
  console.log(newArray);
}