<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";
$sql = "delete from amano where id = '$data'";
$qry = $conn->query($sql);

$sql2 = "delete from amano where customer_id = '$data'";
$qry2 = $conn->query($sql2);
$conn->close();
?>