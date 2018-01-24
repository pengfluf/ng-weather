import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../../services/weather.service';

import { ListItem } from '../../classes/ListItem';
import { City } from '../../classes/City';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  serverCode: number;
  list: ListItem[];
  city: City;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  getWeather(query: number|string, countryCode: string): void {
    if (query && countryCode) {
      this.weatherService.getWeather(query, countryCode)
        .subscribe((weather) => {
          this.serverCode = +weather.cod;
          this.list = weather.list;
          this.city = weather.city;
          console.log(this.serverCode);
          console.log(this.list);
          console.log(this.city);
        });
    }
  }

}
