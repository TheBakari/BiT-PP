// 1. Write a function to check whether the `input` is a string or not.  podsetiti za primer za scope
// 'My random string' -> true
// 12 -> false
'use strict'
var strin=14;
function stringInput(){
     var result=""
    if(typeof strin==='string'){
        result='Ovo je string';
    }else if(typeof strin==="number"){
        result="ovo je broj";
    }
    else{
        result=false;
    }
    return result
   
}
console.log(stringInput(strin))

// 2. Write a function to check whether a string is blank or not.
// 'My random string' -> false
// " " -> true
// 12 -> false
// false -> false

'use strict'

function blank(nesto){
    var result="";
    if(nesto ===" "){
        result=true;
    }else{
        result=false;
    }
    return result
}
console.log(blank(" "))

//3. Write a function that concatenates a given string n times (default is 1).
// 'Ha' ->'Ha'
// 'Ha', 3 ->HaHaHa;
'use strict'
var string="Ha";
var result="Ha";
function str(a,b){
    for(var i= 1;i<b;i++){
        result +=a;
    }
    return result
}
console.log(str(string,3))

// 4.Write a function to count the number of letter occurrences in a string.
// 'My random string', 'n'-> 2
'use strict'
var inputString="My random stringgg";
var res="g";
function string(str){
    var brojac=0;
    for(var i=0;i<str.length;i++){
        if(str[i]==res)
        brojac ++
    }
    return brojac
}
console.log(string(inputString))
//primer 2
function string(str,proveru){
    var brojac=0;
    for(var i=0;i<str.length;i++)
    {
        if(str[i]==proveru)
        brojac ++
    }
    return brojac
}
console.log(string("My random stringgg","g"))

 // 5.Write a function to find the position of the first occurrence of a character in a string. The
// result should be the position of character. If there are no occurrences of the character, the
// function should return -1.
'use strict'
function occurrence(nesto){
    var ne = nesto.indexOf("z");
    return ne;
}
console.log(occurrence("nesto"))

function occurrences (a,b){
    var result;
    for (var i=0; i<a.length; i++){
        if (a[i]==b)  {
            result = i; break; 
        }
        else {
        result = -1;}
    }
    return result;
}
console.log(occurrences('Nikola','l'));

// 6. Write a function to find the position of the last occurrence of a character in a string. The
// result should be in human numeration form. If there are no occurrences of the character,
// function should return -1.

'use strict'
function occurrence(nesto){
    var ne = nesto.lastIndexOf("o") + 1;
    return ne;
}
console.log(occurrence("nesto"))

//primer 2

function occurrence (a,b){
    var result;
    for (var i=a.length; i>0; i--){
        if (a[i]==b){
            result = i+1; break;
        }
        else {
            result = -1;
        }
    }
    return result;
}
console.log (occurrence('Nilhsfhlkola','l'))


//7. Write a function to convert string into an array. Space in a string should be represented as
//“null” in new array.
// 'My random string'->["M","y",null,"r","a"]
//'Random'->[&quot;R&quot;, &quot;a&quot;, &quot;n&quot;, &quot;d&quot;, &quot;o&quot;, &quot;m&quot;]

function string(str){
    var arrayOf=[];
    for(var i=0; i<str.length;i++){
        var current=str[i];
        if(current===' '){
            arrayOf[arrayOf.length]=null;
        }else{
            arrayof[arrayOf.length]=current
        }
    }

    return arrayof
}
console.log(string("My random string"))

// 8. Write a function that accepts a number as a parameter and checks if the number is prime or
// not.
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
// divisors other than 1 and itself.
// program to check if a number is prime or not

  function isPrime(n){
      if(n<2){
          return false;
      }else if(n===2){
          return true;
      }
      for(var i=2;i<n;i++){
          if(n%i===0){
              return false;
          }
          else if(i===n-1){
              return true;
          }
      }
  }
  console.log(isPrime(7))

// 9.Write a function that replaces spaces in a string with provided separator. If separator is not
// provided, use “-” (dash) as the default separator.
// &quot;My random string&quot;, &quot;_&quot; -&gt; &quot;My_random_string&quot;
// &quot;My random string&quot;, &quot;+&quot; -&gt; &quot;My+random+string&quot;
// &quot;My random string&quot; -&gt; &quot;My-random-string&quot;
function strToArray (a,b){
    var result="";
    if(b===undefined) {
        b='-';
    }
    for (var i=0; i<a.length; i++){
        if (a[i]===" "){
            result+=b;
          
        }
        
        else {
            result+=a[i];
        }
    }
    return result;
}
console.log(strToArray('My random string'))


// 10. Write a function to get the first n characters and add “...” at the end of newly created string.
var newString = ""
function addString (a,b){
    for (var i=0; i<=b; i++)
           if (i<b){
                newString+=a[i];
           }
           else {
               newString+="..."
           }
    return newString;
}

console.log (addString('Nikola',3))

// 11 Write a function that converts an array of strings into an array of numbers. Filter out all
//non-numeric values.
// [&quot;1&quot;, &quot;21&quot;, undefined, &quot;42&quot;, &quot;1e+3&quot;, Infinity] -&gt; [1, 21, 42, 1000]
function convert(array){
    var result=[];
    for(var i=0;i<array.length;i++){
        var value=array[i];
        
        var isValid=isFinite(value);
        if(isValid){
            var number = parseFloat(value);
            result[result.length]=number
        }
    }
    return result

}
console.log(convert(['1', '21', undefined, '42', '1e+3', Infinity]))


// 12. Write a function to calculate how many years there are left until retirement based on the
// year of birth. Retirement for men is at age of 65 and for women at age of 60. If someone is
// already retired, a proper message should be displayed.

function penzija (g,p){
    if (g<65 && p==='m'){
        var result=65-g;
    }
    else if(g<60 && p==='z'){
        result = 60-g;
    }
    else {
        result = 'Enough';
    }
    return result;
}
console.log (penzija(40,'z'))

// 13. Write a function to humanize a number (formats a number to a human-readable string) with
// the correct suffix such as 1st, 2nd, 3rd or 4th.
// 1 -> 1st
// 11 -> 11th

function humanize(number) {
     
    switch(number % 10) {
        case 1: return number + "st";
        case 2: return number + "nd";
        case 3: return number + "rd";
    }
    
    return number + "th";
}
console.log(humanize(11));
console.log(humanize(2));
console.log(humanize(3));
console.log(humanize(4));


//primer function humanize(a) {
    function humanize(a) {
        var result = "";
        if (typeof a === "number") {
          a += "";
          for (var i = 0; i < a.length; i++) {
            if (a[a.length - 1] == 1 && a[a.length - 2] != 1) {
              result = a + "st";
            } else if (a[a.length - 1] == 2 && a[a.length - 2] != 1) {
              result = a + "nd";
            } else if (a[a.length - 1] == 3 && a[a.length - 2] != 1) {
              result = a + "rd";
            } else {
              result = a + "th";
            }
          }
        } else {
          result = "Not a number";
        }
        return result;
      }
      console.log(humanize(2123));