export const SpeciesConfig: { [index: string]: any } = Object.freeze({
  statconfig: {
    name: 'string',
    types: 'List',
    rank: 'string',
    ability_set: 'Set',
    learn_set: 'Set',
    base: 'StatTable',
    other: 'StatTable',
    shape: 'string',
    tags: 'List',
    egg_group: 'string',
    catch_rate: 'number',
    evs_gain: 'StatTable',
    forms: 'List'
  },
  stats: [
    'health', 'blue_o', 'green_o', 'red_o', 'white_o', 'black_o', 'blue_d', 'green_d', 'red_d', 'white_d', 'black_d', 'speed'
  ],
  default_stat: 0,
})
