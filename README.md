Homepage Link: https://foderj.eastus.cloudapp.azure.com/fodera-home/


Github repo Link: https://github.com/jfodera/Fodera-Home

Lab 10 Notes

Summary: 
   Very different lab than the ones prior but I learned a lot and I think will be very useful for the future. Glad I now know what php
   and mySQL are and how easy it is to make databases, implementent relationship tables and things like that. Didn't run into a lot of issues 
   here as the in-class material helped me to get a good grasp of the concepts that we were working with

Plan: 
   Be sure to link it to labs Homepage and change links above
   be sure to re-do actors csv and image 

Current: 
   on step 2

Things I learned: 
   SQl file is what phpMy admin reads

________________________________________________________________________________________________________________________________________________

Lab 9 notes: 

Summary: 
   I really liked this lab as I put together a lot of different peices. Below I listed everything I learned and a couple of questions I had. I used some jquery methods 
   that I got from lab 6 to make the text appear and disappear on click while also combining that with ajax hide statements I used in lab 8 so that was pretty cool. I was
   just curious as to why I didn't have to use the 'on' method to show/hide my feed objects but I guessed it was because we were using ajax to load them in and not 
   "dynamically creating them using jQuery methods. Probably my best page (functionality wise) to date and nice to see improvement. 

Plan: 
make it like landing page from lab 4 with header and all of that, when cllick on RSS it appears using "show" method from prior lab
be sure to have scroll on
   add Atom Styled after the link button
   same thing when clicking on atom, 


Current: 
   making RSS box 

Before submit:

Questions: 
   why do I not have to use on method to fade in and out? 
      could it be because the elements were added through ajax function which has different implications then adding them through jquery functions from lab6 
      How do I get the footer to work better without being fixed and not having spacer? 

Things I learned: 
     border: 1px solid black;
     href="#" -> default placeholder 
      Centers every div:
         width: 30%;
         margin: auto;
         text-align: center;
      target='_blank' -> open in new window
      must include js defining script before javascript file in header
      footerPadding Strategy

Future Notes: 
   Fix lab6 Footer

________________________________________________________________________________________________________________________________________________

Lab 8 notes: 
Summary: This lab got me very comfortable with AJAX so that was defintley good, I enjoyed going through the different jQuery effects availible in order to make my 
page look cool and that was pretty fun. It was also pretty satisfying to be able to use the if-statments to make the reading and formatting of my json file much easier. 
This is mostly because I had already had prior experience with them and really knew what I was doing. I got the hand of making the json file pretty quickly as in my head I was just 
manually definining the contents of an array. 
Notes: From the instructions, I got the feeling that the resultant dynamically created webpage should look exactly like my orginal so thats what I did. 
The only difference in the HTML is the link references. The places in which I tried to be creative were the jQuery effects because that is something I could 'add-on' 
without changing to actual look of my projects page so that it was still equal to the original. 

to do: 
   Remeber on use case for definiting things that were dynamically added to the web page 
   link to same resources file as original projects.html webpage
   Make each function for each container type in json 
   For each rel link add ../ to everything except for head links
      use if statement


JSON Comments: 
   //use this for id as well
         //use if statement to read if flex or botton attributes
               // Each is a link tag to be added to the head

Before submit: 
   Research jQueryUI and how to spice up my website
   check to make sure websites exact

Potential sources of error: 
   omission of cross origin 

Questions: 
   Why do I not need to use on for sliding in elements 
   Also why must header slide in be in ajax function?
      along with footer, why can't 
   Why can't I put setTimeout in ajax function
   Going forward post lab 8, should I rer-route my website for my lab homebage to go to the one read in by the Json and delete the old one?

Things I learned: 

   (window).on('load': very similar to document ready but better for using on method 

   can view appended html using inspect for chrome
      chrome auto-next lines for tags

   $.each(collection, function(index, value)
      Collection is the array and list in which this method is iterating through. the second argument in the function to be applied to each object

   Various AJAx notes located in the lab7 solved
   getJSON usage on line 184 of the JS


________________________________________________________________________________________________________________________________________________

Lab 6 notes: 
Summary: 
Good lab and I got a lot more familliar with Jquery because of it. The most challenging part was probably figuring out a solution to problem 4b
but it was satisfying to get. I also am glad I learned about the toggleClass method because I feel like that will be extremley helpful in the future. 

Response to 4b: 
When I click I my new list item, it turns red, it I click it again it turns black. It works this way because when implementing my solution 
to problem 3 I used the '.on' method. This allows for dynamically added elements to be binded by events, (such as the new list items) to be able to
have their class updated when they are clicked on. Its important to note that I had to specify my 'parent element' (the list itself) in the 
selector in order for the function to work correctly.


to do: 

Before submit: 
uncomment dom loaded alerts

Things I learned: 

ready only executes when entire dom is loaded, it's like the main

supposed to define function in event handler argument

<pre> tag stands for "preformatted text." It is used to display text exactly as it appears in the HTML code

.slideToggle

When writing inline, thats when you use the noconflict thign with '$'

Fade out function number argument represents miliseconds

Can change the cursor type in css

Toggle class extremley helpful 

Must use selector of parent element (after $) when using .on method

future notes:

Use find . -name .DS_Store -print0 | xargs -0 git rm --ignore-unmatch command to delete DS store

Fix footer covering issue when minimizing

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
