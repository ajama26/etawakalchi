<?php
header("Access-Control-Allow-Origin: *");
//header("Content-Type: application/json; charset=UTF-8");


//$connection = mysqli_connect('localhost', 'abshir', 'abshir26', 'xafiis');
$connection = mysqli_connect('localhost', 'myuser', 'abshir26', 'etawakal');

$dat = json_decode(file_get_contents("php://input"));

global $connection;

$data = array();

$sql = "select sum(idbalance) from amano where customer_id = $dat";
    $result = mysqli_query($connection, $sql);
while ($row = mysqli_fetch_assoc($result)){
    $sum = $row['total'];

}
echo json_encode($sum);




//    


?>