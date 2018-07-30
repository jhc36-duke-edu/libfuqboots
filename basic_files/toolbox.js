//chris coyier's dropdown select -->

$(document).ready(function() {

	//build dropdown
	$("<select />").appendTo(".mainnav");
	
	//add 'aria-label' for accessibility of select menu
	$("#navmenu select").attr("aria-label", "site navigation menu");
	
	// Create default option "Go to..."
	$("<option />", {
	   "selected": "selected",
	   "value"   : "",
	   "text"    : "SITE MENU..."
	}).appendTo("nav select");	
	
	// Populate dropdowns with the first menu items
	$(".mainnav li a").each(function() {
	 	var el = $(this);
	 	$("<option />", {
	     	"value"   : el.attr("href"),
	    	"text"    : el.text()
	 	}).appendTo("nav.mainnav select");
	});
	
	//make responsive dropdown menu actually work			
  	$("nav select").change(function() {
    	window.location = $(this).find("option:selected").val();
  	});

});	