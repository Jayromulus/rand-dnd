import { Component, OnInit } from '@angular/core';
import { StatsService } from '../stats.service';
import { RaceService } from '../race.service';

@Component({
  selector: 'app-stat-block',
  templateUrl: './stat-block.component.html',
  styleUrls: ['./stat-block.component.scss']
})
export class StatBlockComponent implements OnInit {
  STR: number;
  STRmod: number;
  DEX: number;
  DEXmod: number;
  CON: number;
  CONmod: number;
  INT: number;
  INTmod: number;
  WIS: number;
  WISmod: number;
  CHA: number;
  CHAmod: number;

  raceModel: {
    name: string,
    stats: {
      STR?: number,
      DEX?: number,
      CON?: number,
      INT?: number,
      WIS?: number,
      CHA?: number,
    }
  }
  

  constructor(private statservice: StatsService, private raceservice: RaceService) { }

  ngOnInit() {
    let block = this.statservice.getStats()
    let raceChoice = this.raceservice.selectedRace
    
    this.STR = block.STR
    this.STRmod = block.STRmod
    this.DEX = block.DEX
    this.DEXmod = block.DEXmod
    this.CON = block.CON
    this.CONmod = block.CONmod
    this.INT = block.INT
    this.INTmod = block.INTmod
    this.WIS = block.WIS
    this.WISmod = block.WISmod
    this.CHA = block.CHA
    this.CHAmod = block.CHAmod

    console.log('STR:',this.STR)
    console.log('DEX:',this.DEX)
    console.log('CON:',this.CON)
    console.log('INT:',this.INT)
    console.log('WIS:',this.WIS)
    console.log('CHA:',this.CHA)
    
    raceChoice.stats.STR ? this.STR += raceChoice.stats.STR : null
    raceChoice.stats.DEX ? this.DEX += raceChoice.stats.DEX : null
    raceChoice.stats.CON ? this.CON += raceChoice.stats.CON : null
    raceChoice.stats.INT ? this.INT += raceChoice.stats.INT : null
    raceChoice.stats.WIS ? this.WIS += raceChoice.stats.WIS : null
    raceChoice.stats.CHA ? this.CHA += raceChoice.stats.CHA : null
    

    // raceChoice.stats.STR ? console.log('STR:',raceChoice.stats.STR) : null
    // raceChoice.stats.DEX ? console.log('DEX:',raceChoice.stats.DEX) : null
    // raceChoice.stats.CON ? console.log('CON:',raceChoice.stats.CON) : null
    // raceChoice.stats.INT ? console.log('INT:',raceChoice.stats.INT) : null
    // raceChoice.stats.WIS ? console.log('WIS:',raceChoice.stats.WIS) : null
    // raceChoice.stats.CHA ? console.log('CHA:',raceChoice.stats.CHA) : null
    
  }

}



// rollD6() {
//   return Math.floor(Math.random() * Math.floor(6) + 1);
// }

// getStat() {
//   this.STR = (this.rollD6() + this.rollD6() + this.rollD6())
//   this.STRmod = Math.floor((this.STR - 10) / 2)
//   this.DEX = (this.rollD6() + this.rollD6() + this.rollD6())
//   this.DEXmod = Math.floor((this.DEX - 10) / 2)
//   this.CON = (this.rollD6() + this.rollD6() + this.rollD6())
//   this.CONmod = Math.floor((this.CON - 10) / 2)
//   this.INT = (this.rollD6() + this.rollD6() + this.rollD6())
//   this.INTmod = Math.floor((this.INT - 10) / 2)
//   this.WIS = (this.rollD6() + this.rollD6() + this.rollD6())
//   this.WISmod = Math.floor((this.WIS - 10) / 2)
//   this.CHA = (this.rollD6() + this.rollD6() + this.rollD6())
//   this.CHAmod = Math.floor((this.CHA - 10) / 2)
// }


// [0, 1, 2, 3, 4, 5, 7, 9];
// [8, 9, 10,11,12,13,14,15];
