"use client";

import { useTranslation } from 'react-i18next';
import Header from "./components/Header";
import WeatherCard from "./components/WeatherCard";

const HomeView = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="w-full max-w-md space-y-8">
      <Header t={t} i18n={i18n} /> {/* Pass props to Header */}
      <WeatherCard t={t} /> {/* Pass t to WeatherCard for translation */}
    </div>
  );
};

export default HomeView;