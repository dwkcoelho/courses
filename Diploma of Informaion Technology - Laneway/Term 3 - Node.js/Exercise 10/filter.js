// Function to check a single word
async function checkWord(word) {
    try {
        const response = await fetch('/check-profanity', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: word })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        return { word, result };
    } catch (error) {
        console.error('Error checking word:', error);
        return { word, result: { error: error.message } };
    }
}

async function getRhymeWords(words) {
    const rhymePromises = words.map(async word => {
        try {
            const response = await fetch('/rhyme', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ text: word })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            return { word, rhyme: result || "No rhyme found" };

        } catch (error) {
            console.error('Error getting rhyme:', error);
            return { word, rhyme: "Error fetching rhyme" };
        }
    });

    return Promise.all(rhymePromises);

}

document.getElementById('profanity-form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const text = document.getElementById('phrase').value;
    const resultDiv = document.getElementById('result');

    // Split the input text into words
    const words = text.split(" ");

    // Container for storing the results
    let results = [];

    // Check each word and collect results
    const promises = words.map(word => checkWord(word));
    results = await Promise.all(promises);
    console.log(results)
    // Collect bad words
    const badWords = results
        .filter(({ result }) => result.has_profanity === true) // Filter results with profanity
        .map(({ word }) => word); // Collect the bad words
    console.log(badWords)

        if (badWords.length > 0) {
            const rhymeWords = await getRhymeWords(badWords);
            console.log(rhymeWords)

            let rhymeSub = []
            rhymeWords.forEach(rhyme => {
                rhymeSub.push(rhyme.rhyme[(Math.floor(Math.random() * rhyme.rhyme.length))])
            })
            console.log(rhymeSub)
            let phraseFix = ''
            let i = 0
            results.forEach(({ result }) => {
                if (result.has_profanity) {
                    // Log the entire result object
                    console.log('Original Word:', result.original);
                    result.original = rhymeSub[i]
                    i++
                }
                phraseFix+= ` ${result.original}`
            });
            resultDiv.textContent = phraseFix
        }
});