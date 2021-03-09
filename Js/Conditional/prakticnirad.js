/*var s1='web';
var s2='site';
var s=s1+s2;
console.log(s);

var ss = s+11;
console.log(ss);

var num = 1;
//num++;
++num;
console.log(num);

var x=num++;
console.log(x);*/



/*var isSaturday = false;
var isAfternoon = true;
var message="";
if(isSaturday===true)
{
    message='We are at Bit';
    if(isAfternoon===true){
        message+='And we have PP.';
    }
    else
    {
        message+='And we have WEb.';
    }
}
else{
    message="we are not at Bit";
}*/

message=isSaturday===true? (isAfternoon===true ? 'We are at Bit and we are having PP': 'We are not at Bit and we are having WP'): 'we are not at bit';

console.log(message);

