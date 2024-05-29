
var a = 5
a++
console.log(a)
var b = 5
b--
console.log(b)
// loop is also called intration
// there are four types of loops:while, do while, for, for each
/*
for syntax
for (start, condition, increment/decrement){
    output;
}
note: ++ is increment
    -- is decrement
    i is the variable it is usually used to reduce the amount of content added
    the entire statement(var i = 0;) is the start.
    the entire statement(var i <= 10;) is the condition.
    the entire statement(var i <= 10;) is the condition.
*/
/*
var greeting = 'how are you';
console.log(greeting)
var greeting = "how are you";
console.log(greeting);
var greeting = "how are you";
console.log(greeting);
var greeting = "how are you";
console.log(greeting);
var greeting = "how are you";
console.log(greeting);
var greeting = "how are you";
console.log(greeting);
var greeting = "how are you";
console.log(greeting);
var greeting = "how are you";
console.log(greeting);
var greeting = "how are you";
console.log(greeting);
var greeting = "how are you";
console.log(greeting);
*/
//           OR
for (var i = 0; i <= 10; i++) {
    console.log(`${i}. How are you?`);
}
for (var i = 2; i <20; i+=5) {
    console.log(i);
}
var x = " we are learning";
for (var i = 0; i < 16; i++){
    console.log(x[i].toUpperCase());
}

/*
      While loop syntax
  start
  while(condition){
    output
    increment/decreament
  }
*/
console.log("----while loop---");
var i = 0;
while(i <= 23){
  console.log(i);
  i++;
}

console.log("----while loop2---");
var y = "John is a program";
var i = 0;
while(i < 17){
  console.log(y[i].toUpperCase());
  i++;
}
console.log("----for loop descending---");
for (var i = 10; i >= 0; i--){
  console.log(i);
}
console.log("----while loop descending---");
var i = 10;
while(i >= 0){
  console.log(i);
  i--;
}

