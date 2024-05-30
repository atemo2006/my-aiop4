alert
// function  can be defined as creating something 
// two types of functionbuilt-in-functions
// e.g alert,prompt,if,console.log
// custom function 
// e.g Declaration,call back or arrow function
// declarative
// with parameter
// without parameter
// with return
// with scope

// syntax for declarative function
// function name(){
//     output
// }
// calling/invoke

function add(){
    console.log(5+2)
}
add()
add()
add()
add()
add()
add()
add()
add()
add()
add()
add()
add()
add()
// function helps us to do dry
// dry means do not repeat yourself
// argument/parameters
function studentInformation(){
    var name = `sherlockholmes`
    var course = `networking`
    console.log(`${name} is studying ${course}`)
}
studentInformation()

function studentInfo2(name,course){
    console.log(`${name} is studying ${course}`)
}
studentInfo2( 'john','python');
studentInfo2('lucky','SQL');
studentInfo2('rogers','jasvascript');
studentInfo2("steve", 'java');
studentInfo2("james", 'php');
studentInfo2("norman", "API");
// studentInfo2()

function studentData(name = 'John', age =20){
    console.log(`${name} is ${age} years old`)
}
studentData('lucky', 50);
studentData("indiana", 50);
studentData("charles", 50);
studentData("ben", 50);
studentData("davis", 50);
studentData();

// syntax
function addValue(a,b){
    return a + b
    
}
console.log(addValue(5,3))

result = addValue(5,3)
console.log(result+7)

function times(a){
    return a*3
}
console.log(times(7))


