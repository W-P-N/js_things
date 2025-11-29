function showWeatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const apiKey = 'API_KEY';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            console.log(data);
            weatherInfo.innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temprature: ${(data.main.temp - 273).toFixed(2)} &#8451;</p>
                <p>Weather: ${data.weather[0].description}</p>            
            `;
        })
        .catch(error => {
            console.error('Error fetching weather: ', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again</p>`;
        }) 
};

document.getElementById('weatherForm').addEventListener('submit', showWeatherDetails);
