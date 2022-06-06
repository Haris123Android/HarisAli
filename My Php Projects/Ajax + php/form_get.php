<html>
<body>

<!-- 
    $_GET is an array of variables passed to the current script via the URL parameters.
    $_POST is an array of variables passed to the current script via the HTTP POST method. 
-->

Welcome <?php echo $_POST["name"]; ?><br>
Your email address is: <?php echo $_POST["email"]; ?>

</body>
</html> 