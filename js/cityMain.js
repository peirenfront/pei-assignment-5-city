//1. As soon as DOC loaded, run js
$( document ).ready(function() {

//2. Declare a variable called "city" to store the user input
	 var city;

//3. Once the user clicks on the button of ID "submit-btn", run the function
$("#submit-btn").click(function(event){

//4. Use the preventDefault() method here to cancel the default action
	 event.preventDefault();

//5. Store the city name whatever the user enters	
	 city = $("#city-type").val();

//6. If the user enters "New York" or "New York City" or "NYC", the code line 20 happens
	 if(city === "New York" || city === "New York City" || city === "NYC") {

//7. In line 20, use attr() method to add the class called "nyc" to the body and apply the style provided in the "style.css", the background image becomes nyc.jpg
		$("body").attr("class", "nyc");
	 }
//8. If enters "San Francisco" or "SF" or "Bay Area", the background image becomes sf.jpg
	 else if(city === "San Francisco" || city === "SF" || city === "Bay Area") {
		$("body").attr("class", "sf");
	 }
//9. If enters "Los Angeles" or "LA" or "LAX", the background image becomes la.jpg
	 else if(city === "Los Angeles" || city === "LA" || city === "LAX") {
		$("body").attr("class", "la");
	 }
//10. If enters "Austin" or "ATX", the background image becomes austin.jpg
	 else if(city === "Austin" || city === "ATX") {
		$("body").attr("class", "austin");
	 }
//11. If enters "Sydney" or "SYD", the background image becomes sydney.jpg
	 else if(city === "Sydney" || city === "SYD") {
		$("body").attr("class", "sydney");
	 }
//12. Otherwise, go back to the home page
	 else{
 		document.location.href = "index.html";
	}
	
});

});


