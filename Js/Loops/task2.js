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
       console.log(e+"is in the array of numbers"+a)
    }
    else
        console.log("There is no given element in array a")
    
}

// 2.	Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]
var array=[-3, 11, 5, 3.4, -8];
var b = array.map(x => x * 2); // <-------

console.log(b);