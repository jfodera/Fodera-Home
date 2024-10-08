/* Lab 7 JavaScript File  
  
  Lab instructions:
   
    In this directory are two cached files:
   
    "flickrfeed.js" is from Flickr in json format:
     http://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1
   
    "NYTHomePage.xml" is from the NY Times site in XML:
    http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml
     
    To complete this lab you must output the items from each feed onto lab7.html
    using ajax techniques.  You may wish to study the jquery $.each() method 
    for iterating over items:  http://api.jquery.com/jQuery.each/
    Otherwise, use a for loop.
    
    Excercise 1:
      In "Exercise 1" below, flickrfeed.js is preloaded for you.  
      You must update "Excercise 1" to output the flickr feed onto the 
      lab7.html page in <div id="flickrOutput"></div>. 
      
      You should:
       - remove the alert() currently being produced
       - iterate over the photos and output them to <div id="flickrOutput"></div>
         you can do this with a for loop or using jQuery's $.each() 
       - hyperlink each image back to its Flickr page
      
      Note: Below Exercise 1 and 2 is a jsonp (json with padding) example 
      that uses an $.each() method to help you understand how it works.  
      If you uncomment the example to look at it, please return it to a commented 
      out state prior to submission.
      
      Also look at this example's approach to writing the content back to the
      div.  
      
    Exercise 2:
      Using the $.ajax() block in Exercise 1 as an example,
      create a new $.ajax() block to pull in the New York Times 
      Bits Blog XML data.  Create an unordered list (<ul>)
      with one entry in each list element:
       - include the title for the entry
       - link the title to the original article for each entry
       - place the publication date for each entry under the title (not linked)
       - make the publication date a smaller font than the title 
       - output the results to <div id="nytOutput"></div> (again, look to the
         example for how to do this)
      
       For Exercise 2, you should examine the jQuery $.ajax() method:
       http://api.jquery.com/jQuery.ajax/
       
       You will need to understand how to use the jQuery find() method as well,
       and understand text() nodes.
       
       Some very simple examples that will help you:
       http://papermashup.com/parse-xml-with-jquery/
       http://www.switchonthecode.com/tutorials/xml-parsing-with-jquery
    
  When you are done:
    Post this lab to your iit website,
    link it from your projects page,
    and post a working hyperlink to your projects
    page in the assignment dropbox.
   
  Lab 7 is due by midnight Oct 29, 2012.
  
*/
//called when document loads
$(document).ready(function() {
  
  // Excercise 1: Flickr feed
  var option=1;	
	
	if (option==1) {
	
	//For this option, each li of the page is added conce3nated and then the entire list is added to the html
	//Notice the , after each argument techniques
  	$.ajax({
   	 	type: "GET",
			// Can be web-based or a local file 
   	 	url: "flickrfeed.js",
   	 	dataType: "json",
			//Runs when request succeeds 
			//response data is the data returned from the server (the raw flikrfeed file)
			//status is the status of the ajax request
   	 	success: function(responseData, status){
			//from here below we are working in the response data file
			//creating string
   	  	var output = "<ul>";  
			//.items can only be used because the JSON file has a structure names items, along with the rest of those attribute names
			//i is the index which increments and iten is the container variable the function is iterating through
    	 	$.each(responseData.items, function(i, item) {
				//concatenating valid javaScript
       		output += '<li><a href="' + item.link + '" target="_blank">';
				output += '<img title="' + item.title + '" src="' + item.media.m;
				output += '" alt="'; 
				output += item.title + '" />';
				output += '</a></li>';
      	});
      	output += "</ul>";
			//jquery selector gets the element with the ID and writes to output to it
      	$('#flickrOutput').html(output);
    	}
		//when error occurs in ajax request it is returned as a msg that has various attributes
		, error: function(msg) {
      				// there was a problem
      	alert("There was a problem: " + msg.status + " " + msg.statusText);
    	}
  	});
	} else {  // OR - option 2, each li is added to HTML when concenated (faster than option 1)
  	$.ajax({
    	type: "GET",
    	url: "flickrfeed.js",
    	dataType: "json",
   		success: function(responseData, status){
    	  var output = "<ul>"; 
		  //no selector definition because already inresponseData so not neccesary
      	$.each(responseData.items, function() {
				//this refers to the current object being processed by the iteration
        	  $("#flickrOutput").append(
          	  "<li><a href='" + this.link + "' target='_blank'>" +
           	 "<img title='"+ this.title + "'src='" + this.media.m + "' alt='"+ this.title + "' />" + "</a></li>");
      	});
			//this doesn't fully work
      	output += "</ul>";
    	}, 
		
		error: function(msg) {
      	// there was a problem
      	alert("There was a problem: " + msg.status + " " + msg.statusText);
    	}
  	});	
	};

	
  
  // Excercise 2: NYT Bits Blog feed
  // your code goes here.
	//ajax SML version
    if (option==1) {	 
	  	$.ajax({
	    	type: "GET",
 	  		url: "NYTHomePage.xml",
    		dataType: "xml",
    		success: function(responseData, status){
    			var output = "<ul>";  
				//since response data is valid xml, can use jquery xml methods 
      		$(responseData).find("item").each(function() {
					//same kind of method
       			output += '<li><a href="' + $(this).find("link").text() + '" target="_blank">';
        		output += $(this).find("title").text();
        		output += '</a></li>';
				//to mess with fonts can change CSS through here or manually
        		output += "<div id='date'>" + $(this).find("pubDate").text() + "</div><br />";
      		});
      		output += "</ul>";
				//concatenates all then adds to end
      		$('#nytOutput').html(output);
    		}, error: function(msg) {
      		// there was a problem
      		alert("There was a problem: " + msg.status + " " + msg.statusText);
    		}
  		});  
		} else { // OR - option 2, adds each li as created
 			$.ajax({
   	 		type: "GET",
    		url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml",
    		dataType: "xml",
    		success: function(responseData, status){
    			var output = "<ul>"; 
    						//alert("Good: " + responseData.status + " " + responseData.title); 
    			$(responseData).find("item").each(function() {
      	  	$("#nytOutput").append(
         	 	"<li><a href='" +$(this).find("link").text() + "' target='_blank'>" +
         	 	$(this).find("title").text()+"</a><br />" +
					//font tag no longer in use
         	 	"<font class='smaller'>" + $(this).find("pubDate").text() + "</font><br /></li>" );
      		});
    			output += "</ul><br /><br >";
    		}, error: function(msg) {
      					// there was a problem
      		alert("There was a problem: " + msg.status + " " + msg.statusText);
    		}
  		});
		};
  
  
  // Flickr jsonp example using getJSON: Just using a different jQuery method 
 /*
  $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?", outputPhotos);
  function outputPhotos(photoData) {
    var output = "<ul>";   
    $.each(photoData.items, function(i,item){
        output += '<li><a href="' + item.link + '" target="_blank">';
        output += '<img title="' + item.title + '" src="' + item.media.m;
        output += '" alt="'; 
        output += item.title + '" />';
        output += '</a></li>';
    });
    output += "</ul>";
    $('#flickrExample').html(output);
  }
*/  
});

