// 1.	Write a program that checks if a given element e is in the array a. 
// Input:  e = 3, a = [5, -4.2, 3, 7]
// Output: yes
var element=function (a,e) {
var result="";
 for(var i=0;i<a.length;i++){ 
     if(a[i]===e){
         result="yes"
         break;
     }else{
         result="no";
     }
 }  
 return result 
}
console.log(element([5, -4.2, 3, 7],3))

// Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

var multiplies=function (array) {
    for(var i=1;i<array.length;i++)
        if(array[i]>0){
            array[i]*=2;
         }
     return array
}
console.log(multiplies([-3, 11, 5, 3.4, -8]))

// 3. Write a program that finds the minimum of a given array and prints out its value and
// index.
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3
    


var c=[4, 2, 2, -1, 6];


var mini=function (c) {
    var min=c[0];
    var index=0;
    var result="";
    for(var i=0;i<c.length;i++){
        if (c[i] < min)
        {
            index=i;
            min=c[i];
            result=index+", "+min;
        }
    }
    return result
    
   
}
console.log(mini([4, 2, 2, -1, 6]));

// 4.	Write a program that finds the second smallest number and prints out its value. 
// Input array: [4, 2, 2, -1, 6]
// Output: 2

var ss=function (a) {
    var min=a[0];
    for(var i=0;i<a.length;i++){
        if (a[i] < min){
           index = i
           b = index -1;
           
       }
   }return b
}
console.log(ss([4, 2, 2, -1, 6]))
//5.  Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16
'use strickt'
var sumP = function (a){
    var result=0;
    var current;
    for (var i=0; i<a.length; i++){
        if (a[i]>0){
            current = a[i];
            result += current;
        }
    }
    return result;
}
console.log (sumP([3, 11, -5, -3, 2]))

//6. Write a program that checks if a given array is symmetric. An array is symmetric if it can
// be read the same way both from the left and the right hand side.
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.
'use stict'
var sim = function (a){
    var result='';
    for (var i=0, j=a.length-1; i<a.length, j>0; i++, j--){
        if (a[i]===a[j]){
        result = 'The array is symetric';
        }
    else {
        result = 'Not symmetric';
    }
}
    return result;
}
console.log(sim([2, 4, -2, 7, -2, 4, 2]));

// 7.Write a program that intertwines two arrays. You can assume the arrays are of the same
// length.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]

var inter = function(a,b) {
    var newArray=[];
    for (var i = 0; i < a.length; i++) {

        newArray[newArray.length] = a[i];
        newArray[newArray.length] = b[i];
        
      }
      return newArray
}
console.log(inter([4, 5, 6, 2], [3, 8, 11, 9]))


 //8. Write a program that concatenates two arrays.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]
'use strickt'
var con = function (a,b){
    newArray=a;
    for (var i=0; i<b.length; i++){
        newArray[newArray.length] = b[i];
    }
    return newArray;
}
console.log (con([4, 5, 6, 2], [3, 8, 11, 9]))

 //9. Write a program that deletes a given element e from the array a.
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]
// Output array: [4, 6, 8]
'use strickt'
var del = function (a,e){
    var array = [];
    for (var i=0; i<a.length; i++){
        if (a[i]!==e){
            array[array.length] = a[i]; 
        }
    }
    return array;
}
console.log (del([4, 6, 2, 8, 2, 2],2))

// 10. Write a program that inserts a given element e on the given position p in the array a. If
// the value of the position is greater than the array length, print the error message.
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]
var ins = function (a,e,p){
if (p>a.length){
    console.log ('error');}
    else{
      for (i=a.length; i>p; i--){
          a[i]=a[i-1];
         }
      a[p]=e;
        }
  return a
}
console.log(ins([2, -2, 33, 12, 5, 8],78,3));