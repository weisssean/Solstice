<?php

$string = file_get_contents("/assets/data/bills.json");
$data = json_decode($string, true);
         $character = json_decode($data);
         echo json_encode($character, JSON_UNESCAPED_UNICODE);
?>



