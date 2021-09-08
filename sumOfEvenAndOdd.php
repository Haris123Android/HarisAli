
    <?php
	
    for ($i=1; $i<=100; $i++) {
         
    if($i%2==0) {
            //echo $i."<br>";
    @$even=$even+$i;
          
    }
    else{
              
    @$odd=$odd+$i;
          
    }
           
} 
    echo "Sum of even numbers=".$even."<br/>";
        
     echo "Sum of odd numbers=".$odd;
     
    ?>