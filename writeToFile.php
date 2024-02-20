<?php
// Get the user's IP address
$userIp = $_SERVER['REMOTE_ADDR'];

// Convert IPv6 to IPv4 if applicable
if (filter_var($userIp, FILTER_VALIDATE_IP, FILTER_FLAG_IPV6)) {
    $ipv4 = inet_ntop(inet_pton($userIp));
    $userIp = $ipv4 ? $ipv4 : $userIp;
}

// Extract the first 64 bits from the user's IP address
$prefixToCheck = substr($userIp, 0, 16);

// Read the existing content of the file
$currentContent = file_get_contents("./output.txt");

// Check if the user's IP is already in the file
if (strpos($currentContent, $prefixToCheck) !== false) {
    // If found, update the timestamp for that IP address
    $lines = explode(PHP_EOL, $currentContent);
    foreach ($lines as &$line) {
        if (strpos($line, $prefixToCheck) !== false) {
            // Update the timestamp for the found IP address
            $line = date('Y-m-d H:i:s') . ' - ' . $userIp;
        }
    }

    // Implode the updated lines and write back to the file
    $updatedContent = implode(PHP_EOL, $lines);
    file_put_contents("./output.txt", $updatedContent);

    echo 'Timestamp updated successfully';
} else {
    // If not found, append the new data to the file
    $timestamp = date('Y-m-d H:i:s');
    $data = $timestamp . ' - ' . $userIp;

    if (file_put_contents("./output.txt", $data . PHP_EOL, FILE_APPEND) !== false) {
        echo 'File written successfully';
    } else {
        http_response_code(500);
        echo 'Error writing to file';
    }
}
?>

