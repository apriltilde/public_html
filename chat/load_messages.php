<?php

// Read existing messages from the chatlog.txt file
$file = "chatlog.txt";
$messages = file($file, FILE_IGNORE_NEW_LINES);

// Send messages as JSON response
header('Content-Type: application/json');
echo json_encode($messages);

?>

