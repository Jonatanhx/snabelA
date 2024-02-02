/**
 * Interface for changing menu and restarting level (wierd name)
 */
interface CurrentActiveMenu {
  //Method to set active meny and optionally a level ID
  setActiveMenu(menu?: IMenu, levelId?: number): void;
  restartLevel(): void;
}

class Game implements CurrentActiveMenu {
  private activeMenu?: IMenu;
  private level: Level;
  private levelFactory: LevelFactory;
  private sound: Sound;
  private background: Background;
  private fpsCounter: FpsCounter;

  constructor() {
    this.sound = new Sound();
    this.levelFactory = new LevelFactory();
    this.level = this.levelFactory.generateLevel(1, this);
    this.activeMenu = new StartMenu(this);
    this.background = new Background();
    this.fpsCounter = new FpsCounter();
  }
  /*** Uses Sound class to play sounds from Sketch (preloaded)*/
  public playExplosion() {
    this.sound.playExplodeSound();
  }

  /** Play the sound when the active menu is unidentified (the game is active), do not play the music when the menu is active. */
  public playBgLoop() {
    if (!this.activeMenu && !this.sound.backgroundLoop.isPlaying()) {
      this.sound.playBackgroundLoop();
    } else if (this.activeMenu && this.sound.backgroundLoop.isPlaying()) {
      this.sound.backgroundLoop.stop();
    }
  }

  /**
   * Sets active menu for the application, if no menu the desired level is rendered
   * @param menu StartMenu / PauseMenu / LevelPickedMenu / GameOverMenu / undefined
   * @param levelId Which level to render 1,2,3... (see levelFactory for level details)
   */
  public setActiveMenu(menu: IMenu, levelId?: number) {
    this.activeMenu = menu;
    if (levelId) {
      this.level = this.levelFactory.generateLevel(levelId, this);
    }
  }

  /** Regenerates running level, appears as restarting  */
  public restartLevel() {
    this.level = this.levelFactory.generateLevel(this.level.id, this);
  }

  public update() {
    this.background.update();
    this.fpsCounter.update();
    this.sound.update();
    if (this.activeMenu) {
      //Check if active menu exists
      this.activeMenu.update();
    } else {
      //If no active menu then update the level and handle the Escape-key
      this.level.update();
      if (keyIsDown(ESCAPE)) {
        this.setActiveMenu(new PauseMenu(game));
      }
      this.playBgLoop();
    }
  }

  public draw() {
    //Draw either active menu or the level based on the game state
    this.background.draw();
    if (this.activeMenu) {
      this.activeMenu.draw();
    } else {
      this.level.draw();
    }
    this.fpsCounter.draw();
    this.sound.draw();
  }
}
