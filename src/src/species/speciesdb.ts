import { speciesDB } from '../../data';
import { SpeciesConfig } from '../../data';
import { StatTable } from '../../utils';
import { Species } from './species';

// This is a wrapper class for a database that stores all species data

export class SpeciesDB {

  static _speciesdb: Map<string, Species> = new Map()

  public static getSpecies(species: string): Species {
    if (SpeciesDB._speciesdb.has(species)) {
      let speciesData = SpeciesDB._speciesdb.get(species)
      if (speciesData !== undefined) {
        return speciesData
      }
    }
    else {
      SpeciesDB.LoadData(species)
      let speciesData = SpeciesDB._speciesdb.get(species)
      if (speciesData !== undefined) {
        return speciesData
      }
      else {
        throw new Error(`Error: Failed to load species ${species}`)
      }
    }
    throw new Error(`Error: Shouldn't be reachable`)
  }

  private static LoadData(index: string): void {
    
    let rawSpeciesDB: { [index: string]: any } = speciesDB
    let speciesData: { [index: string]: any } = rawSpeciesDB[index]
    const config = SpeciesConfig.statconfig
    const stats = SpeciesConfig.stats
    let name = speciesData['name']

    if (SpeciesDB._speciesdb.has(name)) {
      return
    }
    let species = new Species()
    /*
    For each piece of data in the monsterdata structure, check if the key corresponds to a
    piece of data specified in the MonsterConfig file. If it does, decide how to load that data
    based on the type specified in the config file.

    For example, if it is a stat table, find all the stat values specified in the config file and
    add them to the corresponding table
    */
    for (let key in speciesData) {
      if (key in config) {
        if (config[key] === 'StatTable') {
          if (!species.stats.hasTable(key)) {
            species.stats.assignTable(key, new StatTable())
          }
          let speciesStats = speciesData[key]
          for (const stat of stats) {
            // If the stat isn't specified in the monsters database entry
            if (!(stat in speciesStats)) {
              // set to a default stat
              species.stats.setStatFromTable(key, stat, SpeciesConfig.default_stat)
              //throw new Error(`Error: Monster does not have a stat specified by ${stat}`)
            }
            else {
              species.stats.setStatFromTable(key, stat, speciesStats[stat])
            }
          }
        }
        else {
          species.stats.setStat(key, speciesData[key])
        }
      }
      else {
        species.stats.setStat(key, speciesData[key])
      }

    }
    SpeciesDB._speciesdb.set(name, species)

  }
}
