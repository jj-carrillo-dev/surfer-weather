import Header from "./components/Header";
import WeatherCard from "./components/WeatherCard";

const HomeView = () => {
  return (
    <div className="w-full max-w-md space-y-8">
      <Header />
      <WeatherCard />
    </div>
  );
};

export default HomeView;