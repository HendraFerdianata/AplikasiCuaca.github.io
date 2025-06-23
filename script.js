document.getElementById("getWeather").addEventListener("click", () => {
  const city = document.getElementById("city").value;
  const apiKey = "a946a0ef16845722220fe0bae5c3350e"; // Ganti dengan API key kamu

  if (!city) {
    alert("Silakan masukkan nama kota!");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=id`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Kota tidak ditemukan");
      }
      return response.json();
    })
    .then(data => {
      document.getElementById("weather").classList.remove("hidden");
      document.getElementById("location").textContent = `${data.name}, ${data.sys.country}`;
      document.getElementById("temperature").textContent = `Suhu: ${data.main.temp}°C`;
      document.getElementById("description").textContent = `Cuaca: ${data.weather[0].description}`;
      document.getElementById("icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    })
    .catch(error => {
      alert(error.message);
    });
});
