import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  private static instancesCount = 0;

  constructor(
    name: string,
  ) {
    super(name);
    this._energyType = 'mana';
    Mage.instancesCount += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage.instancesCount;
  }
}