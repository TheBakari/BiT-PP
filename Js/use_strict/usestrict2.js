
// 1.	Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

// "My random string", "JS " -> "JS My random string"
// "My random string", "JS ", 10 -> "My random JS string"


// 2.	Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

// [NaN, 0, 15, false, -22, '', undefined, 47, null]
var arr=[NaN, 0, 15, false, -22, " ", undefined, 47, null];
function join(arr){
    var result="";
    for(var i=0; i<arr.length;i++){
        var next=arr[i]
        if(next !=undefined && next !=Infinity && !isNaN(next))
            result +=next;
        
    }
    return arr;
}

console.log("Input: " +arr)
console.log(join(arr))

// 3.	Write a program to filter out falsy values from the array.

// [NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]

function filter(a){
    var arr=[];
    for(var i=0; i<a.length;i++){
        if(!!a[i]==false){
            continue;
        }else{
            arr[arr.length]=a[i]
        }
    }
    return arr
}
console.log(filter([NaN, 0, 15, false, -22, '', undefined, 47, null]))


// 4.	Write a function that reverses a number. The result must be a number.

// 12345 -> 54321 // Output must be a number


function reverse(array){
    var output = [];
    for (var i = array.length - 1; i> -1; i--){
        output.push(array[i]);
    }

    return output;
}

console.log(reverse([1,2,3,4,5]));

//primer 2
var num=12345
function reverse(a){
    var reversed=0;
    a+="";
    for(var i=a.length-1;i>=0;i--){
        reversed +=a[i];
    }
    return parseInt(reversed)
}
console.log(reverse(12345))


// 5.	Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

// [7, 9, 0, -2] -> -2
// [7, 9, 0, -2], 2 -> [0, -2]  

// function last(a,n) {
//     var result=[];
//     if(n===undefined) {
//         result=a[a.length-1];
//     }else {
//         for(var i = 0; i<a.length;i++) {
//             if(i>=n){
//               result[result.length]=a[i]
//         }
//     }
//  }
//    return result;
// }
// console.log(last([7, 9, 0, -2], 2))

function lastElOfArr(a,n) {
    var result=[];
    if(n===undefined) {
        result=a[a.length-1];
    } else { 
        for(var i = a.length-n; i<a.length; i++) {
                result[result.length]=a[i];
        }
    }
    return result;
} 
console.log(lastElOfArr([7, 9, 0, -2, 9, 8, 5], 3));

// 6.	Write a function to create a specified number of elements with pre-filled numeric value array.

// 6, 0 -> [0, 0, 0, 0, 0, 0]
// 2, "none" -> ["none", "none"]
// 2 -> [null, null] 

function arrOfSpecEl (n, x) {
    var newArr = [];
   
    for(var i = 0; i< n; i ++) {
        if(x === undefined) {
            x = null;
            newArr[newArr.length] = x;
        } else {
            newArr[newArr.length] = x;
        }
    }
    return newArr;
}
console.log(arrOfSpecEl(8));

// 7.	Write a function that says whether a number is perfect.

// 28 -> 28 is a perfect number.

// Note: According to Wikipedia: In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).

// E.g.: The first perfect number is 6, because 1, 2 and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: (1 + 2 + 3 + 6) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.


function perfect(n){
    for (var i=1;i<=n/2;i++){
        var sum=0;
        var res;
        if(n%i===0){
            sum=sum+i;
            //console.log(sum);
        }
    }
    if(n/2===sum){
        res=n+"is Perfect number";
    }else{
        res=n+"is not perfect number";
    }
    //console.log(sum);
    return res;
}
console.log(perfect(495))


// 8.	Write a function to find a word within a string.

// 'The quick brown fox', 'fox' -> "'fox' was found 1 times"
// 'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times"



// //9.	Write a function to hide email address.

// "myemailaddress@bgit.rs" -> "mye...@bgit.rs"
function hideMail(email){
    var hiddenMail ='';
    var firstThree='';
    var lastcharacters="";
    for(var i =0;i<3;i++){
        firstThree+=email[i];
    }
    for(var i=0;i<email.length;i++){
        if(email[i]==="@"){
            var pos=i;
            for(var i=pos;i<email.length;i++){
                lastcharacters+=email[i];
            }
        }
    }
    hiddenMail=firstThree +"..."+lastcharacters;
    return hiddenMail
}
console.log(hideMail("myemailaddress@bgit.rs"))


// 10.	Write a program to find the most frequent item of an array.

// [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]

function freq(a){
    var karakter="";
    var numApp=0;
    for(var i=0;i<a.length;i++){
        var tempChar=a[i];
        var tempNumOfApp=0
        for(var j=0;j<a.length;j++){
            if(tempChar===a[j]){
                tempNumOfApp++
            }
        }
        if(numApp<tempNumOfApp){
            numApp=tempNumOfApp;
            karakter=tempChar
        }
    }
    return karakter+" "+numApp
}
console.log(freq([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]))