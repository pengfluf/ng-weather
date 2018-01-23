import { Component, OnInit } from '@angular/core';

import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weather: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  getWeather(id: number): void {
    if (id) {
      console.log(`City id = ${id}`);
      this.weatherService.getWeather(id)
        .subscribe(weather => this.weather = weather;
    }
  }

}
