"use client"
import { useState } from "react"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import SendIcon from "@mui/icons-material/Send"

// Types aligned with WeatherPage usage
interface WeatherDay {
  date: string
  temp: number
  tempMin: number
  tempMax: number
  humidity: number
  weather: string
}

interface WeatherInfo {
  city: string
  daily: WeatherDay[]
}

// Minimal subset of OpenWeather 5-day/3-hour forecast response we use
interface OpenWeatherItem {
  dt_txt: string
  main: {
    temp: number
    temp_min: number
    temp_max: number
    humidity: number
  }
  weather: Array<{ description: string }>
}

interface OpenWeatherResponse {
  cod: string | number
  message?: string
  list: OpenWeatherItem[]
  city: { name: string }
}

interface SearchPageProps {
  updateInfo: (info: WeatherInfo) => void
}

export default function SearchPage({ updateInfo }: SearchPageProps) {
  const [city, setCity] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_KEY

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!city.trim()) return

    setLoading(true)
    setError(null)

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(
          city
        )}&units=metric&appid=${API_KEY}`
      )
      const data: OpenWeatherResponse = await res.json()

      if (data.cod !== "200" && data.cod !== 200) {
        setError(data.message || "City not found")
        return
      }

      // Group forecast by date
      const dailyForecast: Record<string, OpenWeatherItem[]> = {}
      data.list.forEach((item: OpenWeatherItem) => {
        const date = item.dt_txt.split(" ")[0]
        if (!dailyForecast[date]) dailyForecast[date] = []
        dailyForecast[date].push(item)
      })

      // Pick one representative per day
      const daily: WeatherDay[] = Object.keys(dailyForecast).map((date) => {
        const midday = dailyForecast[date][4] || dailyForecast[date][0]
        return {
          date,
          temp: midday.main.temp,
          tempMin: Math.min(...dailyForecast[date].map((i: OpenWeatherItem) => i.main.temp_min)),
          tempMax: Math.max(...dailyForecast[date].map((i: OpenWeatherItem) => i.main.temp_max)),
          humidity: midday.main.humidity,
          weather: midday.weather[0].description,
        }
      })

      updateInfo({ city: data.city.name, daily })
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
      setCity("")
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
      <TextField
        label="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required
      />
      <Button type="submit" variant="contained" endIcon={<SendIcon />} disabled={loading}>
        {loading ? "Searching..." : "Search"}
      </Button>
      {error && <p style={{ color: "red", marginTop: "0.5rem" }}>⚠ {error}</p>}
    </form>
  )
}
