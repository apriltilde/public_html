<?php
// Create a class to handle the SQLite database connection
usleep( 500000 );
class MyDB extends SQLite3 {
    function __construct() {
        $this->open('users.db'); // Replace 'your_database.db' with your actual database file
    }
}

// Create a new instance of the database class
$db = new MyDB();

// Check if the database is open
if (!$db) {
    die($db->lastErrorMsg());
}

// Query to count the number of rows in the "berries" table
$sql = $db->prepare('SELECT COUNT(*) AS row_count FROM berries');

// Execute the prepared statement
$ret = $sql->execute();
// Fetch the result
$row = $ret->fetchArray(SQLITE3_ASSOC);
// Close the database connection
$db->close();
$rowCount = $row['row_count'];
// Output the result as JSON
echo json_encode(['count' => $rowCount])
;?>

