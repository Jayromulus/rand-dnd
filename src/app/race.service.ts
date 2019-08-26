import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  selectedRace: {
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

  allRaces = {
    Dragonborn: {
      name: 'Dragonborn',
      stats: {
        STR: 2,
        CHA: 1
        // random breath
      }
    },
    Dwarf: {
      name: 'Dwarf',
      stats: {
        CON: 2
        // subrace
      }
    },
    Elf: {
      name: 'Elf',
      stats: {
        DEX: 2
        // subrace
      }
    },
    Gnome: {
      name: 'Goblin',
      stats: {
        INT: 2
        // subrace
      }
    },
    HalfElf: {
      name: 'Half Elf',
      stats: {
        CHA: 2
        // 2 other random skills by 1
      }
    },
    HalfOrc: {
      name: 'Half Orc',
      stats: {
        STR: 2,
        CON: 1
      }
    },
    Halfling: {
      name: 'Halfling',
      stats: {
        DEX: 2,
        // subrace
      }
    },
    Human: {
      name: 'Human',
      stats: {
        STR: 1,
        DEX: 1,
        CON: 1,
        INT: 1,
        WIS: 1,
        CHA: 1
      }
    },
    Tiefling: {
      name: 'Tiefling',
      stats: {
        INT: 1,
        // random between cha and dex by 2
      }
    },
    Aarakocra: {
      name: 'Aarakocra',
      stats: {
        DEX: 2,
        WIS: 1
      }
    },
    Aasimar: {
      name: 'Aasimar',
      stats: {
        CHA: 2,
        //subrace
      }
    },
    BugBear: {
      name: 'Bug Bear',
      stats: {
        STR: 2,
        DEX: 1
      }
    },
    Firbolg: {
      name: 'Firbolg',
      stats: {
        WIS: 2,
        STR: 1
      }
    },
    Goblin: {
      name: 'Goblin',
      stats: {
        DEX: 2,
        CON: 1
      }
    },
    Grung: {
      name: 'Grung',
      stats: {
        DEX: 2,
        CON: 1
      }
    },
    Hobgoblin: {
      name: 'Hobgoblin',
      stats: {
        CON: 2,
        INT: 1
      }
    },
    Kenku: {
      name: 'Kenku',
      stats: {
        DEX: 2,
        WIS: 1
      }
    },
    Kobold: {
      name: 'Kobold',
      stats: {
        DEX: 2,
        STR: -2
      }
    },
    Lizardfolk: {
      name: 'Lizardfolk',
      stats: {
        CON: 2,
        WIS: 1
      }
    },
    Orc: {
      name: 'Orc',
      stats: {
        STR: 2,
        CON: 1,
        INT: -2
      }
    },
    Tabaxi: {
      name: 'Tabaxi',
      stats: {
        DEX: 2,
        CHA: 1
      }
    },
    Triton: {
      name: 'Triton',
      stats: {
        STR: 1,
        CON: 1,
        CHA: 1
      }
    },
    YuanTiPureblood: {
      name: 'Yuan-Ti Pureblood',
      stats: {
        CHA: 2,
        INT: 1
      }
    },
    Gith: {
      name: 'Gith',
      stats: {
        INT: 1,
        //subrace
      }
    },
    Changeling: {
      name: 'Changeling',
      stats: {
        DEX: 1,
        CHA: 1
      }
    },
    Eldarin: {
      name: 'Eldarin',
      stats: {
        // random int or cha increases by one
        // create random personalities from the examples
      }
    },
    Genasi: {
      name: 'Genasi',
      stats: {
        CON: 2,
        // random element for the gensaI
      }
    },
    Goliath: {
      name: 'Goliath',
      stats: {
        STR: 2,
        CON: 1
      }
    },
    Minotaur: {
      name: 'Minotaur',
      stats: {
        STR: 1,
        // random str int or wis up by one
      }
    },
    Shifter: {
      name: 'Shifter',
      stats: {
        WIS: 1,
        // random variant
      }
    },
    Warforged: {
      name: 'Warforged',
      stats: {
        STR: 1,
        CON: 1
      }
    }
  }

  getRace() {
    let choice = Math.floor(Math.random() * Object.keys(this.allRaces).length)
    // console.log(Object.keys(this.allRaces)[choice])
    this.selectedRace = this.allRaces[Object.keys(this.allRaces)[choice]]
    return(this.allRaces[Object.keys(this.allRaces)[choice]])
  }

  getSubRace() {
    return this.getRace()
  }

  constructor() { }
}
