<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");


//$connection = mysqli_connect('localhost', 'abshir', 'abshir26', 'xafiis');
$connection = mysqli_connect('localhost', 'myuser', 'abshir26', 'etawakal');

$dat = json_decode(file_get_contents("php://input"));

$id = $_GET['id'];

global $connection;


$sql = "UPDATE cash
SET description='$dat->description', amount='$dat->amount'
WHERE id=$dat->id limit 1";
$result = mysqli_query($connection, $sql);

//    


?>