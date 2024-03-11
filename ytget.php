<?php
// SQLite database configuration
$dbPath = 'data.db'; // Modify this to the path where you want to store the SQLite database
$db = new SQLite3($dbPath);

// Create the 'videos' table if not exists

// Retrieve the video with the latest timestamp
$query = $db->query('SELECT * FROM videos ORDER BY timestamp DESC LIMIT 1');
$latestVideo = $query->fetchArray(SQLITE3_ASSOC);

if ($latestVideo) {
    // Check if the video timestamp is older than 10 minutes
    $timestamp = strtotime($latestVideo['timestamp']);
    $currentTime = time();
    $tenMinutesAgo = $currentTime - (10 * 60); // 10 minutes in seconds

    echo "<div class='music-container'>";

    if ($timestamp >= $tenMinutesAgo) {
        // Display information about the latest video within the div
        echo "<div class='thumbnail-container'>";
        echo "<img class='thumbnail' src='{$latestVideo['img']}' alt='Thumbnail'>";
        echo "</div>";

        echo "<marquee direction='left' behavior='scroll' scrollamount='3'>";
        echo "<a href='{$latestVideo['url']}' target='_blank'>";
        echo "{$latestVideo['title']}, </a>";
        echo "<a href='{$latestVideo['channel_url']}'>{$latestVideo['channel_title']}</a>";
        echo "</marquee>";

        echo "<p>Repeats: {$latestVideo['views']}</p>";
    } else {
        echo "Not listening to anything right now.";
    }

    echo "</div>";
} else {
    echo "<p>No videos found in the database.</p>";
}

// Close the database connection
$db->close();
?>

