// pages/api/forecast.ts
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const city = req.query.city as string
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_KEY

  if (!city) return res.status(400).json({ error: "City is required" })

  try {
    // Get latitude/longitude first
    const geoRes = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(city)}&limit=1&appid=${API_KEY}`)
    const geoData = await geoRes.json()

    if (!geoData || geoData.length === 0) {
      return res.status(404).json({ error: "City not found" })
    }

    const { lat, lon } = geoData[0]

    // Get 7-day forecast
    const forecastRes = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${API_KEY}`)
    const forecastData = await forecastRes.json()

    return res.status(200).json({ city, daily: forecastData.daily.slice(0, 7) })
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: "Failed to fetch weather" })
  }
}
