//1. Write a program that calculates the maximum of two given numbers.
function sum(a,b){
   var c=a+b;
   return c;
}
var sumRes=sum(5, 10)
console.log(sumRes)

//2.Write a program that checks if a given number is odd.
function odd(sum){
    
    if(sum%2===0){
        return false;
    }else{
        return true;
    }
}
console.log(odd(7))

//3.Write a program that checks if a given number is a three digit long number.
function three(digit){
    var brojac=0;
   while(digit>=1){
       digit=digit/10;
       brojac++;

   }
   return brojac;
}
console.log(three(12131230))

//4 Write a program that calculates an arithmetic mean of four numbers.
var array=[1,2,3,4]
var sum=0;
function arit(array){
    for(var i=0;i<array.length;i++){
       sum += array[i] 
       
 }
    sum/=array.length
 return sum
}
console.log(arit(array))
//primer 2
function avg(a,b,c,d){
     var sum=a+b+c+d
    var result= sum/4;
    return result;
}
console.log(avg(1,2,3,4))

// //5Write a program that draws a square of a given size. For example, if the size of square
// is 5 the program should draw:
// *****
// * *
// * *
// * *
// *****
function drawSquare(n){
    var square ="";
    for(var row =0; row < n; row++){
        for(var col = 0; col < n; col++){
            if(row === 0 || row === n - 1){
                square +="* ";
            }else if(col===0 || col === n - 1){
                square+="* ";
            }else{
                square +="  ";
            }
        }
        square+='\n';
    }
     return square;   
}

var draw = drawSquare(5);
console.log(draw);



// //6Write a program that draws a horizontal chart representing three given values. For
// example, if values are 5, 3, and 7, the program should draw:
// * * * * *
// * * *
// * * * * * * *

    function horisontalChart(x,y,z){
        var chart="";
        numOfArgs=arguments.length;

        for(var j=0;j<numOfArgs; j++){
            for(var i=0;i<arguments[j];i++){
                chart +='*';
            }
            chart+="\n";
        }
        return chart;
    }
   var result= horisontalChart(5, 3,7)
   console.log(result)

//7. Write a program that calculates a number of digits of a given number.
function digits(n) {
    var brojac = 0;
    if (n >= 1) ++brojac;{
            while (n / 10 >= 1) {
            n /= 10;
            ++brojac;
         }
        
    }
    return brojac;
  }
  console.log(digits(12345));
  

// //8Write a program that calculates a number of appearances of a given number in a given
// array.
// Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
// Result: 3
var array=[2, 4, 7, 8, 7, 7, 1,7];
var e=7
function numbers(array,e){
    var brojac=0;
    for( var i=0;i<array.length;i++){
        if(array[i]===e){
            brojac ++

        }

    }
    return brojac
}

console.log(numbers(array,e))




//9 Write a program that calculates the sum of odd elements of a given array.

function odd(a){
    for(var i=0; i<a.length;i++){
        if(a[i]%2>0){
            sum+=a[i];
        }
    }
    return sum;
}
var a=[1,2,3,4,5]
var sum=0;
console.log(odd(a));

//10. Write a program that calculates the number of appearances of a letter a in a given string.
// Modify the program so it calculates the number of both letters a and A.

var inputString="This is progrAm that has A letter in it aaa";
var res=0;
function string(str){
    var brojac=0;
    for(var i=0;i<str.length;i++){
        if(str[i]=='a'||str[i]=='A')
        brojac ++
    }
    return brojac
}
console.log(string(inputString))

//primer 2
function numOfAInString(string,lowLetter,capLetter){
    var charCounter=0;
    for(var i=0;i<string.length;i++){
        currentChar=string[i]
        if(currentChar==lowLetter|| currentChar===capLetter){
            charCounter++;
        }
    }
    return charCounter;
}
console.log(numOfAInString("blablaAA",'b',"A"))

// //11.Write a program that concatenates a given string given number of times. For example, if
// “abc” and 4 are given values, the program prints out abcabcabcabc.

var string="abc";
var result="";
function str(a,b){
    for(var i= 1;i<b;i++){
        result +=a;
    }
    return result
}
console.log(str(string,4))

//Primer 2
function concat(string,repeNum){
    var newString="";
    for(var i=0;i<repeNum;i++){
        newString=newString+string;
    }
    return newString;
}
console.log(concat('bla ',2))