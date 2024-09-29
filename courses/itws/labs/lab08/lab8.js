$(document).ready(function() {

   //for Insertion of HTML, All initially hidden
   $.ajax({
      type: "GET",
      url: "lab8Proj.json",
      dataType: "json", 
      success: function(responseData, status){

         //head insertion
         $.each(responseData.headInfo, function(i, linkT){
            //do not need to add '../' here 
            $("head").append(
               "<link rel='" + linkT.rel + "' href= '" + linkT.href + "'>"
            );


         });

         //header insertion 
         $.each(responseData.header, function(i, item){
            //needed to add '../' here 
            $("#insertProj").append(
               "<div id='" + item.HdivID + "'>" + "<h1>" + item.h1In + "</h1>" + "<p id='" + item.pID + "'>" + 
               "<a class='" + item.aClass + "' href='../" + item.aL1 + "'>" + item.a1In + "</a>" + item.arrow + 
               "<a class='" + item.aClass + "' href='../" + item.aL2 + "'>" + item.a2In + "<hr id='" + item.hrID + "'> </div>" 
            );

            //effects
            $("#" + item.HdivID).hide();
            $("#" + item.HdivID).slideDown(2000);
         });

         //button insertion
         $.each(responseData.buttons, function(i, but){
            var finStr = ""; 

            //This segments deciphers which kind of item is being iterated and creates the correct html based off the type
            //Also responsible for inserting the HTML string into the correct system
            if (but.type == "flex"){

               //flexbox div
               finStr += "<div class='" + but.class + "' id='" + but.id + "'>"
               $("#insertProj").append(finStr);
            }else if(but.type == "button"){

               //so that lab 7 does not take you anywhere 
               var link = "'";
               if(but.aID != "lab7"){
                  link += " href='../" + but.aHref + "'"
               }
               //defined Lab buttons
               finStr += "<div class='" + but.divClass + "'> <h2>" + but.hIn + "</h2>" + 
               "<a class='" + but.aClass + "' id='" + but.aID + link + "></a> </div>" 
               if(i <= 6){
                  $("#topRow").append(finStr);
               }else{
                  $("#bottomRow").append(finStr);
               }

               //effects
               $("." + but.divClass).hide(); 
            }else if(but.type == "rest"){

               //non-defined labs
               finStr += "<div class='" + but.divClass + "'> <h2>" + but.hIn + "</h2>" + 
               "<a class='" + but.aClass + "'></a> </div>" 
               $("#bottomRow").append(finStr);

               //effects
               $("." + but.divClass).hide(); 
            }else if(but.type == "end"){

               //ending encompassing divs
               finStr += "</div>"
               $("#insertProj").append(finStr);
            }else if(but.type == "finProj"){

               //final project button
               finStr += "<div id='" + but.type + "'> <div> <h2>" + but.inh2 + "</h2> <a class='" + but.aClass + "'></a> </div> </div>"
               $("#insertProj").append(finStr);

               //effects
               $("#" + but.type).hide(); 
            }

            //All buttons fade in (except final proj)
            
         });

         //Footer Insertion 
         $.each(responseData.footer, function(i, tab){
            if (tab.type == "foot"){

               //opener
               $("#insertProj").append("<footer>");
            }else if(tab.type == "end"){

               //closer
               $("#insertProj").append("</footer>");
            }else if(tab.type == "Link"){

               //format for links
               $("footer").append(
                  "<p class='" + tab.class + "'>" + "<a href='" + tab.ahref + "'>"+ tab.inner +"</a>" + "</p>"
               );
            }else{

               //format for non-links
               $("footer").append(
                  "<p class='" + tab.class + "'>" + tab.inner + "</p>"
               );
            }

            //hiding for effects
            $("footer").hide(); 
            $("footer").show(2000);
         });
      },

      //error section taken directly from 'lab7 solved.js' example
      error: function(msg) {
      	// there was a problem
      	alert("There was a problem: " + msg.status + " " + msg.statusText);
    	}
   });


   //effects in on load
   setTimeout(function() {
      $(".butText").fadeIn(1500);
      $("#finProj").fadeIn(1500);
   }, 2250);

})