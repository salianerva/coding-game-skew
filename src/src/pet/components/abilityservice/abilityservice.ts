import { MoveDB } from '../../../../data'
import { IComponent } from '../../../../utils'
import { Pet } from '../../pet'

// AbilityServiceComponent is the primary component responsible for handling Monster Moves.

export class AbilityServiceComponent implements IComponent {
  //private movedb: { [index: string]: any } = MoveDB
  public Entity: Pet

  public Awake() {

  }

  public Update() {

  }

  public modifyStat(stat: string, value: number) {
    if (this.Entity.stats.hasTable('data')) {
      if (this.Entity.stats.hasStatinTable('data', stat)) {
        let current_value = this.Entity.stats.getStatFromTable('data', stat)
        this.Entity.stats.setStatFromTable('data', stat, current_value + value)
      }
      else {
        throw new Error(`Error: Missing state stat specified by ${stat}`)
      }
    }
    else {
      throw new Error(`Error: Missing State`)
    }
  }

  // May Remove
  public setStat(table: string, stat: string, value: any) {
    if (this.Entity.stats.hasStatinTable(table, stat)) {
      this.Entity.stats.setStatFromTable(table, stat, value)
    }
  }

  // Implements the damage calculation incorporating the offensive stat, defensive stat, and possibly other factors
  //public baseDamageCalculation(base: number, scaling: number, off_stat: number, def_stat: number): number {
  //  return base*scaling*(off_stat / def_stat)
  //}

  // how a monster uses an ability
  // Sample damage calculation and move usage: TO REWORK LATER, NOT FINAL
  public useAbility(params: any, moveid: string): void {
    let move = MoveDB[moveid]
    //let user_power = this.Entity.stats.getStatFromTable('battlestate', 'power')
    // this will be used for main world abilities which won't invoke battle mechanics
    // eventually remove this
    /*
    if (this.Entity.stats.getStatFromTable('battlestate', 'power') > move.cost) {
      // Pay power cost
      this.addBattleStat('power', -1 * move.cost)
      // Calculate damage done by base damage
      let off_stat = this.Entity.stats.getStat(move.colour + '_o')
      let def_stat = target.stats.getStat(move.colour + '_d')
      let damage = this.baseDamageCalculation(move.base, move.scaling, off_stat, def_stat)
      target.GetComponent(AbilityServiceComponent).addBattleStat('damage', damage)
    }
    */
    move.onUse(this.Entity, params)
  }

  // A wrapper function that returns a function to execute the move with no parameters
  // this allows me to pass it as a callback to the scheduler to schedule
  // execution of the move
  public execute(params: any, moveid: string): () => void {
    return (): void => {
      this.useAbility(params, moveid)
    }
  }

}
