<html>
<head>
<script>
function showProduct(str) {
  if (str == "") {
    document.getElementById("txtHint").innerHTML = "";
    return;
  } else {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("txtHint").innerHTML = this.responseText;
      }
    };
    xmlhttp.open("GET","getProd.php?q="+str,true);
    xmlhttp.send();
  }
}
</script>
</head>
<body>

<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "shop";

$con = new mysqli($servername, $username, $password, $dbname);

if($con->connect_error)
    echo $con->connect_error;
else
    echo "Connected Successfully<br>";

    $sql = "SELECT DISTINCT ptype from products";
$result = $con->query($sql);

if($result->num_rows>0)
{
    echo "<form>";
    echo "<select name='products' onchange='showProduct(this.value)'>";
    echo "<option value=''>Select a Product:</option>";

    while($row = $result->fetch_assoc())
    {
      
      echo "<option value='". $row['pid'] ."'>". $row['ptype'] ."</option>";
    }
    echo "</select>";
    echo "</form>";
}
else
    echo "No records found!";

$con->close();
?>

<br>
<div id="txtHint"><b>Product info will be listed here...</b></div>

</body>
</html> 