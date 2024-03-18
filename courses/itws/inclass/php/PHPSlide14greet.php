<!-- Runs when form submitted -->

<p>Hello <?php echo $_POST["name"];?>.</p>
<pre>
  <?php
  print_r($_POST);
  ?>
</pre>
