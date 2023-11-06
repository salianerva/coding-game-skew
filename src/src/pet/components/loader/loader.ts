import { IComponent, LoaderComponent, StatTable } from '../../../../utils';
import { MonsterConfig } from '../../../../data';
import * as monsterdb from '../../../../data/monsterdata/monsterdb.json'
import { Pet } from '../../pet';

export class PetLoaderComponent extends LoaderComponent {
  public Entity: Pet

  public Awake() {

  }

  public Update(deltaTime: number) {

  }

  public LoadData(index: string): void {
    let rawMonsterDB: { [index: string]: any } = monsterdb
    let monsterData: { [index: string]: any } = rawMonsterDB[index]
    const config = MonsterConfig.statconfig
    const stats = MonsterConfig.stats
    /*
    For each piece of data in the monsterdata structure, check if the key corresponds to a
    piece of data specified in the MonsterConfig file. If it does, decide how to load that data
    based on the type specified in the config file.

    For example, if it is a stat table, find all the stat values specified in the config file and
    add them to the corresponding table
    */
    for (let key in monsterData) {
      if (key in config) {
        if (config[key] === 'StatTable') {
          if (!this.Entity.stats.hasTable(key)) {
            throw new Error(`Error: Monster has no stat table specified by ${key}`)
          }
          let monsterStats = monsterData[key]
          for (const stat of stats) {
            // If the stat isn't specified in the monsters database entry
            if (!(stat in monsterStats)) {
              // set to a default stat
              this.Entity.stats.setStatFromTable(key, stat, MonsterConfig.default_stat)
              //throw new Error(`Error: Monster does not have a stat specified by ${stat}`)
            }
            else {
              this.Entity.stats.setStatFromTable(key, stat, monsterStats[stat])
            }
            
          }
        }
        else if (config[key] === 'List') {
          if (!this.Entity.stats.hasTable(key)) {
            throw new Error(`Error: Monster has no stat list specified by ${key}`)
          }
          // Just set the stat equal to the entire list @todo: fix this to make a more robust data structure
          // will probably set it to map the name of the move/ability to a map mapping the name to the
          // move data
          else {
            // Force a deep copy
            let copied_data = JSON.parse(JSON.stringify(monsterData[key]))
            this.Entity.stats.setStatFromTable(key, key, copied_data)
            //this.Entity.stats.setStatFromTable(key, key, monsterData[key])
          }
        }
        else {
          let copied_data = JSON.parse(JSON.stringify(monsterData[key]))
          this.Entity.stats.setStatFromTable('data', key, copied_data)
          // Old way of copying used just the line below
          //this.Entity.stats.setStatFromTable('data', key, monsterData[key])
        }
      }
      else {
        let copied_data = JSON.parse(JSON.stringify(monsterData[key]))
        this.Entity.stats.setStatFromTable('data', key, copied_data)
        // Old way of copying used only the line below
        //this.Entity.stats.setStatFromTable('data', key, monsterData[key])
      }

    }

  }

}
