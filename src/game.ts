interface CurrentActiveMenu {
  setActiveMenu(menu?: IMenu): void;
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
    this.levelFactory = new LevelFactory();
    this.level = this.levelFactory.generateLevel();
    this.activeMenu = new StartMenu(this);
  }

  public playExplosion() {
    this.sound.playExplodeSound();
  }
  public nextLevel() {}

  private muteMain() {}

  private muteSfx() {}

  public setActiveMenu(menu: IMenu) {
    this.activeMenu = menu;
  }

  public restartLevel() {
    this.levelFactory = new LevelFactory();
    this.level = this.levelFactory.generateLevel();
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
    background("white");

    if (this.activeMenu) {
      this.activeMenu.draw();
    } else {
      this.level.draw(); // Rita ut level
    }
  }
}
