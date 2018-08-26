<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$data = json_decode(file_get_contents("php://input"));


//$connection = mysqli_connect('localhost', 'abshir', 'abshir26', 'xafiis');
$connection = mysqli_connect('localhost', 'myuser', 'abshir26', 'etawakal');

global $connection;

$sql = "select * from amano where id =$data limit 1";

$result = mysqli_query($connection, $sql);

$data = array();

while($abshir = mysqli_fetch_array($result)){
    
    $data[] = $abshir;
    
}

echo json_encode($data);





//    


?>