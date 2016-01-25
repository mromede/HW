// $(document).ready(function(){

// 	function TheClock(){
// 		var d, h, m, s;
// 		d = 5;
// 		h=6;
// 		console.log(d);
// 		console.log(h)
// 	}

// }); 

function TheClock(){
	setInterval(function(){
		var d, h, m, s; 
		d = new Date();
		h = d.getHours();
		m = d.getMinutes();
		s = d.getSeconds();
		$(".sec").text(s);
		$(".min").text(m);
		$(".hour").text(h);
  	},100)
} 