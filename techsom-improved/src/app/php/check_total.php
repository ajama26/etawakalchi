<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
//$data = json_decode(file_get_contents("php://input"));


//$connection = mysqli_connect('localhost', 'abshir', 'abshir26', 'xafiis');
$connection = mysqli_connect('localhost', 'myuser', 'abshir26', 'etawakal');

global $connection;

$data = array();

$sql="SELECT sum(amount) as total FROM checks";

$result = mysqli_query($connection, $sql);

while ($row = mysqli_fetch_assoc($result)){
    $sum = $row['total'];
}

$sq="SELECT sum(amount) as total FROM checks where status = 'Pending'";

$resul = mysqli_query($connection, $sq);

while ($ro = mysqli_fetch_assoc($resul)){
    $su = $ro['total'];
}

$s="SELECT sum(amount) as total FROM checks where status = 'Deposited'";

$resu = mysqli_query($connection, $s);

while ($r = mysqli_fetch_assoc($resu)){
    $s = $r['total'];
}

$sa="SELECT sum(amount) as total FROM checks where status = 'Approved'";

$resua = mysqli_query($connection, $sa);

while ($ra = mysqli_fetch_assoc($resua)){
    $sa = $ra['total'];
}

$data = [$sum, $su, $s, $sa];

echo json_encode($data);





//    


?>