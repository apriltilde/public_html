<?php

// Specify the directory you want to analyze with du
$directory = '../';

// Specify the file where you want to save the du output
$outputFile = 'du.txt';

// Clear the contents of the output file
file_put_contents($outputFile, '');

// Run the du command and capture the output
$duOutput = shell_exec('du -sh ' . escapeshellarg($directory));

// Save the du output to the text file
file_put_contents($outputFile, $duOutput);

// Output a message indicating success or failure
if ($duOutput !== null) {
    echo 'du command executed successfully. Results saved to ' . $outputFile;
} else {
    echo 'Error executing the du command.';
}

?>

