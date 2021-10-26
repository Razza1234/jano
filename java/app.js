var User_Name= prompt("Enter your User Name");
var School= prompt("Enter your School Name");
var Standard= prompt("Enter your Standard");
var Roll_no= prompt("Enter your Roll no");
var Math= +prompt("Enter your Math Mark");
var English= +prompt("Enter your English Mark");
var Chemistry= +prompt("Enter your Chemistry Mark");
var Physics= +prompt("Enter your Physics Mark");
var Computer= +prompt("Enter your Computer Mark");
var Urdu= +prompt("Enter your Urdu Mark");
var Total_marks= parseInt(Math) + parseInt(English) + parseInt(Chemistry) + parseInt(Physics) + parseInt(Computer) + parseInt(Urdu);
var Percentage = Total_marks * 100/600;

document.write ("Your Name is :" + User_Name +"<br>")

document.write ("Your School Name is :" + School +"<br>")

document.write ("Your Class is :" + Standard +"<br>")

document.write ("Your Roll no. is :" + Roll_no +"<br>")

document.write ("Your Math Mark  is :" + Math+"<br>")

document.write ("Your English Mark is :" + English +"<br>")

document.write ("Your Chemistry Mark is :" + Chemistry +"<br>")

document.write ("Your Physics Mark is :" + Physics +"<br>")

document.write ("Your Computer Mark is :" + Computer +"<br>")

document.write ("Your Urdu Mark is :" + Urdu +"<br>")

document.write ("Your Total Mark is :" + Total_marks +"<br>")

document.write ("Your Percentage is :" + Percentage +"<br>")





