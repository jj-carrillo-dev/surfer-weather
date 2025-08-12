import { Header } from "./components/header/Header"
import { WeatherCard } from "./components/WeatherCard/WeatherCard"

export default function HomeView() {
  return (
    <div className="w-full max-w-md space-y-8">
      <Header />
      <WeatherCard />
    </div>
  )
}