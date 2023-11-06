export const speciesDB: { [index: string]: any } = Object.freeze({

  Eraeden: {
    name: 'Eraeden',
    types: ['Dyus', 'Arcane', 'Astral'],
    rank: 'mythical',
    ability_set: new Set([
      "Starwish", "Asharion", "Omniscient"
    ]),
    learn_set: new Set([
      "Lore of Eternity", "Unbind", "Light of Exarion", "Astral Aurora Ominae",
      "Quasar Beam", "Arkadius", "Wish on Archaon"
    ]),
    base: {
      'health': 100,
      'blue_o': 150,
      'green_o': 155,
      'red_o': 156,
      'blue_d': 157,
      'green_d': 158,
      'red_d': 159,
      'speed': 160
    },
    shape: 'deity',
    forms: new Set([
      "Dyus", "Titan", "Cosmos"
    ]),
    
  }
})
