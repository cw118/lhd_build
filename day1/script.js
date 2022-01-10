const form = document.querySelector('form');
const input = document.querySelector('input');
const msg = document.querySelector('.message');
const list = document.querySelector('.ajax .cities');

/* SUBSCRIBE HERE FOR YOUR OWN API KEY: https://home.openweathermap.org/users/sign_up */
const apiKey = 'f1a81698247e38e38b701b3ca111250c';

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let cityName = input.value;

    // AJAX API request
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    async function weatherFetch() {
        let response = await fetch(url);
        let data = await response.json();
        return data;
    }

    weatherFetch().then(data => {
        const { main, name, sys, weather } = data;
        const li = document.createElement('li');
        li.classList.add("city");
        list.innerHTML = '';
        const html = `
        <h2 class="city-name" data-name="${name},${sys.country}">
            <span>${name}</span>
            <sup>${sys.country}</sup>
        </h2>
        <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup></div>
        <figure>
            <figcaption>${weather[0]["description"]}</figcaption>
        </figure>
        `;
        li.innerHTML = html;
        list.appendChild(li);
    }).catch(error => {
        msg.textContent = 'Hmm, that doesn\'t seem to be a valid city.'; // Display message if city name is invalid (not found by API)
    })

    msg.textContent = '';
    form.reset();
    input.focus();
})

