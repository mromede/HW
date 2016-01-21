//Objects

var myObject = {
	name: "Izzy",
	cars: 0,
	program: "ttp",
	hobbies: ["coding", "soccer", "working-out", "art"], //This is how you write an array literal
	driving: { //This is how you write an object literal
		fast: false,
		speed: 40,
		ride: "bmw"
	}
}

//Prototype

//Think of using the keyword "prototype" as attaching a function inside an object constructor

function dog(thename){ //This is an Object constructor
	this.newname = thename;
	this.legs = 4;
	console.log(this.newname+" has "+this.legs+" and can he bark? ");
}

dog.prototype.sound = function(b){
	this.bark = b;
	console.log(this.bark+"!!");
}

dog("Sparky");

rowdy = new dog("rowdy");
rwody.sound(false);

function spin(){ //This will display the properties of the pbjct passed to it. We can use a loop, but this is shorter.
	console.log(Object.getOwnPropertyNames(myObject)); //You can modify it to make sure that any object passed to the fn, will have its props listed
}

var Muiltiplier = { 
	var s = 2;
	mulitiply: function(n) {
		return(n*1);
	}
	getCurrentValue: function(){
		return(mulitiply(s));
	}
}

function Person(name1){
	this.name = name1;
	this.alive = true;
}

Person.prototype.department = function(dept){
	this.department = dept;
	this.school = "QC";
}

function Student(std){
	var undergrad = new Person(std);
}

function Teacher(teach){
	var faculty = new Person(teach); 
}