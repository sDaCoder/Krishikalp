"use client"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"

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

      const dailyForecast: Record<string, OpenWeatherItem[]> = {}
      data.list.forEach((item: OpenWeatherItem) => {
        const date = item.dt_txt.split(" ")[0]
        if (!dailyForecast[date]) dailyForecast[date] = []
        dailyForecast[date].push(item)
      })

      const daily: WeatherDay[] = Object.keys(dailyForecast).map((date) => {
        const midday = dailyForecast[date][4] || dailyForecast[date][0]
        return {
          date,
          temp: midday.main.temp,
          tempMin: Math.min(...dailyForecast[date].map((i) => i.main.temp_min)),
          tempMax: Math.max(...dailyForecast[date].map((i) => i.main.temp_max)),
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
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 mb-4"
    >
      <Input
        value={city}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setCity(e.target.value)
        }
        placeholder="Enter city"
        required
        className="h-8 w-52 text-sm border-amber-500"
      />
      <Button
        type="submit"
        variant="outline"
        disabled={loading}
        className="h-8 px-3 text-sm flex items-center gap-1 cursor-pointer"
      >
        {loading ? "Searching..." : "Search"}
        {!loading && <Send className="w-4 h-4" />}
      </Button>
      {error && <p className="text-red-500 text-sm ml-2">⚠ {error}</p>}
    </form>
  )
}
