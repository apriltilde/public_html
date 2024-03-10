<?php
if (empty($_SERVER['HTTP_X_REQUESTED_WITH']) || strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) !== 'xmlhttprequest') {
    http_response_code(403); // Forbidden
    echo "Forbidden: Direct access not allowed.";
    exit;
}

$berryType = $_GET['berryType'] ?? '';
$username = $_GET['username'] ?? '';
$userIp = $_SERVER['REMOTE_ADDR'];

class MyDB extends SQLite3 {
    function __construct() {
        $this->open('users.db');
    }
}

$db = new MyDB();



// Retrieve the existing berryType for the given userIp
$query = $db->prepare("SELECT berryType FROM berries WHERE ip = :userIp");
$query->bindValue(':userIp', $userIp, SQLITE3_TEXT);
$result = $query->execute();
$existingBerryType = $result->fetchArray(SQLITE3_ASSOC)['berryType'];

// Check if the new berryType is already contained in the existing berryType
if ($existingBerryType !== null && strpos($existingBerryType, $berryType) === false) {
    // If not, append the new value
    $berryType = $existingBerryType . ', ' . $berryType;
}

$sql = $db->prepare("INSERT OR REPLACE INTO berries (ip, username, berryType, date) VALUES (:userIp, :username, :berryType, CURRENT_TIMESTAMP)");
$sql->bindValue(':userIp', $userIp, SQLITE3_TEXT);
$sql->bindValue(':username', $username, SQLITE3_TEXT);
$sql->bindValue(':berryType', $berryType, SQLITE3_TEXT);
$ret = $sql->execute();

if (!$ret) {
    echo $db->lastErrorMsg();
} else {
    echo 'Congrats ', $username, ': Strawberry found!';
}

$db->close();
?>

