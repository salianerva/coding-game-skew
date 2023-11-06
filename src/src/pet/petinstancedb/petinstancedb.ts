import { Entity } from '../../../utils';
import { Pet } from "../pet";
import { PetParty } from '../petparty';


// The global instance Database for loaded monsters
export class PetInstanceDB extends Entity {
  public static instancedb: PetParty = new PetParty()

  //public Awake(): void {

 // }

  //public Update(deltaTime: number): void {

  //}

  public static getPet(id: string): Pet {
    if (this.instancedb.has(id)) {
      return this.instancedb.getPet(id)
    }
    else {
      let newMon = new Pet()
      newMon.InitPet()
      newMon.InitBattleState()
      newMon.getPetInstance(id)
      this.instancedb.setPet(id, newMon)
      return newMon
    }
  }

  public static setPet(id: string, mon: Pet): void {
    this.instancedb.setPet(id, mon)
  }
}
