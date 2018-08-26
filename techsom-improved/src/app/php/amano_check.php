<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$data = json_decode(file_get_contents("php://input"));


//$connection = mysqli_connect('localhost', 'abshir', 'abshir26', 'xafiis');
$connection = mysqli_connect('localhost', 'myuser', 'abshir26', 'etawakal');

global $connection;


$sql="SELECT r_balance as total FROM amano where phone = '$data->phone'";

$result = mysqli_query($connection, $sql);

while ($row = mysqli_fetch_assoc($result)){
    $sum = $row['total'];
    
}

if(!$sum){  
$sql = "INSERT INTO amano (firstname, lastname, phone, r_balance)
VALUES ('$data->firstname', '$data->lastname', '$data->phone', 0)";    
$resul = mysqli_query($connection, $sq);
if($data->firstname != null){
$qry = mysqli_query($connection, $sql);
}
    
}else {
    $jaw = "no"
 echo json_encode($jaw);   
}



//    


?>