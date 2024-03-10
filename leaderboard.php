<?php
class MyDB extends SQLite3 {
    function __construct() {
        $this->open('users.db');
    }
}

$db = new MyDB();



// Query to get the top three usernames and their berry counts
$query =<<<EOF
    SELECT username,
           LENGTH(berryType) - LENGTH(REPLACE(berryType, ',', '')) + 1 AS berryCount
    FROM berries
    WHERE LENGTH(berryType) > 0
    ORDER BY berryCount DESC
    LIMIT 3;
EOF;

$result = $db->query($query);

if (!$result) {

} else {
    echo '<div id="leaderboard">';
    $counter = 1;
    while ($row = $result->fetchArray(SQLITE3_ASSOC)) {

        echo '<p>';
        echo ($counter == 1) ? '<img src="images/Golden_Strawberry.webp" alt="First Place">' : '';
	echo ($counter == 2) ? '<img src="images/Strawberry.webp" alt="Second Place">' : '';
        echo $row['username'] . ': ' . $row['berryCount'] ;
        echo '</p>';

        $counter++;
    }
    echo '</div>';
}

$db->close();
?>

