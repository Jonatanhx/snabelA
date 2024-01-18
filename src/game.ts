class Game {
  private activeMenu: IMenu;
  //Lokala variabel och typ definitioner. Game ska innehålla en meny, en level och en fabrik för att skapa nya levlar.
  /* private activeMenu: Menu; */
  private activeMenu: IMenu; //Polymorfism
  private level: Level;
  private levelFactory: LevelFactory;
  private gameOver: GameOver;

  // Här skapar vi instanserna av det vi har definierat.
  constructor() {
    //Vad ska finnas i början?
    this.level = new Level();
    this.levelFactory = new LevelFactory();
    this.activeMenu = new StartMenu();
  }

  public nextLevel() {}

  private muteMain() {}

  private muteSfx() {}

  public setActiveMenu(menu: IMenu) {
    this.activeMenu = menu;
  }

  public update() {
    if (keyIsDown(RIGHT_ARROW)) {
      if (this.activeMenu instanceof StartMenu) {
        this.activeMenu = new GameOverMenu();
      } else if (this.activeMenu instanceof GameOverMenu) {
        this.activeMenu = new PauseMenu();
      } else if (this.activeMenu instanceof PauseMenu) {
        this.activeMenu = new LevelPickerMenu();
      } else if (this.activeMenu instanceof LevelPickerMenu) {
        this.activeMenu = new StartMenu();
      }
    } else if (keyIsDown(LEFT_ARROW)) {
      if (this.activeMenu instanceof StartMenu) {
        this.activeMenu = new LevelPickerMenu();
      } else if (this.activeMenu instanceof GameOverMenu) {
        this.activeMenu = new StartMenu();
      } else if (this.activeMenu instanceof PauseMenu) {
        this.activeMenu = new GameOverMenu();
      } else if (this.activeMenu instanceof LevelPickerMenu) {
        this.activeMenu = new PauseMenu();
      }
    }
  }

  public draw() {
    background("white");
    this.level.draw(); // Rita ut level
    this.activeMenu.draw();
  }
}
