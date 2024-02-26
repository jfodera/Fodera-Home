/* Lab 5 JavaScript File 
   Place variables and functions in this file */

/*Checks to make sure each value is in correct condition before submitting*/
function validate(formObj) {
   //focus takes cursor to specified element and highlights box.
   if (formObj.firstName.value == "") {
      alert("You must enter a first name");
      formObj.firstName.focus();
      return false;
   }
   if (formObj.lastName.value == "") {
      alert("You must enter a last name");
      formObj.lastName.focus();
      return false;
   }
   if (formObj.title.value == "") {
      alert("You must enter a title");
      formObj.title.focus();
      return false;
   }
   if (formObj.org.value == "") {
      alert("You must enter a orginization");
      formObj.org.focus();
      return false;
   }
   if (formObj.pseudonym.value == "") {
      alert("You must enter a nickname");
      formObj.pseudonym.focus();
      return false;
   }
   if (formObj.comments.value == "") {
      alert("You must enter a comment");
      formObj.comments.focus();
      return false;
   }

   //if makes it here form submitted 

   alert("Form Submitted Succesfully!")
   return true;
}

/*Simply clears the text area specified*/
function clearArea(){
   var element = document.getElementById("comments");
   if (element.value == "Please enter your comments"){
      element.value = "";   
   }
}

/*Ensures that when user leaves text area, if nothing has been entered, the default message re-appears*/
function exitArea(){ 
   var element = document.getElementById("comments"); 
   if (element.value == ""){ 
      //have to use .value so that is replaced after multiple occasions 
      element.value = "Please enter your comments"; 
   }
}

/*Ensures correctly formatted output on 'See Alias' Button click */
function showFLName(){
   var fname = document.getElementById("firstName"); 
   var lname = document.getElementById("lastName");
   var nickName = document.getElementById("pseudonym");
   alert(fname.value + " " + lname.value + " is " + nickName.value);
}

/*Focuses on first element in form when called.*/
function focusOne(){ 
   var fname =  document.getElementById("firstName"); 
   fname.focus(); 
}