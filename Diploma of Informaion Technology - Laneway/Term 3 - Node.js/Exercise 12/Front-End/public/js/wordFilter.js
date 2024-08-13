const form = document.getElementById('profanity-form');
const container =  document.querySelector('.container.hidden');
const containerTitle = document.querySelector('.container h2');
const containerConsole = document.querySelector('.container p');
const containerButton = document.querySelector('.container button');

function isPoliteOrNot(title, data, style, textBtn) {
    container.className = 'container';
    containerTitle.textContent = title;
    containerConsole.textContent = data;
    containerConsole.className = style;
    containerButton.textContent = textBtn;
    document.getElementById('message').value = '';
}

function resetVariables() {
    form.className = 'profanity-form';
    container.className = 'container hidden';
}

form.addEventListener('submit', async function(event) {
    event.preventDefault();

    const message = document.getElementById('message').value;
    const response = await fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
    });

    if (response.ok) {
        const data = await response.json();
        form.className = 'hidden';
        if(data.original === data.modified) {
            isPoliteOrNot('Congratulations, your sentence has no swear words.', '✔ ' + data.original, 'console-success', 'You did it!');
        } else {
            isPoliteOrNot('We really believe you can do it, mate!', '✖ ' + data.modified, 'console-error', 'Try Again');
        }
    } else {
        console.error('Error:', response.statusText);
    }
});

containerButton.addEventListener('click', resetVariables);

