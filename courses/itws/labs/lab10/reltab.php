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


<h3>Movie Actor Relationships</h3>
<table id="actorTable">
   <?php
   if ($dbOk) {

      $query = 'select * from movie_actors order by itemid';
      $result = $db->query($query);
      $numRecords = $result->num_rows;

      echo '<tr><th>Movie:</th><th>Actor name:</th><th></th></tr>';
      for ($i = 0; $i < $numRecords; $i++) {
         $record = $result->fetch_assoc();

         $actquery = 'select last_name, first_name from actors where actorid = ' . $record['actorid']; 
         $actRes = $db->query($actquery);
         $actRec = $actRes->fetch_assoc(); 
         
         $movquery = 'select title from movies where movieid = ' . $record['movieid']; 
         $movRes = $db->query($movquery);
         $movRec = $movRes->fetch_assoc(); 

         if ($i % 2 == 0) {
            echo "\n" . '<tr id="rel-' . $record['itemid'] . '"><td>';
         } else {
            echo "\n" . '<tr class="odd" id="rel-' . $record['itemid'] . '"><td>';
         }
         echo htmlspecialchars($movRec['title']);
         echo '</td><td>';
         echo htmlspecialchars($actRec['last_name']) . ', ';
         echo htmlspecialchars($actRec['first_name']);
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