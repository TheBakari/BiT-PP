/*==================================================================
1.	Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A, E, I, O, and U. 
===================================================================*/
var string = "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";


function vowels(string){
    var counter=0;
    for(var i=0; i<string.length; i++){
        if(string[i]=="a" || string[i]=="e" || string[i]=="i" || string[i]=="o" || string[i]=="u" || string[i]=="A" || string[i]=="E" || string[i]=="I" || string[i]=="O" || string[i]=="U"){
            counter ++;
        }
    }
    return counter;
}
var func=vowels(string)
console.log(func)


/*==================================================================
2.	Write a function that combines two arrays by alternatingly taking elements.
[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]
===================================================================*/

var array1 = ["a", "b", "c"];
var array2 = [1, 2, 3];

function combine(array1, array2){
    var newArray=[]
    for(var i=0; i<array1.length;i++){
        newArray[newArray.length]=array1[i];
        newArray[newArray.length]=array2[i];
    }
    return newArray
}
var func=combine(array1,array2)
console.log(func)

/*==================================================================
3.	Write a function that rotates a list by k elements.
For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]
===================================================================*/
