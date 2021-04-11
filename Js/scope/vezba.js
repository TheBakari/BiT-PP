var global = 2;
function myFunc() {
    local =3;
    return local;
}
myFunc(2,3);

console.log(global)


//orimer2
var global = 2;
function myFunc(x) {
    var global=3;
    console.log(global)
    return x+global;
}
 var result =myFunc(2);

console.log(result)


if(true){
    var a=6;
}
console.log(a);

var global=123;
function myFunc() {
    console.log(global);
    var global;
    global=1;
    console.log(global);
}

myFunc();