
<?php
@$db = new mysqli('localhost', 'root', 'password', 'myWebSite');


$insQuery = "insert into mylabs (`rel`, `href`, `labType`) values(?,?,?)";
$statement = $db->prepare($insQuery);
$statement->bind_param("sss", $relFromForm, $hrefFromForm, $labTypeFromForm);
$statement->execute();


$havePost;
if($_SERVER['REQUEST_METHOD'] == 'POST'){ 
   $havePost = isset($_GET["save"]);
}
if($_SERVER['REQUEST_METHOD'] == 'GET'){
   $havePost = isset($_POST["save"]);
}

$headID = htmlspecialchars(trim($_POST["headID"]));
$rel = htmlspecialchars(trim($_POST["rel"]));
$href = htmlspecialchars(trim($_POST["href"]));
$labType = htmlspecialchars(trim($_POST["labType"]));

echo $headID . ' ' . $rel . ' ' . $href . ' ' . $labTYpe;

?>

