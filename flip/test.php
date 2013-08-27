<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>Little Monni Demo</title>

	<link rel="stylesheet" type="text/css" href="styles.css" />

	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.7.2/jquery-ui.min.js"></script>
	<script type="text/javascript" src="jquery.flip.min.js"></script>

	<script type="text/javascript" src="script.js"></script>
</head>

<body>

<h1>Little Monni Demo</h1>

<?php

// Each sponsor is an element of the $sponsors array:

$sponsors = array(
	array('facebook.png'),
	array('adobe.png'),
	array('microsoft.png'),
	array('sony.png'),
	array('dell.png'),
	array('ebay.png'),
	array('digg.png'),
	array('google.png'),
	array('ea.png'),
	array('mysql.png'),
	array('hp.png'),
	array('yahoo.png'),
	array('cisco.png'),
	array('vimeo.png'),
	array('canon.png')
);


// Randomizing the order of sponsors:

shuffle($sponsors);

?>

<div id="main">
	<div class="sponsorListHolder">

        <?php
			// Looping through the array:
			
			foreach($sponsors as $company)
			{
				echo'
				<div class="sponsor" title="Click to flip">
					<div class="sponsorFlip">
						<img src="img/sponsors/'.$company[0].'" alt="More about '.$company[0].'" />
					</div>
					
					<div class="sponsorData">
						<img src="img/sponsors/'.$company[0].'" alt="More about '.$company[0].'" />
					</div>
				</div>
				
				';
			}
		
		?>
        
    	<div class="clear"></div>
    </div>
</div>

</body>
</html>
