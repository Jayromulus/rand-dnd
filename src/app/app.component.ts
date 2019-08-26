import { Component } from '@angular/core';
import { StatsService } from './stats.service';
import { RaceService } from './race.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  race: {
    name: string,
    stats: {
      INT?: number,
      WIS?: number,
      CHA?: number,
      STR?: number,
      DEX?: number,
      CON?: number
    }
  };

  buttonStuff() {
    this.statservice.CON += 2;
    console.log(this.statservice.CON)
  }

  constructor(private statservice: StatsService, private raceservice: RaceService) { }

  ngOnInit() {
    this.statservice.setStat();
    this.race = this.raceservice.getSubRace();
    console.log(this.race)
  }

}
