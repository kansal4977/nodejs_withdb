//filter function
const age=[23,45,67,12,34,14]
const result=age.filter(chkage)
function chkage(a)
{
    return a>20
}

console.log(result)

//different ways to define functions in js

//1st way to define a function
function add1(a,b)
{
    return a+b;
}
console.log("add1 function call-" + add1(5,7))

//2nd way to define a function
var add2=function(a,b)
{
    return a+b;
}
console.log("add2 function call-" + add2(15,7))

//3rd way to define a function-call back function
var add3=(a,b) => {return a+b;}
console.log("add3 function call-" + add3(5,27))
//4th way to define a function-call back function
var add4=(a,b) => a+b;
console.log("add4 function call-" + add4(55,7))

