<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
$data = json_decode(file_get_contents("php://input"));
$connection = mysqli_connect('localhost', 'myuser', 'abshir26', 'etawakal');
global $connection;


$sql="SELECT r_balance as total FROM amano where phone = '$data->phone'";

$result = mysqli_query($connection, $sql);

while ($row = mysqli_fetch_assoc($result)){
    $sum = $row['total'];
    
}

if(!isset($sum)){
$time = time();

$sql_amano = "select sum(idbalance) as total from amano";
    $result_amano = mysqli_query($connection, $sql_amano);
while ($row_amano = mysqli_fetch_assoc($result_amano)){
    $sum_amano = $row_amano['total'];

}

$sql_dayn = "select sum(balance) as total from dayn";
    $result_dayn = mysqli_query($connection, $sql_dayn);
while ($row_dayn = mysqli_fetch_assoc($result_dayn)){
    $sum_dayn = $row_dayn['total'];

}


$sql_cash = "select sum(amount) as total from cash";
    $result_cash = mysqli_query($connection, $sql_cash);
while ($row_cash = mysqli_fetch_assoc($result_cash)){
    $sum_cash = $row_cash['total'];

}

$sql_initial = "select sum(amount) as total from initial";
    $result_initial = mysqli_query($connection, $sql_initial);
while ($row_initial = mysqli_fetch_assoc($result_initial)){
    $sum_initial = $row_initial['total'];

}

$sql_drop = "select sum(amount) as total from drope";
    $result_drop = mysqli_query($connection, $sql_drop);
while ($row_drop = mysqli_fetch_assoc($result_drop)){
    $sum_drop = $row_drop['total'];

}

$sql_check = "select sum(amount) as total from checks";
    $result_check = mysqli_query($connection, $sql_check);
while ($row_check = mysqli_fetch_assoc($result_check)){
    $sum_check = $row_check['total'];

}


$total = $sum_initial - $sum_dayn - $sum_drop + $sum_amano + $sum_cash + $sum_check;
    
$sq = "INSERT INTO histor (time, pertain, status, transaction, new_balance)
VALUES ('$time', 'Customer Registration', 'N/A', 0, $total)"; 

$sql = "INSERT INTO amano (firstname, lastname, phone, r_balance)
VALUES ('$data->firstname', '$data->lastname', '$data->phone', 0)";
if($data->firstname != null){
$qry = mysqli_query($connection, $sql);
$qry2 = mysqli_query($connection, $sq);
}
}else {
    $jaw = "no";
 echo json_encode($jaw);   
}





////include "db.php";
//$sql = "INSERT INTO amano (firstname, lastname, phone, r_balance)
//VALUES ('$data->firstname', '$data->lastname', '$data->phone', 0)";
//if($data->firstname != null){
//$qry = mysqli_query($connection, $sql);
//}
    

?>