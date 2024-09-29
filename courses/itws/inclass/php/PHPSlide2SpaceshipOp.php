

<pre>
  <p>Spaceship operator <=>

<?php

/* How it works: 

f the left operand is less than the right operand, <=> returns -1.
If the left operand is equal to the right operand, <=> returns 0.
If the left operand is greater than the right operand, <=> returns 1.

*/

// This will only work in PHP7.1+
$a=1;
$b=2;
echo "$a<=>$b == ";
echo $a<=>$b;
echo '<br/>';

$a=1;
$b=1;
echo "$a<=>$b == ";
echo $a<=>$b;
echo '<br/>';


$a=2;
$b=1;
echo "$a<=>$b == ";
echo $a<=>$b;
echo '<br/>';
?>
</pre>

