// JQuery is a library of Javascript, so when you
// add it to the HTML file, use the <script> tag.

// You will have to attach two script tags inside the <head>.
// 1) this tag: <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"> </script>
// 2) Your source file.

//Selecting Elements in JQuery

// $('h1') This is how you selcet a built in tag using jquery

// $(".myClass") This is how you selcet a customized/created class usinh jquery

// $("#myId") This is how you select an id using jquery.

var myFunc = function(){
	console.log("You can do this in jquery");
} //This creates a function. "myFunc" is now a function and can be called without any parameters. Like this myFunc();

//Part two

function doorTwo(){
	document.getElementById("changer").innerHTML = "Welcome to the world of JQuery!"; 
}

function farbe(){
	$("#p1").css("color", "blue");
}

function position(){
	$("#p2").css("text-align", "center"); 
}

function three(){
	document.getElementById("theThree").innerHTML = "It Wooooooorked!!!";
	$("#theThree").css("color", "yellow");
	$("#theThree").css("text-align", "center");
}

function myPic(){
	$("#pic1").css("max-height", "300px");
	$("#pic1").css("max-width", "300px");
}

function theKid(){
	$("#kidPic").click(function(){
		$("#kidPic").hide(1000);
	})
	document.getElementById("texter").innerHTML = "See, he's gone!"; 
}

// $(document).ready(function(){
// 	$("#tommy").hide();
// })

function tomH(){
	$("#tommy").css("float", "right");
}

function moving(){
	$("#spider").click(function() {
		$("#spider").animate({
			right: '300px',
			width: '100px',
			height: '100px'
		})
	})
}