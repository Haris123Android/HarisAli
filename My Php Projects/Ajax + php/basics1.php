<?php declare(strict_types=1); // strict requirement ?>

<!DOCTYPE html>
<html>
<body>

<?php
    date_default_timezone_set('Asia/Karachi');
    $t = date("H");
    echo $t;
    if ($t < "10") {
    echo "Have a good morning!";
    } elseif ($t < "20") {
    echo "Have a good day!";
    } else {
    echo "Have a good night!";
    }



    function addNumbers(int $a, int $b) {
      return $a + $b;
    }
    echo addNumbers(5, "5 days");
    // since strict is enabled and "5 days" is not an integer, an error will be thrown

?> 

</body>
</html>