var f=function (a) {
    console.log(a);
}
f(1);
//Primer 2

var f;
var result="";

f =function (a) {
    return a+1;
}
result= f(1);
console.log(result);


//making_function_copy
//primer
var sum=function (a,b) {
    return a+b
}
var result=""
var add=sum;

console.log(typeof add);

result= add(2,3);

console.log(result)