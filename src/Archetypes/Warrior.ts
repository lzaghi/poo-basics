import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static instancesCount = 0;

  constructor(
    name: string,
  ) {
    super(name);
    this._energyType = 'stamina';
    Warrior.instancesCount += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Warrior.instancesCount;
  }
}