
Working URL: http://foderjrpi.eastus.cloudapp.azure.com/iit/

Lab 5 notes: 
Summary: This lab was probably my favorite as I really enjoyed bridging the gap from html to javascript. It definitley helped 
that I had a bit of background in javascript and it was just cool to finally apply some things that I knew prior to this class. 
The event Attributes were very interesting to me and when reading through some documentation, I was able to think of a lot of 
use cases for them. I'm excited to hopefully further implement javascript into our group project.


Plan: 

if form is submitted sucessfully, alert user


: on first load of the page, focus the first form element. (No points will be deducted for not doing this.)
   this means make the cursor be in the first element box on the first load of the page. 



Questions: 

How do we actually acsess responses once we hit submit? 


to do: 

Add multiple error messages if missing form feilds √
make sure when fields are empty button doesn't alert 'is' √ 
make sure to not submit form when comments are default √


Things I learned: 

textarea and input elements are two different Things
   value in text area defines what is pre-loaded in box

onsubmit attribute in a form

reasoning only clears once for onlick is because inner html is not changed when user adds comments 

onblur is called when element goes out of focus 

displaying value takes precedence over inner html

Always associate form labes with form input fields

setFocus sets defaults when screen first loads

Onsubmit functions must return true/false depending on if form was submitted succesfully

future notes:

cite atom image


Lab 4 notes: 
Summary: Was interesting to see the slight differences in syntax between Atom and RSS. Was also nice to get a deeper understanding of what a 
XML microformat really is. Cool curating my own feed and excited to hopefully play with RSS and Atom more in the future. Also just had a fun 
time styling my lab 4 landing. 

Plan: 

make a lab 4 landing page with links to the 2 files


Both feeds can be identical, just want us to be able to use both atom and RSS. 

Note: RSS readers should be able to read atom just fine


Questions: 
Why can't I define hover for a class

Why can't I make background image fill entire div?

Missing atom:link with rel="self"? Validator RSS reccomendation 


to do: 
make description not go over header.   


Things I learned: 

Can't make body a relative height 
Each atom entry should have a summary. 
Don't need CDATA in RSS but it tells program that it's text not markup 

future notes: 
style RSS in the future 


Lab 3 notes: 

Summary: Really learned a lot from this one, major takeaway was flexbox. Also found it better to not set fixed width for divs, instead make them 
relative to page size. Lots of comments below that I organized. Really excited to expand this out more 

Before submitting: 
   upload my practice diagrams to lab3 folder
   Copy this whole text to the readme.md file in the root directory
   Create -> page under construction links
   add ? 
   comments, uncomment before uploading to azure
   go through all links

Plan: 

Navbar for website/breadcrums? 

pages: 
   original inde.html file in iit is my landing page, how I navigate this whole iit Folder 
   projects.html folder-> main page to intrioduce your labs, put it in your lab folder
      must have links to labs, and have a landing page for each lab

page makeup: 
   consistent header, menu, content area, and footer across pages 
   Rememeber Title tag!


Conventions: 

filesheets have same name as html they are used for, just different extension

Use rel URL's for importing CSS, server relative for actual link

Questions: 
Are the # of files in my root good? 


Things I learned: 

display: block; - allows you to set height and width for links

cannot legally make button a link 

Must make server relative calls

%'s are based off of container within

Do widths in percentages to resize with windo 

make seperate css files (external file sheet): 
   Thinks about good organization, don't replicate 

Wrap means to be able to move to next line when screen minimizes 

Linking external File Sheets: 
https://www.w3schools.com/css/css_howto.asp


Flexbox: mabye use: 
https://www.w3schools.com/css/css3_flexbox.asp
slide: 29

<em> </em> makes things itallic

'rel' attribute tells html how to interact with link 

can make -margin 
   for built in outer margin


Future Updates: 

make a better header
Make abt section alignment dependant on the width 
Make intro to itws website before lab directory 

__________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________

Lab 2 Notes 


Summary: 

This document is basically just little things I noticed/learned throughout this lab. I would say I took a lot away from it and was a much needed 
experience. Provoked some good questions that I'm eager to get answered. 

itws-1100-foderj = iit 
deoploying code instructions on readme 
using vs code for this lab, chrome dev in future 



Steps: 
Go through example code
Make sure page validates
get old resume
periodically validate 
While going through take notes that you think are important (don't have to 
write everything down.)
check over slides to make sure fits code style 
check to make sure padding is as efficient as possible


HTML Notes for future: 

can comment same way as xcode
meta is a 'void element' and does not need a trailing slash 
do not need 'type="text/css"' for style so will not include it
Think of each tag as its own box mode, even body
Font family just has multiple fonts in case browser does not support new
Note that in CSS, when styling tags, no '#' or '.' needed 
By default heading is bold 
Cannot have link or image inside of list element
Each element has their own box
no p1,p2,p3
must set all elements of the box to zero through class selector, Margin is the one that has set defaults. Border is more for making visible borders, didn't need to explicitly declare border 
in CSS
Can remove bullets with lsit-style: none

Cannot define 2 different elements in CSS 


Q's:
should the CSS in file be consisten with the order of the body?
 don't really have to

What are the default contraints of a CSS box model on an element? 
   Yes there are, can check what they set to through chrome devtools inspect, or just set all to zero and go from there. 

Why can't I add padding to a pragraph type? 'p1'
   must be just straight up p, with a class selector, or id
   Could only add padding-right to 'p1' and nothing else, why? 
   p1, p2 are not valid tags

white-space: nowrap; 
   whitespace is preserved when read by browser 





WHy doesn't this work (invalidated): 


HTML: 

if change to id/class should work, can't do p2, p3, those tags do not exist 

<p class="someClass"> 
<div class="title-date">
         <p2>Waiter</p2>
         <p3>4/23 - 9/23</p3>
</div>


Css: 

.title-date{
         padding-bottom: 10px;
         font-size: 1.3em;
}

p2{
   float: left;
   padding: 0 0 0 150px;
   font-weight: bold; 
}
p3{
   float: right; 
   padding: 0 25px 0 0; 
}
