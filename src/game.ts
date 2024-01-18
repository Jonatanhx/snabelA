class Game {
  //Lokala variabel och typ definitioner. Game ska innehålla en meny, en level och en fabrik för att skapa nya levlar.
  /*   private activeMenu: Menu; */
  private level: Level;
  private levelFactory: LevelFactory;
  private gameOver: GameOverMenu;

  // Här skapar vi instanserna av det vi har definierat.
  constructor() {
    //Vad ska finnas i början?
    /*  this.activeMenu = new Menu(); */
    this.level = new Level();
    this.levelFactory = new LevelFactory();
    this.gameOver = new GameOverMenu();
  }

  // ------------ METODER ------------------
  //
  public nextLevel() {}

  private muteMain() {}

  private muteSfx() {}

  //räknar ut ändringar som ska ske i instanser av game
  public update() {
    if (this.gameOver) {
      this.gameOver.update();
    } else {
      // Game update logic ….
    }
  }
  public draw() {
    this.gameOver.draw();
  }
}
