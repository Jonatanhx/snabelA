class Game {
  private activeMenu: IMenu;
  private level: Level;
  private levelFactory: LevelFactory;

  constructor() {
    this.level = new Level();
    this.levelFactory = new LevelFactory();
    this.activeMenu = new PauseMenu();
  }

  public nextLevel() {}

  private muteMain() {}

  private muteSfx() {}

  public setActiveMenu(menu: IMenu) {
    this.activeMenu = menu;
  }

  public update() {
    // ARROW UP / DOWN ÄR FÖR TEST
    if (keyCode === UP_ARROW) {
      this.setActiveMenu(new PauseMenu());
    }
    if (keyCode === DOWN_ARROW) {
      this.setActiveMenu(new GameOverMenu());
    }
  }

  public draw() {
    background("black");
    this.level.draw();
    this.activeMenu.draw();
  }
}
