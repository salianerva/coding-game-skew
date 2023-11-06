import { AbilityServiceComponent } from "../components"
import { Pet } from "../pet"
import { mockPetFactory } from "../pet.mock"
import { PetParty } from "./petparty"
import { mockPetPartyFactory } from "./petparty.mock"


describe('>>> Monster', () => {

  let monster: Pet
  let targetmonster: Pet
  let monsterparty: PetParty

  beforeEach(() => {
    monster = mockPetFactory()
    targetmonster = mockPetFactory()
    monsterparty = mockPetPartyFactory()
  })

  it('should repeat all monster functionality by adding and accessing a monster from its party', () => {
    monster.InitPet()
    monsterparty.setPet("0", monster)
    monsterparty.getPet("0").getPetInstance("0")


    // Expect tables to be instantiated
    expect(monsterparty.getPet("0").stats.hasTable('moves')).toBeTruthy()
    expect(monsterparty.getPet("0").stats.hasTable('ivs')).toBeTruthy()
    expect(monsterparty.getPet("0").stats.hasTable('evs')).toBeTruthy()
    expect(monsterparty.getPet("0").stats.hasTable('abilities')).toBeTruthy()
    expect(monsterparty.getPet("0").stats.hasTable('owner')).toBeFalsy()


    expect(monsterparty.getPet("0").stats.getStatFromTable('ivs', 'green_o')).toEqual(101)
    expect(monsterparty.getPet("0").stats.getStatFromTable('evs', 'green_o')).toEqual(102)
    expect(monsterparty.getPet("0").stats.getStat('green_o')).toEqual(358)
    expect(monsterparty.getPet("0").stats.getStat('white_o')).toEqual(1000)
    expect(monsterparty.getPet("0").stats.getStat('white_d')).toEqual(2000)
    expect(monsterparty.getPet("0").stats.getStatFromTable('moves', 'moves')[0]).toEqual("Arkadius")
    expect(monsterparty.getPet("0").stats.getStatFromTable('data', 'omni')).toEqual("Zwart Defeat")
    expect(monsterparty.getPet("0").stats.getStatFromTable('data', 'owner')).toEqual("blazar_vastel")

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
    expect(monsterparty.getPet("0").stats.getStatFromTable('ivs', 'black_o')).toEqual(0)
    //console.log(monsterparty.getMonster("0").stats.getStatFromTable('moves', 'moves'))
    //console.log(monsterparty.getMonster("0").stats.getStatFromTable('data', 'owner'))
    //console.log(monsterparty.getMonster("0").stats.getStatFromTable('data', 'omni'))
  })

  it('should repeat all monster functionality by adding and accessing a monster from its party', () => {
    monster.InitPet()
    monsterparty.setPet("0", monster)
    monster.getPetInstance("0")


    // Expect tables to be instantiated
    expect(monsterparty.getPet("0").stats.hasTable('moves')).toBeTruthy()
    expect(monsterparty.getPet("0").stats.hasTable('ivs')).toBeTruthy()
    expect(monsterparty.getPet("0").stats.hasTable('evs')).toBeTruthy()
    expect(monsterparty.getPet("0").stats.hasTable('abilities')).toBeTruthy()
    expect(monsterparty.getPet("0").stats.hasTable('owner')).toBeFalsy()


    expect(monsterparty.getPet("0").stats.getStatFromTable('ivs', 'green_o')).toEqual(101)
    expect(monsterparty.getPet("0").stats.getStatFromTable('evs', 'green_o')).toEqual(102)
    expect(monsterparty.getPet("0").stats.getStat('green_o')).toEqual(358)
    expect(monsterparty.getPet("0").stats.getStat('white_o')).toEqual(1000)
    expect(monsterparty.getPet("0").stats.getStat('white_d')).toEqual(2000)
    expect(monsterparty.getPet("0").stats.getStatFromTable('moves', 'moves')[0]).toEqual("Arkadius")
    expect(monsterparty.getPet("0").stats.getStatFromTable('data', 'omni')).toEqual("Zwart Defeat")
    expect(monsterparty.getPet("0").stats.getStatFromTable('data', 'owner')).toEqual("blazar_vastel")

    // should load default stat where not specified:
    expect(monsterparty.getPet("0").stats.getStatFromTable('ivs', 'black_o')).toEqual(0)
    expect(monsterparty.getPet("0").stats.getStatFromTable('ivs', 'red_o')).toEqual(0)
    expect(monsterparty.getPet("0").stats.getStatFromTable('data', 'markings')[2]).toEqual("[Event Set Number: SRE:#00]")
    //console.log(monsterparty.getMonster("0").stats.getStatFromTable('moves', 'moves'))
    //console.log(monsterparty.getMonster("0").stats.getStatFromTable('data', 'owner'))
    //console.log(monsterparty.getMonster("0").stats.getStatFromTable('data', 'omni'))

    // Species specific:
    expect(monsterparty.getPet("0").stats.getStatFromTable('species', 'green_o')).toEqual(155)
    expect(monsterparty.getPet("0").stats.getStatFromTable('species', 'shape')).toEqual('deity')
    expect(monsterparty.getPet("0").stats.getStatFromTable('data', 'form')).toEqual('Cosmos')
    expect(monsterparty.getPet("0").stats.getStatFromTable('species', 'learn_set').has('Arkadius')).toBeTruthy()
    expect(monsterparty.getPet("0").stats.getStatFromTable('species', 'learn_set').has('Akadius')).toBeFalsy()
    expect(monsterparty.getPet("0").stats.getStatFromTable('species', 'ability_set').has('Asharion')).toBeTruthy()
    expect(monsterparty.getPet("0").stats.getStatFromTable('species', 'types')[0]).toEqual('Dyus')
    //console.log(monsterparty.getMonster("0").stats.getStatFromTable('species', 'learn_set'))
    //console.log(monsterparty.getMonster("0").stats.getStatFromTable('species', 'types'))
  })

  it('should initialize the battle state with the default values through monsterparty', () => {
    monster.InitPet()
    monsterparty.setPet("0", monster)
    monsterparty.getPet("0").getPetInstance("0")
    monsterparty.getPet("0").InitBattleState()


    expect(monsterparty.getPet("0").stats.hasTable('battlestate')).toBeTruthy()
    expect(monsterparty.getPet("0").stats.getStatFromTable('battlestate', 'isFaint')).toEqual(false)
    expect(monsterparty.getPet("0").stats.getStatFromTable('battlestate', 'damage')).toEqual(0)
  })

  it('should successfully use MoveServiceComponent to execute an attack through monsterparty', () => {
    monsterparty.setPet("0", monster)
    monsterparty.getPet("0").InitPet()
    monsterparty.getPet("0").InitBattleState()
    monsterparty.getPet("0").getPetInstance("0")

    monsterparty.setPet("1", targetmonster)
    monsterparty.getPet("1").InitPet()
    monsterparty.getPet("1").getPetInstance("1")
    monsterparty.getPet("1").InitBattleState()

    // Using the move:
    expect(monsterparty.getPet("0").stats.getStat('white_o')).toEqual(1000)
    expect(monsterparty.getPet("1").stats.getStat('white_d')).toEqual(100)
    expect(monsterparty.getPet("1").stats.getStat('black_d')).toEqual(0)
    monster.GetComponent(AbilityServiceComponent).useAbility(targetmonster, 'Arkadius')
    expect(monsterparty.getPet("1").stats.getStatFromTable('data', 'wish')).toEqual('infinity')
    expect(monsterparty.getPet("1").stats.getStatFromTable('battlestate', 'isFaint')).toBeTruthy()
    //expect(monsterparty.getPet("1").stats.getStatFromTable('battlestate', 'damage')).toEqual(55)

    //console.log(targetmonster.stats.getStatFromTable('data', 'wish'))
    //console.log(monsterparty.getMonster("0").stats.getStatFromTable('data', 'markings')[0])
  })

  it('should successfully use MoveServiceComponent to execute an attack with a stat check through monsterparty', () => {
    monsterparty.setPet("0", monster)
    monsterparty.getPet("0").InitPet()
    monsterparty.getPet("0").InitBattleState()
    monsterparty.getPet("0").getPetInstance("0")

    monsterparty.setPet("1", targetmonster)
    monsterparty.getPet("1").InitPet()
    monsterparty.getPet("1").getPetInstance("1")
    monsterparty.getPet("1").InitBattleState()

    //console.log(monsterparty.getMonster("0").stats.getStat('blue_o'))
    //console.log(monsterparty.getMonster("1").stats.getStat('blue_o'))
    expect(monsterparty.getPet("1").stats.getStatFromTable('battlestate', 'isFaint')).toBeFalsy()
    //console.log(monsterparty.getMonster("1").stats.getStatFromTable('battlestate', 'Endion'))
    monsterparty.getPet("0").GetComponent(AbilityServiceComponent).useAbility(monsterparty.getPet("1"), 'Astral_Aurora_Ominae')
    expect(monsterparty.getPet("1").stats.getStatFromTable('battlestate', 'isFaint')).toBeTruthy()
    expect(monsterparty.getPet("1").stats.getStatFromTable('battlestate', 'Endion')).toEqual("Salian")
    //console.log(monsterparty.getMonster("1").stats.getStat('green_o'))
    //console.log(monsterparty.getMonster("1").stats.getStatFromTable('battlestate', 'Endion'))



  })

})
