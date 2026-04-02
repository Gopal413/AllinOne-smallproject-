
import { useState } from "react";

const API_KEY = "2d6f74acbcd1189b33efc9db73ab739f"; // put your key here

export default function Weather() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city.trim()) return;
    setLoading(true);
    setError("");
    setData(null);

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
      )}&units=metric&appid=${API_KEY}`;
      const res = await fetch(url);
      if (!res.ok) {
        if (res.status === 404) throw new Error("City not found");
        if (res.status === 401) throw new Error("Invalid API key");
        throw new Error("Failed to fetch weather");
      }
      const json = await res.json(); // structure per docs. [web:2]
      setData(json);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 p-4">
      <div className="w-full max-w-md bg-white/95 rounded-2xl shadow-2xl p-6">
        <h2 className="text-2xl font-bold text-slate-800 text-center mb-2">
          Weather API
        </h2>
        <p className="text-sm text-slate-500 text-center mb-4">
          Enter a city and get current weather
        </p>

        {/* Search */}
        <form onSubmit={handleSubmit} className="flex gap-2 mb-3">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="e.g. Hyderabad"
            className="flex-1 px-3 py-2 rounded-lg border border-slate-300 text-sm outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-semibold"
          >
            Search
          </button>
        </form>

        {/* Loading / Error */}
        {loading && (
          <p className="text-center text-slate-600 text-sm">Loading...</p>
        )}
        {error && (
          <p className="text-center text-red-500 text-sm font-semibold">
            {error}
          </p>
        )}

        {/* Result */}
        {data && !loading && (
          <div className="mt-4 space-y-3">
            <div className="text-center">
              <p className="text-lg font-semibold text-slate-800">
                {data.name}, {data.sys.country}
              </p>
              <p className="text-xs text-slate-500">
                {data.weather[0].description}
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 bg-slate-50 rounded-xl p-3">
              <img
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt="icon"
                className="w-16 h-16"
              />
              <div>
                <p className="text-4xl font-bold text-slate-800">
                  {Math.round(data.main.temp)}°C
                </p>
                <p className="text-xs text-slate-500">
                  Feels like {Math.round(data.main.feels_like)}°C
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-center text-sm">
              <div className="bg-slate-50 rounded-lg p-2">
                <p className="text-[11px] uppercase text-slate-500">
                  Humidity
                </p>
                <p className="text-base font-semibold text-slate-800">
                  {data.main.humidity}%
                </p>
              </div>
              <div className="bg-slate-50 rounded-lg p-2">
                <p className="text-[11px] uppercase text-slate-500">Wind</p>
                <p className="text-base font-semibold text-slate-800">
                  {data.wind.speed} m/s
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
