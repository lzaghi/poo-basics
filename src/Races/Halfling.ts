import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  private static instancesCount = 0;
  
  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.instancesCount += 1;
  }

  static createdRacesInstances(): number {
    return Halfling.instancesCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}