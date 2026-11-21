
import { useState, useEffect } from "react";

const WeatherAPI = () => {
  const [city, setCity] = useState("");

  async function fetchWeatherData(city) {
    let apiKey = import.meta.env.VITE_API_KEY;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;  
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    if (city.trim() !== "") {
      fetchWeatherData(city);
    }
    }, [city]);

  function handleSubmit(e) {
    e.preventDefault();
    // fetchWeatherData(city);

  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 flex items-center justify-center p-5">

      <div className="w-full max-w-md bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl p-8">

        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">🌤️</div>

          <h1 className="text-3xl font-bold text-white">
            Weather App
          </h1>

          <p className="text-blue-100 mt-2 text-sm">
            Check the weather in your city
          </p>
        </div>

        {/* Search Form */}
        <form className="flex flex-col gap-4" 
        onSubmit={()=> handleSubmit(city)}>

          <input
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full bg-white/90 text-slate-800 placeholder-slate-400 px-5 py-4 rounded-xl outline-none border-2 border-transparent focus:border-blue-300 focus:ring-4 focus:ring-blue-300/30 transition duration-200"
          />

          <button
            type="submit"
            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 rounded-xl shadow-lg transition duration-200 hover:-translate-y-0.5"
          >
            Search Weather
          </button>

        </form>

        {/* Weather Display */}
        <div className="mt-8 bg-white/15 border border-white/20 rounded-2xl p-6 text-center">

          <div className="text-4xl mb-3">☁️</div>

          <h2 className="text-white text-xl font-semibold">
            Weather Details
          </h2>

          <p className="text-blue-100 text-sm mt-2">
            Search for a city to see its weather
          </p>

        </div>

        <p className="text-center text-blue-100 text-xs mt-6">
          Your daily weather companion
        </p>

      </div>
    </div>
  );
};

export default WeatherAPI;
