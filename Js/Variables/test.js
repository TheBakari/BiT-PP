//If the variable age stores the information about user’s age, how we can check whether it contains a correct value? Write expressions for checking:
//Is age negative value
//Is age greater than 120

var age = 21;

var isNegative = age < 0;
var isGreaterThen120 = age > 120;

//var isInRange = age < 0 && age > 120;
var isInRange = isNegative && isGreaterThen120;

//console.log(age < 0);
//console.log(age > 120);
//console.log(isInRange);

//ZADATAK
var lowest = 60;
var highest = 120;

var brzina = lowest < 80;
var brzinaDva = highest >130;

var resenje = brzina && brzinaDva;

//console.log(resenje);

var n = 0377;
console.log(typeof n);
console.log( n);

