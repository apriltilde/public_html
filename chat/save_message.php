<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = isset($_POST["name"]) && !empty($_POST["name"]) ? $_POST["name"] : "Anonymous";
    $color = $_POST["color"] ?? "#000000";
    $website = $_POST["website"] ?? "";
    $message = $_POST["message"] ?? "";

if ($message !== "") {
        // Get the current timestamp
        $timestamp = date("d/m/Y H:i:s");
        // Format the message with name, color, website, and timestamp
        $formattedMessage = '[' . $timestamp . '] <strong style="color: ' . $color . ';">' . $name . '</strong>';
        if ($website !== "") {
            $formattedMessage .= ' (<a href="' . $website . '" target="_blank">' . "website" . '</a>): ';
        } else {
            $formattedMessage .= ': ';
        }
        $formattedMessage .= $message;

        // Append the formatted message to the chatlog.txt file
        $file = "chatlog.txt";
        $currentContent = file_get_contents($file);
        file_put_contents($file, $formattedMessage . PHP_EOL, FILE_APPEND);
    }
}

?>

