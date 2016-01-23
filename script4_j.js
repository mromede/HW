$(document).ready(function(){
	$(".lightbox-link").click(function(){
		var imageURL = $(this).data("img-url");
		var image = $("#lightbox-image");
		image.attr('src', imageURL); //this gives the "image" variable, the "imgaURL" link/src
		centerImage(image);
		$(".lightbox-outer").show();
		$(".lightbox-outer").click(function(){
			$(".lightbox-outer").hide(); 
		})
	});
	$(".the-zebra").click(function(){
		var imageURL = $(this).data("img-url");
		var image = $("#lightbox-image");
		image.attr('src', imageURL); //this gives the "image" variable, the "imgaURL" link/src
		centerImage(image);
		$(".lightbox-outer").show();
		$(".lightbox-outer").click(function(){
			$(".lightbox-outer").hide();
		})
	}); 

	function centerImage(picture){
		picture.load(function(){
			var page_height = $(window).height();
			console.log("picture loaded")
			console.log(page_height);
			var image_height = picture.height();
			console.log(image_height);
			var image_height_offset = (page_height - image_height)/2;
			console.log(image_height_offset);
			picture.parent().css("margin-top", image_height_offset);
		})
	}
})