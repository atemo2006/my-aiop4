var myName = prompt(`enter your name`);
var myAge = prompt(`enter your age`);
switch (true) {
  case myAge < 9:
    console.log(`${myName}please wait till you are of age`);
    break;

  case myAge >= 9 && myAge <= 11:
    console.log(
      `${myName}Congratulation's you fall within the age requirement,you have been assigned a red house to lodge in`);
    break;

  case myAge >= 12 && myAge <= 14:
    console.log(
      `${myName}Congratulation's you fall within the age requirement,you have been assigned a blue house to lodge in`);
    break;

  case myAge >= 15 && myAge <= 17:
    console.log(
      `${myName}Congratulation's you fall within the age requirement,you have been assigned a yellow house to lodge in`);
    break;

  case myAge >= 18 && myAge <= 20:
    console.log(
      `${myName}Congratulation's you fall within the age requirement,you have been assigned a green house to lodge in`);
    break;

  case myAge > 20:
    console.log(
      `${myName}Unfortunately, you do not fall within the age requirement, you can go see the hoiusemaster for further instructions.`);
    break;

  default:
    console.log(
      `Sorry! you have no accomodation here, if you by any chance made a purchase on our platform we are sorry to say that there are no refunds`
    );
}