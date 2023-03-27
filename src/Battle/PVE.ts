import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    protected player: Fighter,
    private _enemies: SimpleFighter[],
  ) {
    super(player);
  }

  fight() {
    while (
      this.player.lifePoints > -1
      && this._enemies.every((enemy) => enemy.lifePoints > -1)) {
      this._enemies.forEach((enemy) => this.player.attack(enemy));
      this._enemies.forEach((enemy) => enemy.attack(this.player));
    }
    return super.fight() === -1 ? -1 : 1;
  }
}