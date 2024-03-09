<?php
$berryType = $_GET['berryType'] ?? '';
$userIp = $_SERVER['REMOTE_ADDR'];

class MyDB extends SQLite3 {
    function __construct() {
        $this->open('users.db');
    }
}

$db = new MyDB();

if (!$db) {
    echo $db->lastErrorMsg();
} else {
    echo "Opened database successfully\n";
}

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

// Use a prepared statement to avoid SQL injection
$sql = $db->prepare("INSERT OR REPLACE INTO berries (ip, berryType, date) VALUES (:userIp, :berryType, CURRENT_TIMESTAMP)");
$sql->bindValue(':userIp', $userIp, SQLITE3_TEXT);
$sql->bindValue(':berryType', $berryType, SQLITE3_TEXT);

$ret = $sql->execute();

if (!$ret) {
    echo $db->lastErrorMsg();
} else {
    echo "Record created or updated successfully\n";
}

$db->close();
?>

