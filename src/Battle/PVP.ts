// import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(
    protected player: Fighter,
    private _player2: Fighter,
  ) {
    super(player);
  }

  get player1(): Fighter {
    return this.player;
  }

  get player2(): Fighter {
    return this._player2;
  }

  fight() {
    while (this.player.lifePoints > -1 && this._player2.lifePoints > -1) {
      this.player.attack(this._player2);
      this._player2.attack(this.player);
    }
    return super.fight() === -1 ? -1 : 1;
  }
}