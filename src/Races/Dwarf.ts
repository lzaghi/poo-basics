import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  private static instancesCount = 0;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.instancesCount += 1;
  }

  static createdRacesInstances(): number {
    return Dwarf.instancesCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
