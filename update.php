<?php

function findMostRecentHtmlFile($dir) {
    $iterator = new RecursiveIteratorIterator(
        new RecursiveDirectoryIterator($dir, RecursiveDirectoryIterator::SKIP_DOTS),
        RecursiveIteratorIterator::CHILD_FIRST
    );

    $mostRecentFile = null;
    $mostRecentTime = 0;

    foreach ($iterator as $file) {
        if ($file->isFile() && $file->getExtension() === 'html') {
            $modifiedTime = $file->getMTime();
            if ($modifiedTime > $mostRecentTime) {
                $mostRecentFile = $file->getPathname();
                $mostRecentTime = $modifiedTime;
            }
        }
    }

    return $mostRecentFile;
}

$directory = '/home/april/public_html'; // Replace with the path to your directory
$mostRecentHtmlFile = findMostRecentHtmlFile($directory);

$response = [];

if ($mostRecentHtmlFile) {
    $response['message'] = 'Success';
    $response['data']['mostRecentHtmlFile'] = $mostRecentHtmlFile;
    $response['data']['lastModified'] = date('Y-m-d H:i:s', filemtime($mostRecentHtmlFile));
} else {
    $response['message'] = 'No HTML files found in the specified directory.';
}

echo json_encode($response);
?>

