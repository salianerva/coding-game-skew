import { Pet, PetInstanceDB, PetParty } from "../../src";


export const MoveDB: { [index: string]: any } = Object.freeze({

  Arkadius: {
    name: 'Arkadius',
    type: 'Dyus',
    colour: 'white',
    time: 1,
    base: '5',
    cost: '4',
    scaling: '1.1',
    onUse: function (source: Pet, target: Pet) {
      target.stats.setStatFromTable('battlestate', 'isFaint', true)
      target.stats.setStatFromTable('data', 'wish', 'infinity')
    },
  },
  Astral_Aurora_Ominae: {
    name: 'Astral Aurora Ominae',
    type: 'Astral',
    colour: 'blue',
    time: 1,
    base: '0',
    cost: '4',
    statCheck: function (sourceStat: number, targetStat: number) {
      if (sourceStat > targetStat) {
        return 1
      }
      else return 0
    },
    onUse(source: Pet, target: Pet) {
      if (this.statCheck(source.stats.getStat('blue_o'), target.stats.getStat('blue_o')) > 0) {
        target.stats.setStatFromTable('battlestate', 'isFaint', true)
        target.stats.setStatFromTable('battlestate', 'Endion', 'Salian')
        target.stats.setStat('green_o', 9)
      } 
      
    }
  },
  Neo_Genesis: {
    name: 'Neo Genesis',
    type: 'Dyus',
    colour: 'white',
    time: 1,
    base: '0',
    cost: '1',
    onUse(source: Pet, target: Pet) {
      let sid = target.stats.getStatFromTable('data', 'mid')
      let clone = new Pet()
      clone.InitPet()
      //console.log(`cloning ${sid}`)
      clone.getPetInstance(sid)
      clone.InitBattleState()
      PetInstanceDB.instancedb.setPet(sid + "_clone", clone)
    }
  },



  Testion: {
    name: 'Testion',
    type: 'Dyus',
    colour: 'white',
    time: 1,
    base: '5',
    cost: '4',
    scaling: '1.1',
    onUse: function (source: Pet, target: Pet) {
      //let statval = target.stats.getStatFromTable('data', 'wish')
      //console.log(`used #0`)
      target.stats.setStatFromTable('data', 'wish', 'testion')
      target.stats.setStatFromTable('battlestate', 'isFaint', true)
    },
  },
  Ashes1: {
    name: 'Ashes1',
    type: 'Dyus',
    colour: 'white',
    time: 1,
    base: '5',
    cost: '4',
    scaling: '1.1',
    onUse: function (source: Pet, target: Pet) {
      //target.stats.setStatFromTable('battlestate', 'isFaint', true)
      //console.log(`used #1`)
      let statval = target.stats.getStatFromTable('data', 'wish')
      target.stats.setStatFromTable('data', 'wish', statval + 'inf1')
    },
  },
  Ashes2: {
    name: 'Ashes2',
    type: 'Dyus',
    colour: 'white',
    time: 2,
    base: '5',
    cost: '4',
    scaling: '1.1',
    onUse: function (source: Pet, target: Pet) {
      //console.log(`used #2`)
      let statval = target.stats.getStatFromTable('data', 'wish')
      target.stats.setStatFromTable('data', 'wish', statval + 'inf2')
    },
  },
  Ashes3: {
    name: 'Ashes3',
    type: 'Dyus',
    colour: 'white',
    time: 3,
    base: '5',
    cost: '4',
    scaling: '1.1',
    onUse: function (source: Pet, target: Pet) {
      //console.log(`used #3`)
      target.stats.setStatFromTable('battlestate', 'isFaint', true)
      let statval = target.stats.getStatFromTable('data', 'wish')
      target.stats.setStatFromTable('data', 'wish', statval + 'inf3')
    },
  },
  Ashes4: {
    name: 'Ashes4',
    type: 'Dyus',
    colour: 'white',
    time: 4,
    base: '5',
    cost: '4',
    scaling: '1.1',
    onUse: function (source: Pet, target: Pet) {
      //console.log(`used #4`)
      target.stats.setStatFromTable('battlestate', 'isFaint', true)
      let statval = target.stats.getStatFromTable('data', 'wish')
      target.stats.setStatFromTable('data', 'wish', statval + 'inf4')
    },
  },
  Ashes5: {
    name: 'Ashes5',
    type: 'Dyus',
    colour: 'white',
    time: 5,
    base: '5',
    cost: '4',
    scaling: '1.1',
    onUse: function (source: Pet, target: Pet) {
      //console.log(`used #5`)
      target.stats.setStatFromTable('battlestate', 'isFaint', true)
      let statval = target.stats.getStatFromTable('data', 'wish')
      target.stats.setStatFromTable('data', 'wish', statval + 'inf5')
    },
  },
  Ashanon: {
    name: 'Ashanon',
    type: 'SpecialAbility',
    colour: 'lol',
    onUse: function (source: Pet, target: Pet) {
      //console.log(`used #5`)
      target.stats.setStatFromTable('data', 'wish', 'infurion')
    },
  },


})
