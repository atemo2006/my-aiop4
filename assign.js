// using if, else if and else create a basic app that assign a house to students based on their age bracket
//  group A 9-11 years old red house
//  group B 12-14 years old yellow house
//  group C 15-17 years old green house
//  group D 18-20 years old blue house
var age = prompt("please enter your age");
if (age >= 9 && age <= 11) {
  console.log(`${age} you belong to group A and have been assigned a red house to lodge in`);
} else if (age >= 11 && age <= 14) {
  console.log(
    `${age} you belong to group B and have been assigned a yellow house to lodge in`);
} else if (age >= 14 && age <= 17) {
  console.log(
    `${age} you belong to group C and have been assigned a green house to lodge in`);
} else if (age >= 17 && age <= 20) {
  console.log(
    `${age} you belong to group D and have been assigned a blue house to lodge in`);
} else console.log(`Sorry! you have no accomodation here, if you by any chance made a purchase on our platform we are sorry to say that there are no refunds`);