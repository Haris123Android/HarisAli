
<!DOCTYPE html>
<html>
<head>
<style>
table {
  width: 50%;
  border-collapse: collapse;
}

table, td, th {
  border: 1px solid black;
  padding: 5px;
}

th {text-align: left;}
</style>
</head>
<body>

<?php
$q = intval($_GET['q']);

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "shop";

$con = new mysqli($servername, $username, $password, $dbname);

if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}

$sql="SELECT * FROM products WHERE pid = '".$q."'";
$result = mysqli_query($con,$sql);

echo "<table>
<tr>
<th>Product ID</th>
<th>Product Name</th>
<th>Type</th>
<th>Unit Price</th>
<th>Product Image</th>
</tr>";
while($row = mysqli_fetch_array($result)) {
  echo "<tr>";
  echo "<td>" . $row['pid'] . "</td>";
  echo "<td>" . $row['pname'] . "</td>";
  echo "<td>" . $row['ptype'] . "</td>";
  echo "<td>" . $row['price'] . "</td>";
  echo "<td>" . "<img src='./images/". $row['pimage']. "' width=300 height=300>" . "</td>";
  echo "</tr>";
}
echo "</table>";
mysqli_close($con);
?>
</body>
</html> 