const weatherData = document.querySelector('form');

const displayWeather = (temperature, local, details) => {
    const ul = document.querySelector('ul');
    const displayTemp = document.createElement('li');
    const h1 = document.createElement('h1');
    const span = document.createElement('span')

    h1.style.display = 'inline-block'
    h1.innerText = `${local}:`
    displayTemp.appendChild(h1)

    const textContent = `  ${(parseFloat(temperature.temp) - 273.15).toFixed(2)}°C, ${details[0].description}`
    const textNode = document.createTextNode(textContent)
    span.style.fontSize = '1.2rem'
    
    span.appendChild(textNode)
    displayTemp.appendChild(span)

    ul.appendChild(displayTemp)

};

weatherData.addEventListener('submit', async (ev) => {
    ev.preventDefault()

    const formData = new FormData(weatherData);

    try {
        const response = await fetch('/', {
            method: 'POST',
            body: new URLSearchParams(formData)
        });

        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }

        const data = await response.json();
        console.log('Success:', data);
        const { main, name, weather } = data.weatherData;
        displayWeather(main, name, weather);

        weatherData.reset();
    } catch (error) {
        console.error('Error:', error);
    }
  });

