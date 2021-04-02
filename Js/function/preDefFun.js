//  1. Write a function that converts an array of strings into an array of numbers. Filter
//  out all non-numeric values.
// Input: [&quot;1&quot;, &quot;21&quot;, undefined, &quot;42&quot;, &quot;1e+3&quot;, Infinity]
// Output: [1, 21, 42, 1000]

function convertStringsToBums(array){
    var trasnformedArray=[];
    //go

    for(var i=0;i<array.length;i++){
        var currentVale=array[i];
        //check if value is valid number
        var isValid=isFinite(currentVale);
        if(isValid){
            var number = parseFloat(currentVale);
            trasnformedArray[trasnformedArray.length]=number
        }
    }
    return trasnformedArray

}
console.log(convertStringsToBums(['1', '21', undefined, '42', '1e+3', Infinity]))

// 2. Write a program to join all elements of the array into a string skipping elements
// that are undefined, null, NaN or Infinity.
