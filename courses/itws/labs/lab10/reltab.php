<?php 
  include('includes/init.inc.php'); // include the DOCTYPE and opening tags
  include('includes/functions.inc.php'); // functions
?>

<title>PHP &amp; MySQL - ITWS</title>   

<?php
include('includes/head.inc.php');
// include global css, javascript, end the head and open the body
?>


<?php include('includes/menubody.inc.php'); ?>

<?php
// We'll need a database connection both for retrieving records and for
// inserting them.  Let's get it up front and use it for both processes
// to avoid opening the connection twice.  If we make a good connection,
// we'll change the $dbOk flag.
$dbOk = false;

/* Create a new database connection object, passing in the host, username,
     password, and database to use. The "@" suppresses errors. */
@$db = new mysqli('localhost', 'phpmyadmin', 'Fodphpftw2', 'iit');

if ($db->connect_error) {
   echo '<div class="messages">Could not connect to the database. Error: ';
   echo $db->connect_errno . ' - ' . $db->connect_error . '</div>';
} else {
   $dbOk = true;
}

?>


<h3>Movie Actor Rels</h3>
<table id="actorTable">
   <?php
   if ($dbOk) {

      $query = 'select * from movie_actors order by itemid';
      $result = $db->query($query);
      $numRecords = $result->num_rows;

      echo '<tr><th>Movie:</th><th>Actor name:</th><th></th></tr>';
      for ($i = 0; $i < $numRecords; $i++) {
         $record = $result->fetch_assoc();
         if ($i % 2 == 0) {
            echo "\n" . '<tr id="actor-' . $record['actorid'] . '"><td>';
         } else {
            echo "\n" . '<tr class="odd" id="actor-' . $record['actorid'] . '"><td>';
         }
         echo htmlspecialchars($record['last_name']) . ', ';
         echo htmlspecialchars($record['first_name']);
         echo '</td><td>';
         echo htmlspecialchars($record['dob']);
         echo '</td><td>';
         echo '<img src="resources/delete.png" class="deleteActor" width="16" height="16" alt="delete actor"/>';
         echo '</td></tr>';
         // Uncomment the following three lines to see the underlying
         // associative array for each record.
         // echo '<tr><td colspan="3" style="white-space: pre;">';
         // print_r($record);
         // echo '</td></tr>';
      }

      $result->free();

      // Finally, let's close the database
      $db->close();
   }

   ?>
</table>

<?php include('includes/foot.inc.php');
// footer info and closing tags
?>