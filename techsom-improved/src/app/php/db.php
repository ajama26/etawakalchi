<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$servername = "localhost";
$username = "myuser";
$password = "abshir26";
$dbname = "etawakal";
$conn = new mysqli($servername, $username, $password, $dbname);
?>
