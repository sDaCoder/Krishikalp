// app/api/forecast/route.ts (App Router)
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const city = req.nextUrl.searchParams.get("city") || ""
  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_KEY

  if (!city) {
    return NextResponse.json({ error: "City is required" }, { status: 400 })
  }

  try {
    // Get latitude/longitude first
    const geoRes = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(city)}&limit=1&appid=${API_KEY}`
    )
    const geoData = await geoRes.json()

    if (!geoData || geoData.length === 0) {
      return NextResponse.json({ error: "City not found" }, { status: 404 })
    }

    const { lat, lon, name } = geoData[0]

    // Get 7-day forecast
    const forecastRes = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${API_KEY}`
    )
    const forecastData = await forecastRes.json()

    // Shape the response to match components' expected structure
    const daily = (forecastData?.daily || []).slice(0, 7).map((d: any) => {
      const dateISO = new Date(d.dt * 1000).toISOString().slice(0, 10)
      return {
        date: dateISO,
        temp: typeof d.temp === "object" && d.temp?.day != null ? d.temp.day : d.temp,
        tempMin: typeof d.temp === "object" ? d.temp.min : d.tempMin,
        tempMax: typeof d.temp === "object" ? d.temp.max : d.tempMax,
        humidity: d.humidity,
        weather: Array.isArray(d.weather) && d.weather[0]?.description ? d.weather[0].description : "",
      }
    })

    return NextResponse.json({ city: name || city, daily })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Failed to fetch weather" }, { status: 500 })
  }
}
