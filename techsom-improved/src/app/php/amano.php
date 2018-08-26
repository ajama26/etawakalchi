<?php
header("Access-Control-Allow-Origin: *");
//header("Content-Type: application/json; charset=UTF-8");


//$connection = mysqli_connect('localhost', 'abshir', 'abshir26', 'xafiis');
$connection = mysqli_connect('localhost', 'myuser', 'abshir26', 'etawakal');

global $connection;

$sql = "select * from amano where firstname !='' order by id desc";

$result = mysqli_query($connection, $sql);

$data = array();

while($abshir = mysqli_fetch_array($result)){
    
    $data[] = $abshir;
    
}

echo json_encode($data);





//    


?>