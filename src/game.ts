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

  public update() { // en tillfällig lösning för att kunna bläddra mellan menyerna
    if (keyIsDown(RIGHT_ARROW)) {
      if (this.activeMenu instanceof StartMenu) {
        this.activeMenu = new GameOverMenu();
      } else if (this.activeMenu instanceof GameOverMenu) {
        this.activeMenu = new PauseMenu();
      } else if (this.activeMenu instanceof PauseMenu) {
        this.activeMenu = new LevelPickedMenu();
      } else if (this.activeMenu instanceof LevelPickedMenu) {
        this.activeMenu = new StartMenu();
      }
    } else if (keyIsDown(LEFT_ARROW)) {
      if (this.activeMenu instanceof StartMenu) {
        this.activeMenu = new LevelPickedMenu();
      } else if (this.activeMenu instanceof GameOverMenu) {
        this.activeMenu = new StartMenu();
      } else if (this.activeMenu instanceof PauseMenu) {
        this.activeMenu = new GameOverMenu();
      } else if (this.activeMenu instanceof LevelPickedMenu) {
        this.activeMenu = new PauseMenu();
      }
      this.level.update();
    }
    this.level.update();
    this.activeMenu.update();
  }

  public draw() {
    background("white");
    this.activeMenu.draw();
    console.log(this.level);
    this.level.draw(); // Rita ut level
  }
}
