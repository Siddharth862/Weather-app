document.getElementById("search-btn").addEventListener("click", () => {
  let city = document.getElementById("city-input").value; // Get city from input field
  let apiKey = "93ae01349820b65a2d2ee4274e60eac6"; // OpenWeatherMap API key

  if (!city) {
    alert("Please enter a city name");
    return;
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === "404") {
        alert("City not found");
      } else {
        document.getElementById(
          "city-name"
        ).innerText = `Weather in ${data.name}`;
        document.getElementById(
          "weather-description"
        ).innerText = `Description: ${data.weather[0].description}`;
        document.getElementById(
          "temperature"
        ).innerText = `Temperature: ${data.main.temp}°C`;
        document.getElementById(
          "humidity"
        ).innerText = `Humidity: ${data.main.humidity}%`;
      }
    })
    .catch((error) => console.error("Error:", error));
});
