import { Entity, StatTable, Stats} from '../../utils'
import { Settings } from '../settings'
import { PetLoaderComponent, AbilityServiceComponent, PetWriterComponent, SpeciesLoaderComponent } from './components'
//import { MonsterLoaderComponent } from './components/loader'
import { MonsterConfig } from '../../data'
//import { MoveServiceComponent } from './components/moveservice/moveservice'


// This class represents pets in the main game world
// The AbilityService is responsible for abilities/moves usable in the main game world, not in battle
// Pets in battle will be represented by a different class, and combat moves will have a separate class
export class Pet extends Entity {
  private _stats: Stats = new Stats()

  //public Awake() {

  //}

  //public Update(deltaTime: number): void {

  //}

  public InitPet(): void {
    
    /*
    this.stats.addNewTable('iv', new StatTable())
    this.stats.addNewTable('ev', new StatTable())
    this.stats.addNewTable('moves', new StatTable())
    this.stats.addNewTable('abilities', new StatTable())
    this.stats.addNewTable('data', new StatTable())
    */
    // Set up tables in stats
    this.stats.addNewTable('data', new StatTable())
    const config = MonsterConfig.statconfig
    for (const key in config) {
      if (config[key] === 'StatTable' || config[key] === 'List') {
        this.stats.addNewTable(key, new StatTable())
      }
    }
    
    this.AddComponent(new PetLoaderComponent())
    this.AddComponent(new PetWriterComponent())
    this.AddComponent(new AbilityServiceComponent())
    this.AddComponent(new SpeciesLoaderComponent())
  }

  // Get a monsterinstance from the databse by id
  public getPetInstance(id: string): void {
    this.GetComponent(PetLoaderComponent).LoadData(id)
    let species = this.stats.getStat('species')
    this.GetComponent(SpeciesLoaderComponent).LoadData(species)
  }

  public get stats(): Stats {
    return this._stats
  }

  // this apparently must be done before loading from db using getPetInstance
  // will eventually move this to a new class that represents pets in battle
  // this class will only represent pets in the main game world
  public InitBattleState() {
    this.stats.addNewTable('battlestate', new StatTable())
    let stateconfig = MonsterConfig.battlestate
    for (let key in stateconfig) {
      this.stats.setStatFromTable('battlestate', key, stateconfig[key])
    }
    //this.AddComponent(new MoveServiceComponent)
  } 
  

}
