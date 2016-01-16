
function theTimer(){ 
	//var timer = new Date(); 
	document.getElementById("begin").innerHTML = "";
	alert("Testing");
	var myMonth = prompt("Enter the month please", "month");
	while(myMonth > 11 || myMonth < 0){
		myMonth = prompt("Enter the month please", "month");
	}
	var myDay = prompt("Enter the day please", "day");
	while(myDay > 30 || myDay < 0){
		myDay = prompt("Enter the day please", "day");
	}
	var myYear = prompt("Enter the year please", "year");
	while(myYear > 9999 || myYear < 0){
		myYear = prompt("Enter the year please", "year");
	}
	alert("Congrats, you have a valid date!");
}

function myFunction(event){
	var a = event.which;
	var b ="";
	if((a >= 65) &&(a <= 90)){
		b = " alphabet!"
	}else if((a >= 48)&&(a <= 57)){
		b = " integer!"
	}
	document.getElementById("special").innerHTML = "What you entered is an" + b; 
} 