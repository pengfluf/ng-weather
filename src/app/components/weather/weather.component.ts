import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../../services/weather.service';
import { WeatherDayComponent } from '../../components/weather-day/weather-day.component';

import { ListItem } from '../../classes/ListItem';
import { City } from '../../classes/City';
import { WeatherDay } from '../../classes/WeatherDay';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  serverCode: number;
  list: ListItem[];
  city: City;

  days: WeatherDay[];

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  getWeather(query: number|string, countryCode: string): void {
    if (query && countryCode) {
      this.weatherService.getWeather(query, countryCode)
        .subscribe((weather) => {
          this.serverCode = +weather.cod;
          if (this.serverCode === 200) {
            this.list = weather.list;
            this.city = weather.city;
            console.log(this.serverCode);
            console.log(this.list);
            console.log(this.city);
            this.sortDays(this.list);
            console.log(this.days);
          }
        });
    }
  }

  sortDays(list: ListItem[]): void {
    const result: any[] = [];
    let prevDay: number = null;

    list.forEach((item) => {
      const currentDay = +item.dt_txt
        .slice(8, 10);
      const currentHour = +item.dt_txt
        .slice(11, 13);

      if (prevDay !== currentDay) {
        result.push({
          day: currentDay,
          hours: [],
        });
      }

      if (prevDay === currentDay) {
        const index = result
          .findIndex((resultItem) => {
            return resultItem.day === currentDay;
        });
        result[index].hours.push({
          time: currentHour,
          ...item,
        });
      }

      prevDay = currentDay;
    });

    this.days = result;
  }
}
