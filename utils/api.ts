interface WeatherData {
  temp: number;
  // eslint-disable-next-line camelcase
  feels_like: number;
  // eslint-disable-next-line camelcase
  temp_min: number;
  // eslint-disable-next-line camelcase
  temp_max: number;
}

export interface WeatherResponse {
  cod: number;
  main: WeatherData;
  name: string;
}

const URI = 'https://api.openweathermap.org/data/2.5/weather';
const WEATHER_KEY = process.env.NEXT_PUBLIC_WEATHER_KEY || null;

export const getApi = async ({ cityId }: any): Promise<WeatherResponse | undefined> => {
  if (!WEATHER_KEY) {
    return;
  }

  const req = await fetch(`${URI}?id=${cityId}&appid=${WEATHER_KEY}`);
  const weatherData = await req.json();
  return weatherData;
};
