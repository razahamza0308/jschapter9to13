// Question 1

// var city = prompt("Enter city name");

// if (city === "Karachi" || city === "karachi") {
//     document.write("<h1>Welcome to city of lights</h1>");
// }
// else{
//     alert("Wrong city name entered");
// }

// Question 2

// var gender = prompt("Enter your gender");

// if(gender === "male" || gender === "Male"){
//     document.write("<h1>Good Morning Sir</h1>");
// }
// else if(gender === "female" || gender === "Female"){
//     document.write("<h1>Good Morning Ma'am</h1>");
// }

// Question 3

// var trafficSignal = prompt("Enter Traffic signal color");
//     if(trafficSignal === "Red"){
//         document.write("Must Stop");
//     }   
//     else if(trafficSignal === "Yellow"){
//         document.write("Ready to move");
//     }
//     else if(trafficSignal === "Green"){
//         document.write("Move now");
//     }
            
// Question 4

// var remFuel =  +prompt("Enter Remaining Fuel in Car (liters)");

// if(remFuel < 0.25){
//     alert("Please refill the fuel in your car");
// }
// else{
//     alert("Fuel is enough. You are good to GO!");
// }

// Question 5

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// The alert will display for above code


// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// The alert will not display for above code

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if (c === 14){
// alert("condition 4 is true");
// }

// The Condition 2 and 4 alert will display for above code

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// The alert will always display for above code

// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }

// The true alert will display for above code

// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

// The alert will display for above code

// Question 6

// var sub1 = +prompt("Enter the marks of Subject 1 out of 100");
// var sub2 = +prompt("Enter the marks of Subject 2 out of 100");
// var sub3 = +prompt("Enter the marks of Subject 3 out of 100");

// if(sub1 <=100 && sub2 <=100 && sub3 <=100){
//     if(sub1 > 0 && sub2 > 0 && sub3 > 0){
//     var subTotal = sub1 + sub2 + sub3;
//     var totalMarks = 300;

//     var Percentage = subTotal * 100 / totalMarks;

//     document.write("Total Marks: " + totalMarks +"<br>");
//     document.write("Marks Obtained: " + subTotal +"<br>");
//     document.write("Percentage: " + Percentage +"<br>");   

//     }
//     else{
//         document.write("Please enter the marks above 0");
//     }
// }
// else{
//     document.write("Please enter the marks between 1 to 100");
// }


// if(Percentage >= 80){
//     document.write("Grade: A-One <br>");
//     document.write("Remarks: Excellent");
// }
// else if(Percentage >= 70){
//     document.write("Grade: A <br>");
//     document.write("Remarks: Good");
// }
// else if(Percentage >= 60){
//     document.write("Grade: B <br>");
//     document.write("Remarks: You need to improve");
// }
// else if(Percentage < 60){
//     document.write("Grade: Fail <br>");
//     document.write("Remarks: Sorry");
// }

// Question 7

// var secretNumber = 6;
// var guess_secretnumber = +prompt("Enter any number from 1 to 10");

// if(guess_secretnumber === secretNumber){
//     document.write("Bingo! Correct Answer");
// }
// else{
//     alert("Better luck next time");
// }


// Question 8

// var divNum = +prompt("Check any number is divisible by 3");

// var mod = divNum % 3;

// if(mod === 0){
//     alert(divNum + " " + "is divisible by 3");
// }
// else{
//     alert(divNum + " " + "is not divisible by 3");
// }

// Question 9

// var userInput = +prompt("Enter a number to check whether it's EVEN or ODD");

// var numCheck = userInput % 2;

// if(numCheck === 0){
//     alert(userInput + " " + "is an even number");
// }
// else{
//     alert(userInput + " " + "is an odd number");
// }

// Question 10

// var tempInput = +prompt("Enter the temperature");

// if(tempInput > 40){
//     alert("It is too hot outside.");
// }
// else if(tempInput > 30){
//     alert("The Weather today is Normal.");
// }
// else if(tempInput > 20){
//     alert("Today’s Weather is cool.");
// }
// else if(tempInput > 10){
//     alert("OMG! Today’s weather is so Cool.");
// }
// else{
//     alert("Blanket Nikal Lo!");
// }

// Question 11

// var firstNum = +prompt("Enter the first number");
// var secondNum = +prompt("Enter the second number");
// var operations = prompt("Enter the operation want to perform +,-,*,/,%");
// var total;
// if(operations == "+"){
//     total = firstNum + secondNum;
//     alert(total);
// }
// else if(operations == "-"){
//     total = firstNum - secondNum;
//     alert(total);
// }
// else if(operations == "*"){
//     total = firstNum * secondNum;
//     alert(total);
// }
// else if(operations == "/"){
//     total = firstNum / secondNum;
//     alert(total);
// }
// else if(operations == "%"){
//     total = firstNum % secondNum;
//     alert(total);
// }
// else{
//     alert("Sorry! The mentioned operation is not exist");
// }