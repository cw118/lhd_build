// Endpoint and joke(s) from https://jokes.one/api/joke

const jokeBtn = document.querySelector('#get-joke');
const jokeBox = document.querySelector('#joke-box');

// XMLHttpRequest method to make a GET request to JokesAPI (modified from their JS example)
jokeBtn.addEventListener('click', () => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
	 if (this.readyState == 4 && this.status == 200) {
	     // jokeBox.textContent = 
         let apiJoke = JSON.parse(this.responseText);
         jokeBox.textContent = apiJoke.contents.jokes[0].joke.text;
	 }
    };
    xhttp.open('GET', 'https://api.jokes.one/jod?clean=1', true);
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.setRequestHeader('X-JokesOne-Api-Secret', 'YOUR API HERE');
    xhttp.send();

    jokeBtn.disabled = true;
});

// PokéAPI at https://pokeapi.co/
// Where the ISS at? (WTIA) from https://wheretheiss.at/w/developer

const usernameBtn = document.querySelector('#get-username');
const usernameBox = document.querySelector('#username-box');

usernameBtn.addEventListener('click', () => {
    // Generate random number (id) for random Pokemon
    let pokeID = Math.floor(Math.random() * 500);
    let pokeName;
    let ISS;

    // Style setup to simulate smooth username generator
    usernameBox.style.display = 'none';
    usernameBox.textContent = '';
    usernameBox.style.color = '#000099';

    async function getISS() {
        // Fetch from WTIA API
        let issResponse = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
        let issData = await issResponse.json();
        return issData;
    }

    async function getPokename() {
        // Fetch from PokeAPI
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokeID}`);
        let data = await response.json();
        return data;
    }

    getISS().then(issData => {
        // Get ISS data (altitude)
        ISS = Math.floor(issData.altitude).toString();
        setTimeout(function () { usernameBox.textContent += ISS; }, 550);

        // Make username visible once it's been fully generated
        setTimeout(function () { usernameBox.style.display = 'block'; }, 600)
    }).catch(error => {
        usernameBox.style.color = '#006600';
        usernameBox.textContent = 'Hmm, looks like something went wrong. Try again later or report this issue on GitHub.'; // Display message in case of issue/error with PokeAPI
    })

    getPokename().then(data => {
        // Select Pokemon name portion of username
        if (data.name.length > 5) {
            let len = data.name.length;
            pokeName = data.name.slice(1, len - 1)
        } else {
            pokeName = data.name;
        }

        usernameBox.textContent += pokeName;
    }).catch(error => {
        usernameBox.style.color = '#006600';
        usernameBox.textContent = 'Hmm, looks like something went wrong. Try again later or report this issue on GitHub.'; // Display message in case of issue/error with PokeAPI
    })
});
