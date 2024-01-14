class Game {
  pauseMenu = new PauseMenu();
  constructor() {}

  public update() {}

  public draw() {
    background("white");
    // Rita interaktiv pausemenyn
    // this.pauseMenu.draw(button1Route,button2Route,button3Route);
    this.pauseMenu.draw();
  }
}
