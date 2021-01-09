var courses = [];
var course1 = (prompt("Enter your First Course", ""));
courses.push(course1);
var course2 = (prompt("Enter your Second Course", ""));
courses.push(course2);
var course3 = (prompt("Enter your Third Course", ""));
courses.push(course3);
var course4 = (prompt("Enter your Fourth Course", ""));
courses.push(course4);
var course5 = (prompt("Enter your Fifth Course", ""));
courses.push(course5);
alert(courses);
for(i = 0; i < courses.length; i++) {
   let newValue = prompt(("course" + (i+1)), courses[i])
    if(newValue != courses[i]) {
        courses[i] = newValue;
    }
}
alert("New Courses are " + courses);
 

