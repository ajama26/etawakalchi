<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";
$sql = "INSERT INTO amano (firstname, lastname, phone)
VALUES ('$data->firstname', '$data->lastname', '$data->phone')";
$qry = $conn->query($sql);

$conn->close();
?>