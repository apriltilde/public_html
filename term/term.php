<?php

// Specify the directory you want to run the tree command on
$directory = '../';

// Specify the file where you want to save the tree output
$outputFile = 'tree.txt';

// Clear the contents of the output file
file_put_contents($outputFile, '');

// Run the tree command and capture the output
$treeOutput = shell_exec('tree ' . escapeshellarg($directory));

// Save the tree output to the text file
file_put_contents($outputFile, $treeOutput);

// Output a message indicating success or failure
if ($treeOutput !== null) {
    echo 'Tree command executed successfully. Results saved to ' . $outputFile;
} else {
    echo 'Error executing the tree command.';
}

?>

