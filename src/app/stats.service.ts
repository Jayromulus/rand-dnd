import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
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

  rollD6() {
    return Math.floor(Math.random() * Math.floor(6) + 1);
  }

  getSingleStat() {
    let d1: number = this.rollD6()
    let d2: number = this.rollD6()
    let d3: number = this.rollD6()
    let d4: number = this.rollD6()
    let stat: number = 0;
    let limit: number = 0;

    // console.log('d1:',d1 + "; d2:",d2 + "; d3:", d3 + "; d4:", d4)
    if((d1 > d2 || d1 > d3 || d1 > d4) && limit < 3){
      stat += d1;
      limit ++;
    }
    if((d2 > d1 || d2 > d3 || d2 > d4) && limit < 3){
      stat += d2;
      limit ++;
    }
    if((d3 > d1 || d3 > d2 || d3 > d4) && limit < 3){
      stat += d3;
      limit ++;
    }
    if((d4 > d1 || d4 > d2 || d4 > d3) && limit < 3){
      stat += d4;
      limit ++;
    }

    // console.log(stat)
    return stat
  }

  setStat() {
    this.STR = (this.getSingleStat())
    this.STRmod = Math.floor((this.STR - 10) / 2)
    this.DEX = (this.getSingleStat())
    this.DEXmod = Math.floor((this.DEX - 10) / 2)
    this.CON = (this.getSingleStat())
    this.CONmod = Math.floor((this.CON - 10) / 2)
    this.INT = (this.getSingleStat())
    this.INTmod = Math.floor((this.INT - 10) / 2)
    this.WIS = (this.getSingleStat())
    this.WISmod = Math.floor((this.WIS - 10) / 2)
    this.CHA = (this.getSingleStat())
    this.CHAmod = Math.floor((this.CHA - 10) / 2)
  }

  getStats() {
    return ({
      STR: this.STR,
      STRmod: this.STRmod,
      DEX: this.DEX,
      DEXmod: this.DEXmod,
      CON: this.CON,
      CONmod: this.CONmod,
      INT: this.INT,
      INTmod: this.INTmod,
      WIS: this.WIS,
      WISmod: this.WISmod,
      CHA: this.CHA,
      CHAmod: this.CHAmod
    })
  }
  
  constructor() { }
}
