// Write IIFE that replaces the first and the last element of the given array and prints out its
// elements.
// Input array: [4, 5, 11, 9]
// Output array: [ 9, 5, 11, 4]

(function (element){

    var indexOfFirstElement=0;
    var indexOfLastElemend= element.length-1;
    
    var tmp=element[indexOfFirstElement];
    element[indexOfFirstElement]=element[indexOfLastElemend]
    element[indexOfLastElemend]=tmp;
    console.log(element)
})([4, 5, 11, 9])


// 2. Write IIFE that calculates the surface area of the given rectangle with sides a and b.
// Input: 4 5
// Output: 20

var rectangle=(function(a,b){
    return a*b
}(4,5))

console.log(rectangle)

// 3. Write IIFE that replaces all appearances of the letters m or M with * and returns the
// number of replacements.
// Input: prograMming
// Output: progra**ing, 2

var appearances =(function(a){
    var trasnform="";
    var counter=0;
    for(var char in a){
        if(a[char].toLocaleLowerCase() !== "m"){
            trasnform+=a[char];
            continue;
        }
        trasnform+="*";
        counter++
    }
    return trasnform+", "+counter
})("prograMming")
console.log(appearances)

// Write a function with parameters name and surname that returns a function that
// suggests an email in the form name.surname@gmail.com.
// Input: pera peric
// Output: pera.peric@gmail.com

var email=function(name,surname){
    return function(){
        return name+ "."+surname+"@gmail.com";

    }
};

var suggested=email("nikola","draganic");
var suggestedEamil=suggested();
console.log("suggested email: ",suggestedEamil)



// Write a function that returns a function that calculates a decimal value of the given octal
// number.
// Input: 034
// Output: 28
var getOcatalNumber=function(){
    function isOctalNumber(number){
        return number[0]==="0";
    }
    function convert(number){
        var decimal=0;

        for(var i=number.length-1;i >= 1 ;i--){
            decimal +=8 ** (number.length-1-i)*parseInt(number[i])
        }
        return decimal;
    }

    return function(value){
        if(!isOctalNumber(value)){
            return 0;
        }
        return convert(value)
    }
    

};
var octalToDec=getOcatalNumber();
var decimalValue=octalToDec("034")
console.log("Decimal value: ",decimalValue)


// Write a function that checks if a given string is valid password. The password is valid if it
// is at least 6 characters long and contains at least one digit. The function should receive

// two callbacks named successCallback and errorCallback that should be called in case
// password is correct or invalid.
// Input: JSGuru
// Output: Your password is invalid!
// Input: JSGuru123
// Output: Your password is cool!

var password=function(password,success,error){
    success=success||function(){};
    error=error || function(){}
    function isPasswordValid(password){
        if (typeof password !=="string"||password.length < 6){
            return false
        }

        for(var i in password){
            if(isNumeric(password[i])){
                return true
            }
        }
        return false
    }
    function isNumeric(n){
        return !isNaN(parseFloat(n)) && isFinite(n)
    }
    return isPasswordValid(password)
        ? success()
        : error()
}
password("Nikola123", function(){console.log("your password is valid")},
function(){console.log("Your password is invalid")}
)

// 7. Write a function that filters elements of the given array so that they satisfy a condition
// given by the callback function.
// Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
// Output: [11, 9, 3]

var filter=function(elements,conditionChecker){
    if(typeof conditionChecker!=="function"){
        return elements
    }

    var filterColection=[]

    for(var index in elements){
        if(!conditionChecker(elements[index])){
            continue
        }
        filterColection[filterColection.length]=elements[index];
    }
    return filterColection
}
var filteredArray = filter(
    [23, 5, 7, 42, 12],
    function(elements){ return elements >= 20; }
);
console.log(filteredArray)