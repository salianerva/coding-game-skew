import { AbilityServiceComponent } from "../components"
import { Pet } from "../pet"
import { mockPetFactory } from "../pet.mock"
import { mockPetPartyFactory, PetParty } from '../petparty'
import { PetInstanceDB } from "./petinstancedb"
//import { mockMonsterPartyFactory } from "./monsterparty.mock"

describe('>>> Monster', () => {

  let monster: Pet
  let targetmonster: Pet

  beforeEach(() => {
    monster = mockPetFactory()
    targetmonster = mockPetFactory()
    PetInstanceDB.instancedb = mockPetPartyFactory()
  })

  it('should repeat all monster functionality by adding and accessing a monster from the universal db', () => {
    monster.InitPet()
    PetInstanceDB.instancedb.setPet("0", monster)
    PetInstanceDB.instancedb.getPet("0").getPetInstance("0")


    // Expect tables to be instantiated
    expect(PetInstanceDB.instancedb.getPet("0").stats.hasTable('moves')).toBeTruthy()
    expect(PetInstanceDB.instancedb.getPet("0").stats.hasTable('ivs')).toBeTruthy()
    expect(PetInstanceDB.instancedb.getPet("0").stats.hasTable('evs')).toBeTruthy()
    expect(PetInstanceDB.instancedb.getPet("0").stats.hasTable('abilities')).toBeTruthy()
    expect(PetInstanceDB.instancedb.getPet("0").stats.hasTable('owner')).toBeFalsy()


    expect(PetInstanceDB.instancedb.getPet("0").stats.getStatFromTable('ivs', 'green_o')).toEqual(101)
    expect(PetInstanceDB.instancedb.getPet("0").stats.getStatFromTable('evs', 'green_o')).toEqual(102)
    expect(PetInstanceDB.instancedb.getPet("0").stats.getStat('green_o')).toEqual(358)
    expect(PetInstanceDB.instancedb.getPet("0").stats.getStat('white_o')).toEqual(1000)
    expect(PetInstanceDB.instancedb.getPet("0").stats.getStat('white_d')).toEqual(2000)
    expect(PetInstanceDB.instancedb.getPet("0").stats.getStatFromTable('moves', 'moves')[0]).toEqual("Arkadius")
    expect(PetInstanceDB.instancedb.getPet("0").stats.getStatFromTable('data', 'omni')).toEqual("Zwart Defeat")
    expect(PetInstanceDB.instancedb.getPet("0").stats.getStatFromTable('data', 'owner')).toEqual("blazar_vastel")

    expect(monster.stats.getStatFromTable('ivs', 'green_o')).toEqual(101)
    expect(monster.stats.getStatFromTable('evs', 'green_o')).toEqual(102)
    expect(monster.stats.getStat('green_o')).toEqual(358)
    expect(monster.stats.getStat('white_o')).toEqual(1000)
    expect(monster.stats.getStat('white_d')).toEqual(2000)
    expect(monster.stats.getStatFromTable('moves', 'moves')[0]).toEqual("Arkadius")
    expect(monster.stats.getStatFromTable('data', 'omni')).toEqual("Zwart Defeat")
    expect(monster.stats.getStatFromTable('data', 'owner')).toEqual("blazar_vastel")

    // should load default stat where not specified:
    expect(monster.stats.getStatFromTable('ivs', 'black_o')).toEqual(0)


    // should load default stat where not specified:
    expect(PetInstanceDB.instancedb.getPet("0").stats.getStatFromTable('ivs', 'black_o')).toEqual(0)
    //console.log(MonsterInstanceDB.instancedb.getMonster("0").stats.getStatFromTable('moves', 'moves'))
    //console.log(MonsterInstanceDB.instancedb.getMonster("0").stats.getStatFromTable('data', 'owner'))
    //console.log(MonsterInstanceDB.instancedb.getMonster("0").stats.getStatFromTable('data', 'omni'))
  })

  it('should repeat all monster functionality by adding and accessing a monster from its party', () => {
    monster.InitPet()
    PetInstanceDB.instancedb.setPet("0", monster)
    monster.getPetInstance("0")


    // Expect tables to be instantiated
    expect(PetInstanceDB.instancedb.getPet("0").stats.hasTable('moves')).toBeTruthy()
    expect(PetInstanceDB.instancedb.getPet("0").stats.hasTable('ivs')).toBeTruthy()
    expect(PetInstanceDB.instancedb.getPet("0").stats.hasTable('evs')).toBeTruthy()
    expect(PetInstanceDB.instancedb.getPet("0").stats.hasTable('abilities')).toBeTruthy()
    expect(PetInstanceDB.instancedb.getPet("0").stats.hasTable('owner')).toBeFalsy()


    expect(PetInstanceDB.instancedb.getPet("0").stats.getStatFromTable('ivs', 'green_o')).toEqual(101)
    expect(PetInstanceDB.instancedb.getPet("0").stats.getStatFromTable('evs', 'green_o')).toEqual(102)
    expect(PetInstanceDB.instancedb.getPet("0").stats.getStat('green_o')).toEqual(358)
    expect(PetInstanceDB.instancedb.getPet("0").stats.getStat('white_o')).toEqual(1000)
    expect(PetInstanceDB.instancedb.getPet("0").stats.getStat('white_d')).toEqual(2000)
    expect(PetInstanceDB.instancedb.getPet("0").stats.getStatFromTable('moves', 'moves')[0]).toEqual("Arkadius")
    expect(PetInstanceDB.instancedb.getPet("0").stats.getStatFromTable('data', 'omni')).toEqual("Zwart Defeat")
    expect(PetInstanceDB.instancedb.getPet("0").stats.getStatFromTable('data', 'owner')).toEqual("blazar_vastel")

    // should load default stat where not specified:
    expect(PetInstanceDB.instancedb.getPet("0").stats.getStatFromTable('ivs', 'black_o')).toEqual(0)
    expect(PetInstanceDB.instancedb.getPet("0").stats.getStatFromTable('ivs', 'red_o')).toEqual(0)
    expect(PetInstanceDB.instancedb.getPet("0").stats.getStatFromTable('data', 'markings')[2]).toEqual("[Event Set Number: SRE:#00]")
    //console.log(MonsterInstanceDB.instancedb.getMonster("0").stats.getStatFromTable('moves', 'moves'))
    //console.log(MonsterInstanceDB.instancedb.getMonster("0").stats.getStatFromTable('data', 'owner'))
    //console.log(MonsterInstanceDB.instancedb.getMonster("0").stats.getStatFromTable('data', 'omni'))

    // Species specific:
    expect(PetInstanceDB.instancedb.getPet("0").stats.getStatFromTable('species', 'green_o')).toEqual(155)
    expect(PetInstanceDB.instancedb.getPet("0").stats.getStatFromTable('species', 'shape')).toEqual('deity')
    expect(PetInstanceDB.instancedb.getPet("0").stats.getStatFromTable('species', 'learn_set').has('Arkadius')).toBeTruthy()
    expect(PetInstanceDB.instancedb.getPet("0").stats.getStatFromTable('species', 'learn_set').has('Akadius')).toBeFalsy()
    expect(PetInstanceDB.instancedb.getPet("0").stats.getStatFromTable('species', 'ability_set').has('Asharion')).toBeTruthy()
    expect(PetInstanceDB.instancedb.getPet("0").stats.getStatFromTable('species', 'types')[0]).toEqual('Dyus')
    //console.log(MonsterInstanceDB.instancedb.getMonster("0").stats.getStatFromTable('species', 'learn_set'))
    //console.log(MonsterInstanceDB.instancedb.getMonster("0").stats.getStatFromTable('species', 'types'))
  })

  it('should initialize the battle state with the default values through MonsterInstanceDB.instancedb', () => {
    monster.InitPet()
    PetInstanceDB.instancedb.setPet("0", monster)
    PetInstanceDB.instancedb.getPet("0").getPetInstance("0")
    PetInstanceDB.instancedb.getPet("0").InitBattleState()


    expect(PetInstanceDB.instancedb.getPet("0").stats.hasTable('battlestate')).toBeTruthy()
    expect(PetInstanceDB.instancedb.getPet("0").stats.getStatFromTable('battlestate', 'isFaint')).toEqual(false)
    expect(PetInstanceDB.instancedb.getPet("0").stats.getStatFromTable('battlestate', 'damage')).toEqual(0)
  })

  it('should successfully use MoveServiceComponent to execute an attack through MonsterInstanceDB.instancedb', () => {
    PetInstanceDB.instancedb.setPet("0", monster)
    PetInstanceDB.instancedb.getPet("0").InitPet()
    PetInstanceDB.instancedb.getPet("0").InitBattleState()
    PetInstanceDB.instancedb.getPet("0").getPetInstance("0")

    PetInstanceDB.instancedb.setPet("1", targetmonster)
    PetInstanceDB.instancedb.getPet("1").InitPet()
    PetInstanceDB.instancedb.getPet("1").getPetInstance("1")
    PetInstanceDB.instancedb.getPet("1").InitBattleState()

    // Using the move:
    expect(PetInstanceDB.instancedb.getPet("0").stats.getStat('white_o')).toEqual(1000)
    expect(PetInstanceDB.instancedb.getPet("1").stats.getStat('white_d')).toEqual(100)
    expect(PetInstanceDB.instancedb.getPet("1").stats.getStat('black_d')).toEqual(0)
    monster.GetComponent(AbilityServiceComponent).useAbility(targetmonster, 'Arkadius')
    expect(PetInstanceDB.instancedb.getPet("1").stats.getStatFromTable('data', 'wish')).toEqual('infinity')
    expect(PetInstanceDB.instancedb.getPet("1").stats.getStatFromTable('battlestate', 'isFaint')).toBeTruthy()
    //expect(PetInstanceDB.instancedb.getPet("1").stats.getStatFromTable('battlestate', 'damage')).toEqual(55)

    //console.log(targetmonster.stats.getStatFromTable('data', 'wish'))
    //console.log(MonsterInstanceDB.instancedb.getMonster("0").stats.getStatFromTable('data', 'markings')[0])
  })

  it('should successfully use MoveServiceComponent to execute an attack with a stat check through MonsterInstanceDB.instancedb', () => {
    PetInstanceDB.instancedb.setPet("0", monster)
    PetInstanceDB.instancedb.getPet("0").InitPet()
    PetInstanceDB.instancedb.getPet("0").InitBattleState()
    PetInstanceDB.instancedb.getPet("0").getPetInstance("0")

    PetInstanceDB.instancedb.setPet("1", targetmonster)
    PetInstanceDB.instancedb.getPet("1").InitPet()
    PetInstanceDB.instancedb.getPet("1").getPetInstance("1")
    PetInstanceDB.instancedb.getPet("1").InitBattleState()

    //console.log(MonsterInstanceDB.instancedb.getMonster("0").stats.getStat('blue_o'))
    //console.log(MonsterInstanceDB.instancedb.getMonster("1").stats.getStat('blue_o'))
    expect(PetInstanceDB.instancedb.getPet("1").stats.getStatFromTable('battlestate', 'isFaint')).toBeFalsy()
    //console.log(MonsterInstanceDB.instancedb.getMonster("1").stats.getStatFromTable('battlestate', 'Endion'))
    PetInstanceDB.instancedb.getPet("0").GetComponent(AbilityServiceComponent).useAbility(PetInstanceDB.instancedb.getPet("1"), 'Astral_Aurora_Ominae')
    expect(PetInstanceDB.instancedb.getPet("1").stats.getStatFromTable('battlestate', 'isFaint')).toBeTruthy()
    expect(PetInstanceDB.instancedb.getPet("1").stats.getStatFromTable('battlestate', 'Endion')).toEqual("Salian")
    //console.log(MonsterInstanceDB.instancedb.getMonster("1").stats.getStat('green_o'))
    //console.log(MonsterInstanceDB.instancedb.getMonster("1").stats.getStatFromTable('battlestate', 'Endion'))



  })

  it('should successfully use MoveServiceComponent to execute an attack that clones the target through MonsterInstanceDB.instancedb', () => {
    PetInstanceDB.instancedb.setPet("0", monster)
    PetInstanceDB.instancedb.getPet("0").InitPet()
    
    PetInstanceDB.instancedb.getPet("0").getPetInstance("0")
    PetInstanceDB.instancedb.getPet("0").InitBattleState()

    PetInstanceDB.instancedb.setPet("1", targetmonster)
    PetInstanceDB.instancedb.getPet("1").InitPet()
    PetInstanceDB.instancedb.getPet("1").getPetInstance("1")
    PetInstanceDB.instancedb.getPet("1").InitBattleState()

    //console.log(MonsterInstanceDB.instancedb.getMonster("1").stats.getStat("mid"))
    //console.log(MonsterInstanceDB.instancedb.getMonster("1").stats.getStatFromTable('data', "mid"))

    //console.log(MonsterInstanceDB.instancedb.getMonster("0").stats.getStat('blue_o'))
    //console.log(MonsterInstanceDB.instancedb.getMonster("1").stats.getStat('blue_o'))
    expect(PetInstanceDB.instancedb.getPet("1").stats.getStatFromTable('battlestate', 'isFaint')).toBeFalsy()

    

    //console.log(MonsterInstanceDB.instancedb.getMonster("1").stats.getStatFromTable('battlestate', 'Endion'))
    PetInstanceDB.instancedb.getPet("0").GetComponent(AbilityServiceComponent).useAbility(PetInstanceDB.instancedb.getPet("1"), 'Neo_Genesis')
    //expect(MonsterInstanceDB.instancedb.getMonster("1").stats.getStatFromTable('battlestate', 'isFaint')).toBeTruthy()
    //expect(MonsterInstanceDB.instancedb.getMonster("1").stats.getStatFromTable('battlestate', 'Endion')).toEqual("Salian")
    expect(PetInstanceDB.instancedb.getPet("1").stats.getStatFromTable('data', 'wish')).toEqual("Asphodel")
    expect(PetInstanceDB.instancedb.getPet("1_clone").stats.getStatFromTable('data', 'wish')).toEqual("Asphodel")
    //console.log(MonsterInstanceDB.instancedb.getMonster("1_clone").stats.getStat('green_o'))
    //console.log(MonsterInstanceDB.instancedb.getMonster("1_clone").stats.getStat('green_o'))
    //console.log(MonsterInstanceDB.instancedb.getMonster("1_clone"))
    //console.log(MonsterInstanceDB.instancedb.getMonster("1").stats.getStatFromTable('data', 'wish'))
    //console.log(MonsterInstanceDB.instancedb.getMonster("1_clone").stats.getStatFromTable('data', 'wish'))
    //console.log(MonsterInstanceDB.instancedb.getMonster("1").stats.getStatFromTable('battlestate', 'Endion'))

    PetInstanceDB.instancedb.getPet("1").stats.setStatFromTable('data', 'wish', "Arcadius")
    expect(PetInstanceDB.instancedb.getPet("1").stats.getStatFromTable('data', 'wish')).toEqual("Arcadius")
    expect(PetInstanceDB.instancedb.getPet("1_clone").stats.getStatFromTable('data', 'wish')).toEqual("Asphodel")



    //expect(MonsterInstanceDB.instancedb.getMonster("1_clone").stats.getStatFromTable('data', 'wish')).toEqual("Asphodel")

    PetInstanceDB.instancedb.getPet("1_clone").stats.getStatFromTable('moves', 'moves').push("Arkamon")
    expect(PetInstanceDB.instancedb.getPet("1_clone").stats.getStatFromTable('moves', 'moves').length).toEqual(3)
    expect(PetInstanceDB.instancedb.getPet("1").stats.getStatFromTable('moves', 'moves').length).toEqual(2)

    PetInstanceDB.instancedb.getPet("1_clone").stats.setStatFromTable('ivs', 'green_o', 989)
    expect(PetInstanceDB.instancedb.getPet("1_clone").stats.getStatFromTable('ivs', 'green_o')).toEqual(989)
    expect(PetInstanceDB.instancedb.getPet("1").stats.getStatFromTable('ivs', 'green_o')).toEqual(10)

    //console.log(MonsterInstanceDB.instancedb.getMonster("1").stats.getStatFromTable('moves', 'moves'))
    //console.log(MonsterInstanceDB.instancedb.getMonster("1_clone").stats.getStatFromTable('moves', 'moves'))
    //console.log(MonsterInstanceDB.instancedb.getMonster("1").stats.getStatFromTable('data', 'wish'))
    //console.log(MonsterInstanceDB.instancedb.getMonster("1_clone").stats.getStatFromTable('data', 'wish'))




  })

  it('should successfully use MoveServiceComponent to execute an attack that clones the target through MonsterInstanceDB.instancedb, but this time without using instancedb directly', () => {
    //MonsterInstanceDB.setMonster("0", monster)
    PetInstanceDB.getPet("0")
    //MonsterInstanceDB.getMonster("0").InitBattleState()
    //MonsterInstanceDB.getMonster("0").getMonsterInstance("0")

   // MonsterInstanceDB.setMonster("1", targetmonster)
    PetInstanceDB.getPet("1")
    //MonsterInstanceDB.getMonster("1").getMonsterInstance("1")
    //MonsterInstanceDB.getMonster("1").InitBattleState()

    //console.log(MonsterInstanceDB.instancedb.getMonster("1").stats.getStat("mid"))
    //console.log(MonsterInstanceDB.instancedb.getMonster("1").stats.getStatFromTable('data', "mid"))

    //console.log(MonsterInstanceDB.instancedb.getMonster("0").stats.getStat('blue_o'))
    //console.log(MonsterInstanceDB.instancedb.getMonster("1").stats.getStat('blue_o'))
    expect(PetInstanceDB.getPet("1").stats.getStatFromTable('battlestate', 'isFaint')).toBeFalsy()



    //console.log(MonsterInstanceDB.instancedb.getMonster("1").stats.getStatFromTable('battlestate', 'Endion'))
    PetInstanceDB.getPet("0").GetComponent(AbilityServiceComponent).useAbility(PetInstanceDB.getPet("1"), 'Neo_Genesis')
    //expect(MonsterInstanceDB.instancedb.getMonster("1").stats.getStatFromTable('battlestate', 'isFaint')).toBeTruthy()
    //expect(MonsterInstanceDB.instancedb.getMonster("1").stats.getStatFromTable('battlestate', 'Endion')).toEqual("Salian")
    expect(PetInstanceDB.getPet("1").stats.getStatFromTable('data', 'wish')).toEqual("Asphodel")
    expect(PetInstanceDB.getPet("1_clone").stats.getStatFromTable('data', 'wish')).toEqual("Asphodel")
    //console.log(MonsterInstanceDB.instancedb.getMonster("1_clone").stats.getStat('green_o'))
    //console.log(MonsterInstanceDB.instancedb.getMonster("1_clone").stats.getStat('green_o'))
    //console.log(MonsterInstanceDB.instancedb.getMonster("1_clone"))
    //console.log(MonsterInstanceDB.instancedb.getMonster("1").stats.getStatFromTable('data', 'wish'))
    //console.log(MonsterInstanceDB.instancedb.getMonster("1_clone").stats.getStatFromTable('data', 'wish'))
    //console.log(MonsterInstanceDB.instancedb.getMonster("1").stats.getStatFromTable('battlestate', 'Endion'))

    PetInstanceDB.getPet("1").stats.setStatFromTable('data', 'wish', "Arcadius")
    expect(PetInstanceDB.getPet("1").stats.getStatFromTable('data', 'wish')).toEqual("Arcadius")
    expect(PetInstanceDB.getPet("1_clone").stats.getStatFromTable('data', 'wish')).toEqual("Asphodel")



    //expect(MonsterInstanceDB.instancedb.getMonster("1_clone").stats.getStatFromTable('data', 'wish')).toEqual("Asphodel")

    PetInstanceDB.getPet("1_clone").stats.getStatFromTable('moves', 'moves').push("Arkamon")
    expect(PetInstanceDB.getPet("1_clone").stats.getStatFromTable('moves', 'moves').length).toEqual(3)
    expect(PetInstanceDB.getPet("1").stats.getStatFromTable('moves', 'moves').length).toEqual(2)

    PetInstanceDB.getPet("1_clone").stats.setStatFromTable('ivs', 'green_o', 989)
    expect(PetInstanceDB.getPet("1_clone").stats.getStatFromTable('ivs', 'green_o')).toEqual(989)
    expect(PetInstanceDB.getPet("1").stats.getStatFromTable('ivs', 'green_o')).toEqual(10)

    //console.log(MonsterInstanceDB.instancedb.getMonster("1").stats.getStatFromTable('moves', 'moves'))
    //console.log(MonsterInstanceDB.instancedb.getMonster("1_clone").stats.getStatFromTable('moves', 'moves'))
    //console.log(MonsterInstanceDB.instancedb.getMonster("1").stats.getStatFromTable('data', 'wish'))
    //console.log(MonsterInstanceDB.instancedb.getMonster("1_clone").stats.getStatFromTable('data', 'wish'))




  })

  it('should successfully use AbilityServiceComponent to execute an ability without reference to battle mechanics', () => {
    PetInstanceDB.instancedb.setPet("0", monster)
    PetInstanceDB.instancedb.getPet("0").InitPet()
    PetInstanceDB.instancedb.getPet("0").getPetInstance("0")

    PetInstanceDB.instancedb.setPet("1", targetmonster)
    PetInstanceDB.instancedb.getPet("1").InitPet()
    PetInstanceDB.instancedb.getPet("1").getPetInstance("1")

    //console.log(MonsterInstanceDB.instancedb.getMonster("0").stats.getStat('blue_o'))
    //console.log(MonsterInstanceDB.instancedb.getMonster("1").stats.getStat('blue_o'))
    //expect(PetInstanceDB.instancedb.getPet("1").stats.getStatFromTable('battlestate', 'isFaint')).toBeFalsy()
    //console.log(MonsterInstanceDB.instancedb.getMonster("1").stats.getStatFromTable('battlestate', 'Endion'))
    PetInstanceDB.instancedb.getPet("0").GetComponent(AbilityServiceComponent).useAbility(PetInstanceDB.instancedb.getPet("1"), 'Ashanon')
    //expect(PetInstanceDB.instancedb.getPet("1").stats.getStatFromTable('data', '')).toBeTruthy()
    console.log("WITHOUT BATTLE")
    console.log(PetInstanceDB.instancedb.getPet("1").stats.getStatFromTable('data', 'wish'))
    expect(PetInstanceDB.instancedb.getPet("1").stats.getStatFromTable('data', 'wish')).toEqual("infurion")
    //console.log(MonsterInstanceDB.instancedb.getMonster("1").stats.getStat('green_o'))
    //console.log(MonsterInstanceDB.instancedb.getMonster("1").stats.getStatFromTable('battlestate', 'Endion'))



  })

})
