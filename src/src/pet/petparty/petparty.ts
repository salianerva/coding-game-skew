import { Entity } from '../../../utils';
import { Pet } from "../pet";

export class PetParty {
  private _party: Map<string, Pet> = new Map()

  public getPet(id: string): Pet {
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
      throw new Error(`Error: Pet with id ${id} not found!`)
    }
  }

  public setPet(id: string, monster: Pet) {
    this._party.set(id, monster)
  }

  public has(id: string) {
    return this._party.has(id)
  }

}


  
