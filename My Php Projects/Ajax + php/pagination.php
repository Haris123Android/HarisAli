<script>
    function goto(loc)
    {
        let startrec = (parseInt(document.getElementById('pno').value)-1) * 10;

        location.href= loc + startrec;
    }
</script>

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

$recPerPage = 10;
$start = $_GET['start'];


$sql = "select * from employees limit $start, $recPerPage";
$result = $con->query($sql);

if($result->num_rows>0)
{
    echo "<table border=1>";
    echo "<tr> <th>Employee Name</th> <th>Gender</th> <th>Hired On</th> </tr>";

    while($row = $result->fetch_assoc())
    {
        echo "<tr><td>". $row['first_name']." ".$row['last_name']."</td><td>".$row['gender']."</td><td>".$row['hire_date']."</td></tr>";
    }
    echo "</table>";
}
else
    echo "No records found!";

// Previous Records
$prevset = $start-$recPerPage;
echo "<br><a href=".$_SERVER['PHP_SELF']."?start=$prevset>Previous   </a>";

//Next Records
$nextset = $start+$recPerPage;
echo "<a href=".$_SERVER['PHP_SELF']."?start=$nextset>   Next</a>";

$con->close();

?>

Goto: Page# <input type="text" name="pno" id="pno">
<input type="button" value="Go" onclick=goto(<?php echo "'".$_SERVER['PHP_SELF']."?start="."'"; ?>) >