function addToDatabase() {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var address = document.getElementById('address').value;

    // Execute the PHP script to add data to the database
    var url = 'test.php'; // Replace with the actual path to your PHP script
    var params = 'name=' + encodeURIComponent(name) + '&age=' + encodeURIComponent(age) + '&address=' + encodeURIComponent(address);

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url + '?' + params, true);
    xhr.onload = function() {
        if (xhr.status == 200) {
            alert('Data added successfully!');
        } else {
            alert('Failed to add data to the database.');
        }
    };
    xhr.send();
}
