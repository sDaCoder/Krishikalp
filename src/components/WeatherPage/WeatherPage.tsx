"use client";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import SearchPage from "@/components/WeatherPage/SearchPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudSun,
  faCloudRain,
  faSun,
  faSnowflake,
  faSeedling,
  faTractor,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

// Types
interface WeatherDay {
  date: string;
  temp: number;
  tempMin: number;
  tempMax: number;
  humidity: number;
  weather: string;
}

interface WeatherInfo {
  city: string;
  daily: WeatherDay[];
}

export default function WeatherPage() {
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfo | null>(null);

  // Chart Data
  const chartData =
    weatherInfo?.daily?.map((day: WeatherDay) => ({
      date: new Date(day.date).toLocaleDateString("en-US", {
        weekday: "short",
      }),
      temp: day.temp,
      tempMax: day.tempMax,
      tempMin: day.tempMin,
    })) || [];

  // Advice logic
  const getSowingHarvestAdvice = (weatherInfo: WeatherInfo): string[] => {
    if (!weatherInfo || !weatherInfo.daily) return [];
    const advice: string[] = [];

    weatherInfo.daily.forEach((day: WeatherDay) => {
      const temp = day.temp;
      const date = new Date(day.date).toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      });
      if (temp >= 20 && temp <= 30) {
        advice.push(`🌱 Good day for sowing crops on ${date}`);
      }
      if (temp >= 25 && temp <= 32) {
        advice.push(`🌾 Ideal day for harvesting crops on ${date}`);
      }
    });
    return advice;
  };

  const advice = weatherInfo ? getSowingHarvestAdvice(weatherInfo) : [];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 p-6">
      {/* Title */}
      <h1 className="text-3xl md:text-3xl font-bold text-[#f5aa42] mb-6 flex items-center gap-3 text-center">
        <FontAwesomeIcon icon={faCloudSun} className="text-[#f5aa42]" />
        WEATHER ADVISORY DASHBOARD
      </h1>

      {/* Search Input (centered, same width as old button) */}
      <div className="flex flex-col items-center gap-3 mb-6">
        <SearchPage updateInfo={setWeatherInfo} />
      </div>

      {weatherInfo && (
        <>
          <h2 className="text-xl font-semibold text-amber-600 mt-4 mb-8 text-center">
            📍 Area: {weatherInfo.city}
          </h2>

          {/* Forecast Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-10 max-w-6xl">
            {weatherInfo.daily.map((day: WeatherDay, idx: number) => (
              <Card
                key={idx}
                className="bg-white border border-amber-300 shadow-md hover:shadow-lg transition rounded-xl"
              >
                <CardHeader className="text-center">
                  <CardTitle className="text-amber-600 text-lg">
                    {new Date(day.date).toLocaleDateString("en-US", {
                      weekday: "short",
                      month: "short",
                      day: "numeric",
                    })}
                  </CardTitle>
                  <CardDescription className="capitalize">
                    {day.weather}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  {/* Weather Icon */}
                  {day.weather.includes("sun") && (
                    <FontAwesomeIcon
                      icon={faSun}
                      className="text-yellow-400 text-2xl"
                    />
                  )}
                  {day.weather.includes("rain") && (
                    <FontAwesomeIcon
                      icon={faCloudRain}
                      className="text-blue-500 text-2xl"
                    />
                  )}
                  {day.weather.includes("cloud") && (
                    <FontAwesomeIcon
                      icon={faCloudSun}
                      className="text-amber-500 text-2xl"
                    />
                  )}
                  {day.weather.includes("snow") && (
                    <FontAwesomeIcon
                      icon={faSnowflake}
                      className="text-blue-400 text-2xl"
                    />
                  )}

                  <p className="text-amber-700 font-semibold">{day.temp}°C</p>
                  <p className="text-sm">
                    ⬆ {day.tempMax}° ⬇ {day.tempMin}°
                  </p>
                  <p className="text-sm">💧 {day.humidity}%</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Graph & Advice */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full">
            {/* Temperature Graph */}
            <Card className="bg-white border border-amber-300 shadow-md rounded-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-amber-600">
                  <FontAwesomeIcon icon={faChartLine} className="text-amber-500" />
                  Past Week Temperature
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={chartData}>
                    <CartesianGrid stroke="#facc15" strokeDasharray="4 4" />
                    <XAxis dataKey="date" stroke="#92400e" />
                    <YAxis stroke="#92400e" />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="temp"
                      stroke="#f59e0b"
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="tempMax"
                      stroke="#fcd34d"
                      strokeWidth={2}
                      strokeDasharray="4 4"
                    />
                    <Line
                      type="monotone"
                      dataKey="tempMin"
                      stroke="#fbbf24"
                      strokeWidth={2}
                      strokeDasharray="4 4"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Advice Section */}
            <Card className="bg-white border border-amber-300 shadow-md rounded-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-amber-600">
                  <FontAwesomeIcon icon={faSeedling} className="text-green-600" />
                  Sowing & Harvesting Advice
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-amber-800">
                  {advice.length > 0 ? (
                    advice.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 bg-amber-50 p-2 rounded-md"
                      >
                        <FontAwesomeIcon
                          icon={item.includes("sowing") ? faSeedling : faTractor}
                          className="text-amber-500 mt-1"
                        />
                        {item}
                      </li>
                    ))
                  ) : (
                    <p className="text-sm italic text-gray-500">
                      No advice available for this forecast.
                    </p>
                  )}
                </ul>
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </div>
  );
}
