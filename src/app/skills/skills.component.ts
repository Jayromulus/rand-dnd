import { Component, OnInit } from '@angular/core';
import { StatsService } from '../stats.service'

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  STRmod: number;
  DEXmod: number;
  CONmod: number;
  INTmod: number;
  WISmod: number;
  CHAmod: number;

  constructor(private statservice: StatsService) { }

  ngOnInit() {
    let block = this.statservice.getStats();

    this.STRmod = block.STRmod;
    this.DEXmod = block.DEXmod;
    this.CONmod = block.CONmod;
    this.INTmod = block.INTmod;
    this.WISmod = block.WISmod;
    this.CHAmod = block.CHAmod;

  }

}
