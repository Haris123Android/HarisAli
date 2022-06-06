<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "icp";

$con = new mysqli($servername, $username, $password, $dbname);

if($con->connect_error)
    echo $con->connect_error;
else
    echo "Connected Successfully<br>";

$colname = $_GET['col'];
$val = $_GET['val'];


$sql = "select * from employees where $colname = $val limit 10";
$result = $con->query($sql);

if($result->num_rows>0)
{
    echo "<table border=1>";
    echo "<tr> <th>Employee Name</th> <th>Gender</th> <th>Hired On</th> </tr>";

    while($row = $result->fetch_assoc())
    {
        $k = array_keys($row);
        echo $k[1];
        // echo "<tr><td>". $row['COLUMN_NAME']." ".$row['last_name']."</td><td>".$row['gender']."</td><td>".$row['hire_date']."</td></tr>";
    }
    echo "</table>";
}
else
    echo "No records found!";


$row = array_keys($result->fetch_assoc());
echo ($row);
$con->close();

?>