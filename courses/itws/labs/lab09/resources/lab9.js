/* Lab 9 JavaScript File  */

$(document).ready(function() {
   //for display toggle
   var atomNum = 0; 
   var rssNum = 0; 

   /*reads in atom*/
   $.ajax({
      type: "GET",
      url: "../lab04/foderjatom.xml",
      dataType: "xml",
      success: function(responseData, status){

         $(responseData).find("entry").each(function(i, item) {
            //gets date
            var rawDate = $(item).find("updated").text()
            var date = rawDate.substring(0,4);
            //adds list item
            $("#atomTxt").append(
               "<li><div class='aborder'><a href='" +$(item).find("id").text() + "' target='_blank'>" +
               $(item).find("title").text()+"<span class='date'>"+ date + "</a>" + "<p class ='summary'>"
               + $(item).find("summary").text()+ " </p></div></li>" 
            );
         });
         //closes list
         $("#atomTxt").append("</ul>");
         $(".aborder").hide();
      },
      //error section taken directly from 'lab7 solved.js' example
      error: function(msg) {
      	// there was a problem
      	alert("There was a problem: " + msg.status + " " + msg.statusText);
    	}
   });

   /*reads in RSS*/
   $.ajax({
      type: "GET",
      url: "../lab04/foderjrss.xml",
      dataType: "xml",
      success: function(responseData, status){

         $(responseData).find("item").each(function(i, item) {
            //gets date
            var rawDate = $(item).find("pubDate").text()
            var date = rawDate.substring(12,16);
            //adds list item
            $("#rssTxt").append(
               "<li><div class='rborder'><a href='" +$(item).find("link").text() + "' target='_blank'>" +
               $(item).find("title").text()+"<span class='date'>"+ date + "</a>" + "<p class ='summary'>"
               + $(item).find("description").text()+ " </p></div></li>" 
            );
         });
         //closes list
         $("#rssTxt").append("</ul>");
         $(".rborder").hide();
      },
      //error section taken directly from 'lab7 solved.js' example
      error: function(msg) {
      	// there was a problem
      	alert("There was a problem: " + msg.status + " " + msg.statusText);
    	}
   });

    
   /*Show Atom*/
   $(".atomTitle").click(function() {
      if(atomNum %2 == 0){
         $(".aborder").fadeIn(); 
         atomNum += 1; 
      }else{
         $(".aborder").fadeOut(); 
         atomNum += 1; 
      }
   });   

   /*Show RSS*/
   $(".rssTitle").click(function() {
      if(rssNum %2 == 0){
         $(".rborder").fadeIn(); 
         rssNum += 1; 
      }else{
         $(".rborder").fadeOut(); 
         rssNum += 1; 
      }
   });   
});