<?php
header("Access-Control-Allow-Origin: *");
//header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");


//$connection = mysqli_connect('localhost', 'abshir', 'abshir26', 'xafiis');
$connection = mysqli_connect('localhost', 'myuser', 'abshir26', 'etawakal');
$dat = json_decode(file_get_contents("php://input"));
global $connection;

$data = array();

$sql = "select * from cash where id = $dat limit 1";
    $result = mysqli_query($connection, $sql);
while($abshir = mysqli_fetch_array($result)){
    $data[] = $abshir;
}


echo json_encode($data);




//    


?>