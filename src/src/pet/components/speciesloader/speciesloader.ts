import { IComponent, LoaderComponent, StatTable } from '../../../../utils';
import { MonsterConfig } from '../../../../data';
import { Pet } from '../../pet';
import { Species, SpeciesDB } from '../../../species';

export class SpeciesLoaderComponent implements LoaderComponent {
  public Entity: Pet

  public Awake() {

  }

  public Update(deltaTime: number) {

  }

  public LoadData(index: string): void {
    let species: Species = SpeciesDB.getSpecies(index)
    this.Entity.stats.assignTable('species', species.stats)
  }
}
