<?php
if (empty($_SERVER['HTTP_X_REQUESTED_WITH']) || strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) !== 'xmlhttprequest') {
    http_response_code(403); // Forbidden
    echo "Forbidden: Direct access not allowed.";
    exit;
}

$username = $_GET['username'] ?? '';
$userIp = $_SERVER['REMOTE_ADDR'];

class MyDB extends SQLite3 {
    function __construct() {
        $this->open('users.db');
    }
}

$db = new MyDB();

// Check if berryType is provided in the request
if (isset($_GET['berryType']) && $_GET['berryType'] !== '') {
    $berryType = $_GET['berryType'];

    // Retrieve the existing berryType for the given userIp
    $query = $db->prepare("SELECT berryType FROM berries WHERE ip = :userIp");
    $query->bindValue(':userIp', $userIp, SQLITE3_TEXT);
    $result = $query->execute();
    $existingBerryType = $result->fetchArray(SQLITE3_ASSOC)['berryType'];

    // Check if the new berryType is already contained in the existing berryType
    if ($existingBerryType !== null) {
        // Split existing and new berryType into arrays
        $existingBerries = explode(', ', $existingBerryType);
        $newBerries = explode(', ', $berryType);

        // Filter out existing berries from the new berries
        $newBerries = array_diff($newBerries, $existingBerries);

        // Combine existing berries and new berries
        $newBerryType = implode(', ', array_merge($existingBerries, $newBerries));
    } else {
        // If no existing berryType, set the new value
        $newBerryType = $berryType;
    }

    // Update berryType and username
    $sql = $db->prepare("UPDATE berries SET berryType = :newBerryType, username = :username, date = CURRENT_TIMESTAMP WHERE ip = :userIp");
    $sql->bindValue(':userIp', $userIp, SQLITE3_TEXT);
    $sql->bindValue(':newBerryType', $newBerryType, SQLITE3_TEXT);
    $sql->bindValue(':username', $username, SQLITE3_TEXT);
    $ret = $sql->execute();
} else {
    // No berryType provided, update userIp and timestamp
    $sql = $db->prepare("INSERT OR REPLACE INTO berries (ip, username, berryType, date) VALUES (:userIp, (SELECT username FROM berries WHERE ip = :userIp), (SELECT berryType FROM berries WHERE ip = :userIp), CURRENT_TIMESTAMP)");
    $sql->bindValue(':userIp', $userIp, SQLITE3_TEXT);
    $ret = $sql->execute();
}

if (!$ret) {
    echo $db->lastErrorMsg();
} else {
    echo 'Congrats ', $username, ': Strawberry found!';
}

$db->close();
?>

