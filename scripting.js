//Creating Variables in Javascript

var name = "Martian"; //This is the declaration of a String

var age = 99; //This is the decalaration an integer

//Alerts+Console

function scream(){
	alert("I'm over here"); //This will display as an alert to the user on the webpage
	console.log("Call me Mr.Console, I can solve stuff"); //This is only visible in the console
} //This is a function that will be accessed whenever the program is loaded

//Arrays

var myArray = ["papa Johns", 365, "green", 2]; //This is an array with 4 elements.

var ss = myArray[2]; //The value of ss is now "green"


// To test a function r a program, simply make sure you
// include the script link in the html document.

var house = function house(){
	console.log("Congrats, you built a house. Not really.")
} //This is another way to create a function

function Car(brand, doors){
	return("The brand of this car is"+brand+", and of course, it has "+doors+" doors.");
}

function Cheese(count){
	alert("You asked for "+count+" cheese.");
}

function action(fname, lname, age){
	this.fname = fname;
	this.lname = lname;
	this.age = age;
	console.log(this.fname+" "+this.lname+" "+this.age);
}

//PART 2

//2.1(1)
var one = 100;
var two = 200;
var three = one+two;
console.log(three);

var er = "hospital";
var bed = " room";
var place = er+bed;
console.log(place);

//2.2(2)
var movies = ["Rush Hour", "Insidious", "Dark Knight", 10, 22];
var stuff = ["running", "soccer", "chilling", movies, "eating"];
console.log(stuff[3][0]+" "+stuff[3][1]+" "+stuff[3][2]);

//2.3(6)
function listen(name){
	return("You entered: "+name);
}
console.log(listen("James"));

//2.4(7)
function seeMe(){
	console.log("You can't handle this coolness");
}
seeMe();