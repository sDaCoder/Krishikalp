"use client"
import { useState } from "react"
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts"
import SearchPage from "@/components/WeatherPage/SearchPage"
import TemperatureGraph from "../TemperatureGraph/TemperatureGraph"

// Types for weather data used by this page
interface WeatherDay {
  date: string // ISO date string like "2025-09-17"
  temp: number
  tempMin: number
  tempMax: number
  humidity: number
  weather: string // description, e.g., "clear sky"
}

interface WeatherInfo {
  city: string
  daily: WeatherDay[]
}

// Exported type for the temperature chart data points
export interface ChartDataPoint {
  date: string
  temp: number
  tempMax: number
  tempMin: number
}

export default function WeatherPage() {
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfo | null>(null)

  // Prepare chart data
  const chartData: ChartDataPoint[] = weatherInfo?.daily?.map((day: WeatherDay) => ({
    date: new Date(day.date).toLocaleDateString("en-US", { weekday: "short" }),
    temp: day.temp,
    tempMax: day.tempMax,
    tempMin: day.tempMin,
  })) || []
  console.log(chartData);


  // Function to generate sowing/harvesting advice
  const getSowingHarvestAdvice = (weatherInfo: WeatherInfo): string[] => {
    if (!weatherInfo || !weatherInfo.daily) return []

    const advice: string[] = []

    weatherInfo.daily.forEach((day: WeatherDay) => {
      const temp = day.temp
      const date = new Date(day.date).toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      })

      if (temp >= 20 && temp <= 30) {
        advice.push(`🌱 Good day for sowing crops on ${date}`)
      }
      if (temp >= 25 && temp <= 32) {
        advice.push(`🌾 Ideal day for harvesting crops on ${date}`)
      }
    })

    return advice
  }

  const advice = weatherInfo ? getSowingHarvestAdvice(weatherInfo) : []

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "linear-gradient(to bottom, #f3e6d7, #d9bfa6)",
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem", color: "#5c3d2e" }}>
        🌦 Weather Forecast
      </h1>

      {/* Search input */}
      <SearchPage updateInfo={setWeatherInfo} />

    {weatherInfo && (
    <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem", color: "#8b5e3c" }}>
      Area: {weatherInfo.city}
    </h2>
  )}

      {/* Weather cards on top */}
      {weatherInfo && (
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center", marginBottom: "2rem" }}>
          {weatherInfo.daily.map((day: WeatherDay, index: number) => (
            
            <div
              key={index}
              style={{
                border: "1px solid #a77c61",
                padding: "1.2rem",
                borderRadius: "12px",
                minWidth: "140px",
                minHeight: "250px",
                textAlign: "center",
                background: "rgba(255, 248, 240, 0.95)",
                boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <h3 style={{ color: "#8b5e3c" }}>
                {new Date(day.date).toLocaleDateString("en-US", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                })}
              </h3>
              <p>🌡 {day.temp}°C</p><br/>
              <p>⬆ {day.tempMax}°C ⬇ {day.tempMin}°C</p><br/>
              <p>💧 {day.humidity}%</p><br/><br/>
              <p style={{ textTransform: "capitalize" }}>🌤 {day.weather}</p>
            </div>
          ))}
        </div>
      )}

      {/* Graph and Advice side by side */}
      {weatherInfo && (
        <div
          style={{
            display: "flex",
            gap: "2rem",
            width: "100%",
            maxWidth: "900px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {/* Temperature graph */}
          {/* <div style={{ flex: "1 1 400px", background: "rgba(255,255,255,0.9)", padding: "1rem", borderRadius: "12px", boxShadow: "2px 2px 8px rgba(0,0,0,0.1)" }}>
            <h3 style={{ textAlign: "center", color: "#5c3d2e", marginBottom: "1rem" }}>Temperature Graph</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="date" stroke="#5c3d2e" />
                <YAxis stroke="#5c3d2e" />
                <Tooltip />
                <Line type="monotone" dataKey="temp" stroke="#8b5e3c" strokeWidth={2} />
                <Line type="monotone" dataKey="tempMax" stroke="#c27b4f" strokeWidth={2} strokeDasharray="3 3" />
                <Line type="monotone" dataKey="tempMin" stroke="#a86f52" strokeWidth={2} strokeDasharray="3 3" />
              </LineChart>
            </ResponsiveContainer>
          </div> */}
          <TemperatureGraph chartData={chartData} />

          {/* Sowing & Harvesting Advice */}
          <div style={{ flex: "1 1 300px", background: "rgba(255,248,240,0.95)", padding: "1rem", borderRadius: "12px", boxShadow: "2px 2px 8px rgba(0,0,0,0.1)" }}>
            <h3 style={{ textAlign: "center", color: "#5c3d2e", marginBottom: "1rem" }}>🌱 Sowing & Harvesting Advice</h3>
            <ul style={{ paddingLeft: "1rem" }}>
              {advice.map((item, idx) => (
                <li key={idx} style={{ marginBottom: "0.4rem" }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
