

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
