<!-- The include (or require) statement takes all the text/code/markup 
that exists in the specified file and copies it into the file that 
uses the include statement. 

    require will produce a fatal error (E_COMPILE_ERROR) and stop the script
    include will only produce a warning (E_WARNING) and the script will continue


    
-->

<html>
<body>

<h1>Welcome to my home page!</h1>
<p>Some text.</p>
<p>Some more text.</p>
<?php require 'footer1.php';?>

<p>After include...</p>

</body>
</html> 