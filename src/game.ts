class Game {
  //Lokala variabel och typ definitioner. Game ska innehålla en meny, en level och en fabrik för att skapa nya levlar.
  private activeMenu: IMenu; //Polymorfism
  private level: Level;
  private levelFactory: LevelFactory;

  // Här skapar vi instanserna av det vi har definierat.
  constructor() {
    //Vad ska finnas i början?
    this.levelFactory = new LevelFactory();
    this.level = this.levelFactory.generateLevel();
    this.activeMenu = new StartMenu();
  }

  public nextLevel() {}

  private muteMain() {}

  private muteSfx() {}

  public setActiveMenu(menu: IMenu) {
    this.activeMenu = menu;
  }

  public update() {
    if (keyCode == 27) {
      this.setActiveMenu(new PauseMenu());
    }
    if (this.level.gameState == "gameOver") {
      this.setActiveMenu(new GameOverMenu());
      this.activeMenu.draw();
    } else if (this.level.gameState == "goalReached") {
      this.setActiveMenu(new GoalMenu(1));
      this.activeMenu.draw();
    } else if (this.level.gameState == "paused") {
      console.log(this.level.gameState);
      this.activeMenu = new PauseMenu();
      this.activeMenu.draw();
    } else {
      this.level.update();
    }
    this.activeMenu.update();
  }

  public draw() {
    background("white");
    // this.level.draw(); // Rita ut level
    this.activeMenu.draw();
  }
}
