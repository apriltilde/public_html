<?php
class MyDB extends SQLite3 {
    function __construct() {
        $this->open('databasename.db');
    }
}

$db = new MyDB();

if (!$db) {
    echo $db->lastErrorMsg();
} else {
    echo "Opened database successfully\n";
}

// Query to select all records from the 'tablename'
$query = "SELECT * FROM tablename";
$result = $db->query($query);

if (!$result) {
    echo $db->lastErrorMsg();
} else {
    // Loop through the result set and display each row
    while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
	echo "<br>";
        echo "Name: {$row['name']}<br>";
        echo "Age: {$row['age']}<br>";
        echo "Address: {$row['address']}<br>";
        echo "Date: {$row['date']}<br>";
    }
}

$db->close();
?>

