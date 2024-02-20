<?php
// Read the existing content of the file
$currentContent = file_get_contents("./output.txt");

// Count the number of lines (IP addresses)
$ipCount = count(array_filter(explode(PHP_EOL, $currentContent)));

// Return the count as a JSON response
echo json_encode(['count' => $ipCount]);
?>

