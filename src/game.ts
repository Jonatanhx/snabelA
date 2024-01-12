class Game {
  pauseMenu = new PauseMenu();
  constructor() {}

  public update() {}

  public draw() {
    background("white");
    this.pauseMenu.draw();
  }
}
