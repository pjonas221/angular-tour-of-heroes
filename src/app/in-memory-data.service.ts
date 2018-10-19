import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice', height:"6'3", weight:220, superpowers:'Generosity' },
      { id: 12, name: 'Narco', height:"5'3", weight:180, superpowers:'Super Strength' },
      { id: 13, name: 'Bombasto', height:"6'1", weight:224, superpowers:'Explosive Kicks' },
      { id: 14, name: 'Celeritas', height:"5'11", weight:210, superpowers:'Summon Vegetables' },
      { id: 15, name: 'Magneta', height:"6'0", weight:190, superpowers:'Flight' },
      { id: 16, name: 'RubberMan', height:"5'9", weight:170, superpowers:'Flexibility' },
      { id: 17, name: 'Dynama', height:"6'2", weight:247, superpowers:'Explosive PUNCHES' },
      { id: 18, name: 'Dr IQ', height:"5'10", weight:218, superpowers:'Super Intelligence' },
      { id: 19, name: 'Magma', height:"4'11", weight:120, superpowers:'Super Strength' },
      { id: 20, name: 'Tornado', height:"5'3", weight:168, superpowers:'Flight' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}