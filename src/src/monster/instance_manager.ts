import { Entity } from '../../utils';
import { Monster } from './monster';
import * as fs from 'graceful-fs'
import * as monsterdb from '../../data/monsterdata/monsterdb.json'
import { MonsterConfig } from '../../data/monsterdata/config'

export class MonsterInstanceManager extends Entity {
    private _party: Map<string, Monster> = new Map()
    private _savefile: String = MonsterConfig.save_file
    public _rawdb: { [index: string]: any } = monsterdb

    public getMonster(id: string): Monster {
        if (this._party.has(id)) {
            let mon = this._party.get(id)
            if (mon !== undefined) {
                return mon
            }
            else {
                throw new Error(`Error: Pet with id ${id} is undefined!`)
            }
        }
        else {
            this.loadData(id)
            let mon = this._party.get(id)
            if (mon !== undefined) {
                return mon
            }
            else {
                throw new Error(`Error: Pet with id ${id} not found!`)
            }
            //
        }
    }

    public copyMonster(source: string, target: string) {
        this._party.set(target, new Monster())
        // using the structured clone method when it comes out would be ideal
        //this._party.get(target)?._stats = structuredClone(this._party.get(source)._stats)
        // for now do it manually, will replace when structured cloning comes out
        
        let nstat = this._party.get(target)?._stats
        let ostat = this._party.get(source)?._stats
        if (ostat != undefined) {
            for (let [key, value] of ostat) {
                nstat?.set(key, JSON.parse(JSON.stringify(value)))
            }
        }
        this._party.get(target)?._stats.set("mid", target)
        
    }

    public setMonster(id: string, monster: Monster) {
        this._party.set(id, monster)
    }

    public set_data(id: string, data: string, value: any) {
        if (this.has(id)) {
            this.getMonster(id)._stats.set(data, value)
        }
    }

    public has(id: string) {
        return this._party.has(id)
    }

    public add_ability(id: string, abtype: string, ability: any) {
        this.getMonster(id).update_list(abtype, ability)
    }

    public update_table(id: string, table: string, entry: string, value: any) {
        this.getMonster(id).update_table(table, entry, value)
    }

    public writeData(id: string, fullwrite = false) {
        let obj: { [index: string]: any } = {}
        let config = MonsterConfig.statconfig
        let mon = this.getMonster(id)
        //let id = this.Entity.stats.getStatFromTable('data', 'mid')
      if (fullwrite) {
        for (let [key, data] of mon._stats) {
          if ((data instanceof Map)) {
            obj[key] = mon._stats.get(key).objectify()
          }
          else {
            obj[key] = mon._stats.get(key)
          }
        }
      } else {
        for (let key in config) {
          let data = mon._stats.get(key)
          if ((data instanceof Map)) {
            //console.log(data)
            //console.log("mapinstance?")
            //console.log(data instanceof Map)
            //console.log(data instanceof Array)
            obj[key] = mon._stats.get(key).objectify()
          }
          else {
            obj[key] = mon._stats.get(key)
          }

        }

      }
      
        
        //let data = this.Entity.stats.getTable('data')

        //for (let entry of data.keys()) {
        //    obj[entry] = data.getStat(entry)
        //}
        // rawmonsterDB gets a "default" property here that is annoying
        // BTW THIS IS VERY BROKEN: IM USING THE OLD MONSTER DATA, SO WRITING A
        // DIFFERENT MONSTER LATER WILL OVERWRITE ANY PREVIOUS WRITES UNLESS I MAKE SURE MONSTERDB IS UP TO DATE: SHOULD MAKE SURE IM WRITING DIRECTLY TO THE SOURCE OF MONSTERDB
        // AND UPDATING THE VARIABLE THIS CODE IS ACCESSING
        // IN PRACTICE I SHOULD JUST FLUSH THE ACCOUNT DATA ONCE
        //let rawmonsterDB: { [index: string]: any } = monsterdb

      this._rawdb[id] = obj
        // need to replace this with a proper write function
        //let str = JSON.stringify(rawmonsterDB)
        // delete the weird default property, may remove later
        
      delete this._rawdb.default

        
      fs.writeFileSync(MonsterConfig.save_file, JSON.stringify(this._rawdb), 'utf-8')
    }

    public loadData(id: string, fullload = false): void {
        let monsterData: { [index: string]: any } = this._rawdb[id]
        const config = MonsterConfig.statconfig
        const stats = MonsterConfig.stats
        this._party.set(id, new Monster())
        /*
        For each piece of data in the monsterdata structure, check if the key corresponds to a
        piece of data specified in the MonsterConfig file. If it does, decide how to load that data
        based on the type specified in the config file.
    
        For example, if it is a stat table, find all the stat values specified in the config file and
        add them to the corresponding table
        */
        for (let key in monsterData) {
          if (fullload) {
            let monsterStats = monsterData[key]
            let copied_data = JSON.parse(JSON.stringify(monsterData[key]))
            this.getMonster(id)._stats.set(key, copied_data)
          } else {
            if (key in config) {
              let monsterStats = monsterData[key]
              let copied_data = JSON.parse(JSON.stringify(monsterData[key]))
              this.getMonster(id)._stats.set(key, copied_data)
              // Old way of copying used only the line below
              //this.Entity.stats.setStatFromTable('data', key, monsterData[key])
            }
          }
            

        }

    }
}