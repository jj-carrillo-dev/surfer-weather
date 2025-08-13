export interface IForecastDay {
  day: string;
  tempRange: string;
}

export interface IForecastDetail {
  wind: {
    speed: string | number;
    direction: string | number;
  };
  swell: {
    height: string | number;
    period: string | number;
    direction: string | number;
  };
  waterTemp: string | number;
}

export interface ITide {
  time: string;
  height: string;
  type: string;
}

export interface IWeatherData {
  forecast: IForecastDay[];
  detail: IForecastDetail;
  tide: ITide[];
}