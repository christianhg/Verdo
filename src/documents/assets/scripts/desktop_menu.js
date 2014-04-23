$(document).ready(function(){

	//var thisUrl = "" + window.location.pathname.substr(1);
	var thisUrl = document.location.href.match(/[^\/]+$/)[0];

	//Menu 1
	$(".menu1 ul a").each(function(){
		
		btnUrl = $(this).attr("href");
		
		if(btnUrl == thisUrl)
		{
			$(this).find("li").addClass("selected");
		}
	})
	//Menu 2
	$(".menu2 ul a").each(function(){

		btnUrl = $(this).attr("href");
		
		if(btnUrl == thisUrl)
		{
			$(this).find("li").addClass("selected");

			if($(this).data("menu") == "erhverv")
			{
				$("#erhverv").find("li").addClass("selected");
			}
			if($(this).data("menu") == "privat")
			{
				$("#privat").find("li").addClass("selected");
			}
		}
	})
	//Menu 3 - vis hvis vi ikke befinder os på privat eller erhverv-index
	if(thisUrl != "index.html" && thisUrl != "privat.html")
	{
		$(".menu3").show();
		$(".menu3 ul").each(function(){

			if(thisUrl == $(this).data("menu"))
			{
				$(this).show();
			}

		})

		$(".menu3 ul a").each(function(){

			btnUrl = $(this).attr("href");
			
			if(btnUrl == thisUrl)
			{
				$(this).find("li").addClass("selected");
			}
		})
	}

	var isScrolling = false;

	//menu3 scroll
	$(".menu3 ul a").click(function(e){

		e.preventDefault();

		if(isScrolling == false)
		{

			isScrolling = true;
			
			var currentScrollPos = window.pageYOffset;
			var scrollTo = $(this).attr("href");
			var duration = Math.abs( $(scrollTo).offset().top - 150 - currentScrollPos );

			$('html, body').animate({
	        	scrollTop: $(scrollTo).offset().top - 150
	     	}, duration/2);

	     	setTimeout(function() {

	     		//window.location.href = scrollTo;
	     		isScrolling = false;

	     	}, duration/2 + 0.1);

    	}

	})
});