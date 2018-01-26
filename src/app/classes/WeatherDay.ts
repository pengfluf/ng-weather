import { WeatherHour } from './WeatherHour';

export class WeatherDay {
  year: number;
  day: number;
  month: number;
  hours: WeatherHour[];
}
