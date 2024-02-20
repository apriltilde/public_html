function getSheet(url) {
    return new Promise(function (resolve, reject) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    reject('Could not find Google Sheet with that URL'); // Checking for a 404
                } else {
                    response.text().then(data => {
                        if (!data) {
                            reject('Invalid data pulled from sheet');
                        }
                        resolve(data);
                    });
                }
            })
            .catch(error => {
                reject('Error fetching data: ' + error);
            });
    });
}

function createPostElement(comment) {
    const postContainer = document.createElement('div');
    postContainer.classList.add('post');

    const nameElement = document.createElement('div');
    const nameParagraph = document.createElement('p');
    nameParagraph.style.float = 'left';
    nameParagraph.style.color = 'var(--highlight-colour)';
    nameParagraph.textContent = comment.Name;
    nameElement.appendChild(nameParagraph);

    const messageBodyParagraph = document.createElement('p');
    messageBodyParagraph.textContent = comment.MessageBody;
    messageBodyParagraph.innerHTML = comment.MessageBody.replace(/<br>/g, '<br>'); // Replace <br> with actual line breaks
    const timestampElement = document.createElement('div');
    timestampElement.className = 'timestamp';
    const timestampParagraph = document.createElement('p');
    timestampElement.style.float = 'right';
    timestampParagraph.style.color = 'var(--highlight-colour)';
    timestampParagraph.textContent = comment.Timestamp2;
    timestampElement.appendChild(timestampParagraph);

    postContainer.appendChild(nameElement);
    postContainer.appendChild(messageBodyParagraph);
    postContainer.appendChild(timestampElement);

    return postContainer;
}

function getComments() {
    // Get the data
    const url = 'https://docs.google.com/spreadsheets/d/1BHFcHR_RRcf-g2Dw6D4v3Huf5NOJBte6vIly9fHfmQA/export?format=csv';
    const retrievedSheet = getSheet(url);

    // Do stuff with the data here
    retrievedSheet.then(result => {
        // Split CSV into rows
        const rows = result.split('\n');

        // Extract header and data
        const headers = rows[0].split(',');
        const data = rows.slice(1);

        // Process data
        const pageIdx = 1; // Assuming pageIdx is defined somewhere in your code
        const messageIdx = 2; // Assuming message body is at index 2, adjust as needed

        const postsContainer = document.getElementById('posts-container');

        data.forEach(row => {
            const columns = row.split(',');
            let comment = {};
            comment[headers[pageIdx]] = columns[pageIdx];
            comment[headers[1]] = columns[1];
            comment.Timestamp2 = columns[0];
            
            // Remove "/r" from the message body
            const rawMessageBody = columns[messageIdx] || ''; // Handle the case where the column might be empty
            comment.MessageBody = rawMessageBody.replace('/r', '');

            const postElement = createPostElement(comment);
            postsContainer.appendChild(postElement);

        });
    });
}

getComments()

