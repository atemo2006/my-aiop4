var friends = ["fred", "john", "rohan","donald"];
/*
push adds to the end
pop moves to the end
unshift adds to the beginning
shift adds to the beginning
 */
friends.push("elizabeth, lucky") 
friends.unshift("reuben,")
friends.shift()
friends.pop();
console.log(friends);
console.log(friends[3].toUpperCase());

console.log('------arrayof_family---------')
var family = ["james", "philip", "favour", "steven"];
console.log(family);
// contactinaton is the joining f two variables
console.log("------array of family and friends---------");
var relationship = friends + family;
console.log(relationship);

var numbers = [30, 'html', 45,[68, 'tony', 'michael', 456,] ,'variables', 30, 'footer', 34, ];
console.log((numbers));
console.log(numbers[3][1]);

var list = [1, 2, ['a', 'b', ['cat', 'dog', 'go'], 'js', 'php'], 'Abg', 'En'];
console.log(list);
console.log(list[2][2][0]);

var friends = ['john', 'mathew', 'max', 'joe', 'jason'];
console.log(friends);
for(var i = 0; i < friends.length; i++){
    console.log(`${friends[i].toUpperCase()} is my coding friend`);
}

console.log(friends);
friends.push('logan','lucky');
for (var i = friends.length; i >= 0; i--) {
  console.log(`${friends[i]} is my coding friend`);
}

var student = {
  'name' : 'praise',
  'age' : 25,
  'course' : 'Js',
}
console.log(student['name']);
console.log(student["age"]);
console.log(student["course"]);
console.log(`${student['name']} is ${student['age']} years old, studying ${student['course']}`);
console.log(student.name)
console.log(student.age)
console.log(student.course)
console.log(student.name, "is", student.age, 'years','old','studying', student.course);
console.log(student.name + " is " + student.age + " years old studying js");
console.log(
  `${student.name} is ${student.age} years old studying ${student.course}`);


