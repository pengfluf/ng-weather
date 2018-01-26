import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-hour',
  templateUrl: './weather-hour.component.html',
  styleUrls: ['./weather-hour.component.css']
})
export class WeatherHourComponent implements OnInit {
  @Input()
  data: any;

  constructor() { }

  ngOnInit() {
  }

}
