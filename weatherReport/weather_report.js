function showweatherDetails(event) {
      event.preventDefault();

      const city = document.getElementById('city').value;
      const apiKey = '8f2273f53017cc364ecb10df2b57946c';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid={API key}`;

       fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
        })
}
 document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );