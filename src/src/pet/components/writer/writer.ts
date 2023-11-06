import { IComponent, WriterComponent, StatTable } from '../../../../utils';
import { MonsterConfig } from '../../../../data';
import * as monsterdb from '../../../../data/monsterdata/monsterdb.json'
import { Pet } from '../../pet';
import * as fs from 'graceful-fs'

// Eventually need to ensure that all data is synchronized. This shouldn't be an issue since a monsterinstance
// should only ever be loaded once from file, and can only be written after that first and only load from the
// instance, and can only be written from the instance itself

export class PetWriterComponent extends WriterComponent {

  public Entity: Pet

  public Awake(): void {

  }

  public Update(deltaTime: number): void {

  }
  // this function will eventually be redirected to write to a database, possibly over the internet
  public writeData() {
    let obj: { [index: string]: any } = {}
    let config = MonsterConfig.statconfig
    let id = this.Entity.stats.getStatFromTable('data', 'mid')
    for (let key in config) {
      if (config[key] === 'StatTable') {
        obj[key] = this.Entity.stats.getTable(key).objectify()
      }
      else if (config[key] === 'List') {
        obj[key] = this.Entity.stats.getTable(key).objectify()[key]
      }
    }
    let data = this.Entity.stats.getTable('data')

    for (let entry of data.keys()) {
      obj[entry] = data.getStat(entry)
    }
    // rawmonsterDB gets a "default" property here that is annoying
        // BTW THIS IS VERY BROKEN: IM USING THE OLD MONSTER DATA, SO WRITING A
    // DIFFERENT MONSTER LATER WILL OVERWRITE ANY PREVIOUS WRITES UNLESS I MAKE SURE MONSTERDB IS UP TO DATE: SHOULD MAKE SURE IM WRITING DIRECTLY TO THE SOURCE OF MONSTERDB
    // AND UPDATING THE VARIABLE THIS CODE IS ACCESSING
    // IN PRACTICE I SHOULD JUST FLUSH THE ACCOUNT DATA ONCE
    let rawmonsterDB: { [index: string]: any } = monsterdb

    rawmonsterDB[id] = obj

    // need to replace this with a proper write function
    //let str = JSON.stringify(rawmonsterDB)
    // delete the weird default property, may remove later
    delete rawmonsterDB.default
    // 

    fs.writeFileSync(MonsterConfig.save_file, JSON.stringify(rawmonsterDB), 'utf-8')
  }

}
