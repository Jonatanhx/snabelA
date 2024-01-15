class Game {
  levelPickedMenu = new LevelPickedMenu();
  constructor() {}

  public update() {}

  public draw() {
    background("black");
    this.levelPickedMenu.draw();
  }
}
