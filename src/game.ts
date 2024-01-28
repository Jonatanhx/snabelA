interface CurrentActiveMenu {
  setActiveMenu(menu?: IMenu, levelId?: number): void;
  restartLevel(): void;
}

class Game implements CurrentActiveMenu {
  //Lokala variabel och typ definitioner. Game ska innehålla en meny, en level och en fabrik för att skapa nya levlar.
  private activeMenu?: IMenu; //Polymorfism
  private level: Level;
  private levelFactory: LevelFactory;
  private sound: Sound;

  // Här skapar vi instanserna av det vi har definierat.
  constructor() {
    //Vad ska finnas i början?
    this.sound = new Sound();
    this.levelFactory = new LevelFactory(); // Contstuctor Dependecy injection
    this.level = this.levelFactory.generateLevel(1, this); // Method Depenecy injection
    this.activeMenu = new StartMenu(this);
  }

  public playExplosion() {
    this.sound.playExplodeSound();
  }
  public nextLevel() {}

  private muteMain() {}

  private muteSfx() {}

  public setActiveMenu(menu: IMenu, levelId?: number) {
    this.activeMenu = menu;
    if (levelId) {
      this.level = this.levelFactory.generateLevel(levelId, this);
    }
  }

  public restartLevel() {
    this.level = this.levelFactory.generateLevel(this.level.id, this);
  }

  public update() {
    if (this.activeMenu) {
      this.activeMenu.update();
    } else {
      this.level.update();
      // Game is running
      if (keyIsDown(ESCAPE)) {
        // Pressed Escape key, pause the game
        this.setActiveMenu(new PauseMenu(game));
      }
    }
  }

  public draw() {
    myBackground.update();
    myBackground.draw();

    if (this.activeMenu) {
      this.activeMenu.draw();
    } else {
      this.level.draw(); // Rita ut level
    }
  }
}
