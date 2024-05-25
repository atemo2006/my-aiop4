// Operators signify control over something
//      types of operators
// assignment:(=, +=, -=, /=, *=, *#=, %= )
var studentName = "atemo";
console.log(typeof(studentName));
// comparison: = !, ==, ===, !==, <, <=, >, >=
    // == is equal to
    // != is not equal to
    // === is identical
    // !== is not identical
    // < is less than
    // <= is  less than or equal to
    // > is greater than
    // >= is greater than or equal to
    var age = 20;
    console.log(`is 20 equal to 20: ${age == 20}`);
    console.log(`is 20 identical to 20 ${age === 20}`);
    console.log(`is 20 greater than 20 ${age > 20}`);
    console.log(`is 20 greater than or equal to 20 ${age >= 20}`);
    console.log(`is 20 lesser than 20 ${age < 20}`);
    console.log(`is 20 lesser than or equal to 20 ${age <= 20}`);
    console.log(`is 20 not equal to 20 ${age != 20}`);
    console.log(`is 20 not identical to 20 ${age !== 20}`);
// logical:(&&, ||)
// and will only be false when both are false
// or will only be true when both are true
var myName ='atemo';
var myAge = 45;
console.log("---------------------- and ------------");
console.log(myName=='atemo' && myAge==18);
console.log(myName=='luck' && myAge==20);
console.log(myName=="jamesbond"&& myAge==45);
console.log(myName=="rody" && myAge==17);
console.log("-------------------------- or ------------");
console.log(myName == "ryan" || myAge == 45);
console.log(myName == "groff" || myAge == 45);
console.log(myName == "jones" || myAge == 36);
console.log(myName == "brian" || myAge == 47);

// math: +, -, %, *, **, /
var num1 = 4;
var num2 = 2;
var add = num1+num2;
console.log(`addition of ${num1} + ${num2} = ${add}`);

var num3 = 5;
var num4 = 2;
var subtract = num3-num4;
console.log(`subtraction of${num3} - ${num4} = ${subtract}`);

var num5 = 20;
var num6 = 100;
var modulus = num5%num6;
console.log(`modulus of${num5} % ${num6} = ${modulus}`);

var num7 = 6;
var num9 = 3;
var exponent = num7**num9;
console.log(`exponent of ${num7} ** ${num9} = ${exponent}`);

var num8 = 6;
var num6 = 3;
var multiply = num8 * num6;
console.log(`multiplication of ${num8} * ${num6} = ${multiply}`);

var num10 = 6;
var num11 = 3;
var division = num10/ num11;
console.log(`division of ${num10} / ${num11} = ${division}`);

//  OR
/*
Using the same variable name on all statements makes it much easier to make corrections and can also be a shortcut to inputing your code faster.
var num1 = 6;
var num2 = 2;
var add = num1 + num2;
console.log(`addition of ${num1} + ${num2} = ${add}`);


var subtract = num1 - num2;
console.log(`subtraction of${num1} - ${num2} = ${subtract}`);


var modulus = num1 % num2;
console.log(`modulus of${num1} % ${num2} = ${modulus}`);


var exponent = num1 ** num2;
console.log(`exponent of ${num1} ** ${num2} = ${exponent}`);


var multiply = num1 * num2;
console.log(`multiplication of ${num1} * ${num2} = ${multiply}`);


var division = num1 / num2;
console.log(`division of ${num1} / ${num2} = ${division}`);
*/