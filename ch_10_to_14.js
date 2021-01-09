// assignment 1
var number1 = parseInt(prompt("Enter your First Number", ""));
var number2 = parseInt(prompt("Enter your Second Number", ""));
var operator = (prompt("Enter your Operator", ""));
if (operator == "+") {
    alert(number1 + number2);
} else if (operator == "-") {
    alert(number1 - number2);
} else if (operator == "/") {
    alert(number1 / number2);
} else if (operator == "%") {
    alert(number1 % number2);
} else if (operator == "*") {
    alert(number1 * number2);
}
//assignment 2 
var course1 = parseInt(prompt("Enter your First Course Number", ""));
var course2 = parseInt(prompt("Enter your Second Course Number", ""));
var course3 = parseInt(prompt("Enter your Third Course Number", ""));
var course4 = parseInt(prompt("Enter your Fourth Course Number", ""));
var course5 = parseInt(prompt("Enter your Fifth Course Number", ""));
var totalMarks = 500;
var total = course1 + course2 + course3 + course4 + course5;
var percentage = total * 100 / 500;
alert("Persentage is " + percentage);
