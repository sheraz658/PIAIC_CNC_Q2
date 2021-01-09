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
courses.splice(0,5,prompt(("course 1"), courses[0]),prompt(("course 2"), courses[1]),prompt(("course 3"), courses[2]),prompt(("course 4"), courses[3]),prompt(("course 5"), courses[4]))
alert("New Courses are " + courses);
 

