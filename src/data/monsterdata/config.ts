// Use 'StatTable' for Data components that are a a bundle of stats
// Use 'List' for Moves, Abilities, and anything else that is a list
// of items the monster possesses

export const MonsterConfig: { [index: string]: any } = Object.freeze({
  statconfig: {
    mid: 'string',
    ivs: 'StatTable',
    evs: 'StatTable',
    moves: 'List',
    abilities: 'List',
    name: 'string',
    owner: 'number',
    species: 'string',
    form: 'string',
    wish: 'string'
  },
  stats: [
    'health', 'red_o', 'green_o', 'blue_o', 'red_d', 'green_d', 'blue_d', 'black_o', 'white_o', 'black_d', 'white_d', 'speed'
    //'health', 'strength', 'intellect', 'lore', 'skill', 'defense', 'resilience', 'speed'
  ],
  default_stat: 0,
  battlestate: {
    isFaint: false,
    damage: 0,
    isPoison: false,
    onField: false,
    power: 100,
  },
  // viewable save file: '../../../../data/monsterdata/monsterdb_write.json'
  save_file: './data/monsterdata/monsterdb_write.json',
  //save_file: '../../../../data/monsterdata/monsterdb_write.json',

})
