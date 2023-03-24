import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  private static instancesCount = 0;
  
  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.instancesCount += 1;
  }

  static createdRacesInstances(): number {
    return Elf.instancesCount;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}