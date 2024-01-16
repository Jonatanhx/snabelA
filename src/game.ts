class Game {
  //Lokala variabel och typ definitioner. Game ska innehålla en meny, en level och en fabrik för att skapa nya levlar.
  /* private activeMenu: Menu; */
  private activeMenu: StartMenu;
  private level: Level;
  private levelFactory: LevelFactory;
  

  // Här skapar vi instanserna av det vi har definierat.
  constructor() {
    //Vad ska finnas i början?
    /* this.activeMenu = new Menu(); */
    this.level = new Level();
    this.levelFactory = new LevelFactory();
    this.activeMenu = new StartMenu(color("yellow"));
  }

  // ------------ METODER ------------------
  //
  public nextLevel() {}

  private muteMain() {}

  private muteSfx() {}

  //räknar ut ändringar som ska ske i instanser av game
  public update() {}

  public draw() {
    background("white");
    this.level.draw(); // Rita ut level
    this.activeMenu.draw();
  }
}
