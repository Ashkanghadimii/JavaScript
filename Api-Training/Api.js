async function getCatFact() {
    try {
        const response = await fetch('https://catfact.ninja/fact');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const factElement = document.getElementById('fact');
        factElement.textContent = data.fact;
    } catch (error) {
        console.error('Error fetching cat fact:', error);
        document.getElementById('fact').textContent = 'Failed to load cat fact. Please try again.';
    }
}

async function getFunFact() {
    try {
        const response = await fetch('http://numbersapi.com/random/trivia');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const fact = await response.text();
        const funFactElement = document.getElementById('funFact');
        funFactElement.textContent = fact;
    } catch (error) {
        console.error('Error fetching fun fact:', error.message);
        document.getElementById('funFact').textContent = `Failed to load fun fact: ${error.message}`;
    }
}

async function getJoke() {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const jokeElement = document.getElementById('joke');
        jokeElement.textContent = data.joke;
    } catch (error) {
        console.error('Error fetching joke:', error);
        document.getElementById('joke').textContent = 'Failed to load joke. Please try again.';
    }
}