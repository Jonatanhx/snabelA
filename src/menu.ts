abstract class Menu {
  constructor(game: Game) {
    this.game = game;
  }

  abstract draw(): void;
  abstract update(): void;
}
