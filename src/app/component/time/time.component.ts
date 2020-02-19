import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

  dateEnd: Date;
  dateNow: Date;
  calcSeconds: number;

  days: number;
  hours: any;
  minutes: any;
  second: any;

  constructor() {
    this.dateEnd = new Date('2020-03-10T08:00:00');
  }

  ngOnInit() {
    this.getCountdown();
  }

  reloadEntry() {
    setTimeout(() => this.getCountdown(), 1000);
  }


  getCountdown() {
    this.dateNow = new Date();
    this.calcSeconds = this.dateEnd.getTime() - this.dateNow.getTime();
    this.days = Math.floor(this.calcSeconds / 1000 / 3600 / 24);
    this.hours = Math.floor((this.calcSeconds / 1000 / 3600) - (this.days * 24));
    this.minutes = Math.floor((this.calcSeconds / 1000 / 60) - (this.days * 24 * 60) - (this.hours * 60));
    this.second = Math.floor((this.calcSeconds / 1000) - (this.days * 24 * 60 * 60) - (this.hours * 60 * 60) - (this.minutes * 60));


    if (this.second < 10) {
      this.second = '0' + this.second;
    }
    if (this.minutes < 10) {
      this.minutes = '0' + this.minutes;
    }
    if (this.hours < 10) {
      this.hours = '0' + this.hours;
    }

    this.reloadEntry();
  }
}
