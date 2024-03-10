function submitStrawberry() {
    var username = document.getElementById('text17').value;
    var berryType = 'berry_2';

    // Execute the PHP script to add IP, username, and berryType
    $.get({
        url: '../../strawberry.php',
        data: { berryType: berryType, username: username },
        dataType: 'text',
        success: function () {
            alert("strawberry collected, congrats "+ username);
        },
        error: function () {
            alert('Failed to execute strawberry command.');
        }
    });
}
