import { AbilityServiceComponent } from "./components"
import { Pet } from "./pet"
import { mockPetFactory } from "./pet.mock"


describe('>>> Monster', () => {

  let monster: Pet
  let targetmonster: Pet

  beforeEach(() => {
    monster = mockPetFactory()
    targetmonster = mockPetFactory()
  })

  it('should instantiate all the stat tables', () => {
    monster.InitPet()

    // Expect tables to be instantiated
    expect(monster.stats.hasTable('moves')).toBeTruthy()
    expect(monster.stats.hasTable('ivs')).toBeTruthy()
    expect(monster.stats.hasTable('evs')).toBeTruthy()
    expect(monster.stats.hasTable('abilities')).toBeTruthy()
    expect(monster.stats.hasTable('name')).toBeFalsy()
    expect(monster.stats.hasTable('species')).toBeFalsy()
    expect(monster.stats.hasTable('owner')).toBeFalsy()

    monster.getPetInstance("0")


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
    //console.log(monster.stats.getStatFromTable('moves', 'moves'))
    //console.log(monster.stats.getStatFromTable('data', 'owner'))
    //console.log(monster.stats.getStatFromTable('data', 'omni'))
  })

  it('should initialize the battle state with the default values', () => {
    monster.InitPet()
    

    monster.getPetInstance("0")
    monster.InitBattleState()

    expect(monster.stats.hasTable('battlestate')).toBeTruthy()
    expect(monster.stats.getStatFromTable('battlestate', 'isFaint')).toEqual(false)
    expect(monster.stats.getStatFromTable('battlestate', 'damage')).toEqual(0)
  })

  it('should successfully use MoveServiceComponent to execute an attack', () => {
    monster.InitPet()
    monster.InitBattleState()
    targetmonster.InitPet()
    targetmonster.InitBattleState()

    monster.getPetInstance("0")
    targetmonster.getPetInstance("1")

    // Using the move:
    expect(monster.stats.getStat('white_o')).toEqual(1000)
    expect(targetmonster.stats.getStat('white_d')).toEqual(100)
    expect(targetmonster.stats.getStat('black_d')).toEqual(0)
    monster.GetComponent(AbilityServiceComponent).useAbility(targetmonster, 'Arkadius')
    expect(targetmonster.stats.getStatFromTable('data', 'wish')).toEqual('infinity')
    expect(targetmonster.stats.getStatFromTable('battlestate', 'isFaint')).toBeTruthy()
    //expect(targetmonster.stats.getStatFromTable('battlestate', 'damage')).toEqual(55)
    //console.log(targetmonster.stats.getStatFromTable('data', 'wish'))
  })

})
