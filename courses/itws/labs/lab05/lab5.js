/* Lab 5 JavaScript File 
   Place variables and functions in this file */

/*Checks to make sure each value is in correct condition before submitting*/
function validate(formObj) {
   //focus takes cursor to specified element and highlights box.
   var alertMessage =""; 
   var count = 0; 
   var res = true; 

   if (formObj.firstName.value == "") {
      if (count != 0){
         alertMessage += "\n";
      }
      alertMessage += "You must enter a first name";
      formObj.firstName.focus();
      count += 1; 
      res = false;
   }
   if (formObj.lastName.value == "") {
      if (count != 0){
         alertMessage += "\n";
      }
      alertMessage += "You must enter a last name";
      formObj.lastName.focus();
      count += 1; 
      res = false;
   }
   if (formObj.title.value == "") {
      if (count != 0){
         alertMessage += "\n";
      }
      alertMessage += "You must enter a title";
      formObj.title.focus();
      count += 1; 
      res = false;
   }
   if (formObj.org.value == "") {
      if (count != 0){
         alertMessage += "\n";
      }
      alertMessage += "You must enter a orginization";
      formObj.org.focus();
      count += 1; 
      res = false;
   }
   if (formObj.pseudonym.value == "") {
      if (count != 0){
         alertMessage += "\n";
      }
      alertMessage += "You must enter a nickname";
      formObj.pseudonym.focus();
      count += 1; 
      res = false;
   }
   if (formObj.comments.value == "" || formObj.comments.value == "Please enter your comments") {
      if (count != 0){
         alertMessage += "\n";
      }
      alertMessage += "You must enter a comment";
      formObj.comments.focus();
      count += 1; 
      res = false;
   }



   //if makes it here form submitted 
   if (res){
      alert("Form Submitted Succesfully!");
      return(true); 
   }else{
      alert(alertMessage); 
      return(false); 
   }
   
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
   if(fname.value != "" && lname.value != "" && nickName.value != ""){
      alert(fname.value + " " + lname.value + " is " + nickName.value);
   }else{
      alert("Must Fill in 'First Name', 'Last Name', 'Nickname'"); 
   }
}

/*Focuses on first element in form when called.*/
function focusOne(){ 
   var fname =  document.getElementById("firstName"); 
   fname.focus(); 
}