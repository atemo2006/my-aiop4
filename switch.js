// syntax
/*
switch(condition){
    case 1:
    output;
    break;
    
    case 2:
    output;
    break;

    case 3:
    output;
    break;

    default:
        output;
        break;
}
*/
var myName = prompt('Please enter your name')
switch (myName) {
  case "John":
    console.log("Student");
    break;
// break is used to stop the condition and the default is used in place of else
  case "Abraham":
    console.log("Teacher");
    break;

  case "lincoln":
    console.log("President");
    break;

  case "Sherlockholmes":
    console.log("Detective");
    break;

  case "atemo":
    console.log("programmer");
    break;

  default:
    console.log("who are you");
    break;
}
