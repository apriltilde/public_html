<?php

$name = $_GET['name'];
$age = $_GET['age'] ?? '';
$address = $_GET['address'] ?? '';

class MyDB extends SQLite3 {
    function __construct() {
        $this->open('databasename.db');
    }
}

$db = new MyDB();

$sql = $db->prepare("INSERT INTO tablename (name, age, address, date) VALUES (:name, :age, :address, CURRENT_TIMESTAMP)");
$sql->bindValue(':name', $name, SQLITE3_TEXT);
$sql->bindValue(':age', $age, SQLITE3_INTEGER);
$sql->bindValue(':address', $address, SQLITE3_TEXT);
$ret = $sql->execute();

if (!$ret) {
    echo $db->lastErrorMsg();
} else {
    echo 'Records created successfully';
    echo $db->lastInsertRowid();
}

$db->close();
?>
