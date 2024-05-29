// using if, else if and else create a basic app that assign a house to students based on their age bracket
//  group A 9-11 years old red house
//  group B 12-14 years old yellow house
//  group C 15-17 years old green house
//  group D 18-20 years old blue house

var studentName = prompt("Please enter your name");
var studentAge = prompt("Please enter your age");
if (studentAge < 9){
    console.log(`${studentName} Unfortunately, you do not fall within the age requirement, better luck next time`)
}else if(studentAge >= 9 && studentAge <= 11) {
    console.log(`${studentName} you have been assigned a red house to live in`)
}else if (studentAge >= 12 && studentAge <= 14) {
  console.log(
    `${studentName} you have been assigned a yellow house to live in`
  );
} else if (studentAge >= 15 && studentAge <= 17) {
  console.log(`${studentName} you have been assigned a green house to live in`);
} else if (studentAge >= 18 && studentAge <= 20) {
  console.log(`${studentName} you have been assigned a blue house to live in`);
}else if(studentAge > 20) {
    console.log(`${studentName} Sorry, although we do not have reservations for those above the age 20, you can contact the house master for further instructions.`)
} else console.log(`Sorry! you have no accomodation here, if you by any chance made a purchase on our platform we are sorry to say that there are no refunds`)

// assignment
// redo it with switch