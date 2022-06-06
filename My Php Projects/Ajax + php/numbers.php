<!DOCTYPE html>
<html>
    <!-- PHP has the following functions to check if the type of a variable is integer:

    is_int()
    is_integer() - alias of is_int()
    is_long() - alias of is_int() 

    
    is_float()
    is_double() - alias of is_float()


    -->

    
<body>

<?php
     $x = 5985;
     var_dump(is_int($x));
     
     $x = 59.85;
     var_dump(is_int($x));

     echo "<br>";

     // Cast float to int
    $x = 23465.768;
    $int_cast = (int)$x;
    echo $int_cast;

    echo "<br>";

    // Cast string to int
    $x = "23465.768";
    $int_cast = (int)$x;
    echo $int_cast;

    // PHP constants
    //  define(name, value, case-insensitive)

    define("GREETING", "Welcome to W3Schools.com!");
    echo GREETING;
?>

</body>
</html>