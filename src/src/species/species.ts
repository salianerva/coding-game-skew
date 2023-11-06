import { IStats, Stats } from "../../utils";

export class Species {
  private _statTable: Stats = new Stats()

  public get stats(): Stats {
    return this._statTable
  }
}
