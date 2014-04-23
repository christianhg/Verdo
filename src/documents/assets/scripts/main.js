// Here is our Verdo JS
$( document ).ready(function() {
	// Verdo JS
	$( "#tabs" ).tabs();

	// initiate mmenu
	$(function() {
		$('nav#slidemenu').mmenu({
			slidingSubmenus: false,
	        position: "right",
	        zposition: "back"
		});
	});

	var options = {
		classes			: 'mm-light',
		modal			: true,
		slidingSubmenus: false,
		moveBackground: false
	};

	options.position = 'bottom';
	options.zposition = 'front';
	$('#popup-1').mmenu( options );
	$('#popup-2').mmenu( options );
	/* CHANGE SELECTED NAVBAR MOBILE LI */
	$("#popup-1")
	   .mmenu()
	   .on(
	      "closed.mm",
	      function()
	      {
	         $('#nav-mob-2-select').hide();
	         $('#nav-mob-2').show();
	      }
	   )
	   .on(
	      "opened.mm",
	      function()
	      {
	         //alert( "The menu has just been opened." );
	         $('#nav-mob-2-select').show();
	         $('#nav-mob-2').hide();
	         //$(this).css("box-shadow", "inset 0 -10px 10px -10px @dark, 0 0 20px rgba(0, 0, 0, 0.5) !important");
	      }
	   );
	/* CHANGE SELECTED NAVBAR MOBILE LI */
	$("#popup-2")
	   .mmenu()
	   .on(
	      "closed.mm",
	      function()
	      {
	         $('#nav-mob-3-select').hide();
	         $('#nav-mob-3').show();
	      }
	   )
	   .on(
	      "opened.mm",
	      function()
	      {
	         //alert( "The menu has just been opened." );
	         $('#nav-mob-3-select').show();
	         $('#nav-mob-3').hide();
	      }
	   );
	
	// index planets image transform
	$('.img-index-transform-js').click(function(){
		$(this).attr('src',"assets/img/planets_index_2.png");
		$(this).click(function(){
			$(location).attr('href','chapters.html');
		})
	})
});