class GoalMenu implements IMenu {
  private headingWidth: number;
  private headingHeight: number;
  private headingFontSize: number;
  private level: number;
  private game: CurrentActiveMenu;
  private restartButton: Button;
  private exitButton: Button;
  /**
   *
   * @param level What level is completed, 1,2,3 etc....
   */

  constructor(game: CurrentActiveMenu, level: number) {
    this.game = game;
    this.headingWidth = width * 0.5;
    this.headingHeight = height * 0.6;
    this.headingFontSize = width * 0.02;

    this.level = level;
    this.restartButton = new Button(
      menuImage.buttonImg,
      "RESTART",
      width * 0.02,
      width * 0.345,
      height * 0.457,
      width * 0.15,
      width * 0.065
    );
    this.exitButton = new Button(
      menuImage.buttonImg,
      "EXIT",
      width * 0.02,
      width * 0.505,
      height * 0.457,
      width * 0.15,
      width * 0.065
    );
  }

  private drawDialogBox() {
    push();
    fill("#D9D9D9");
    rectMode(CENTER);
    rect(width * 0.5, height * 0.5, this.headingWidth, this.headingHeight);
    pop();
  }

  private drawGreyBackground() {
    push();
    fill(224, 224, 224, 50);
    rect(0, 0, width, height);
    pop();
  }
  private drawHeading() {
    push();
    textSize(this.headingFontSize);
    textAlign(CENTER, CENTER);
    text(`YOU COMPLETED LEVEL ${this.level}`, width * 0.5, height * 0.35);
    fill("black");
    pop();
  }

  public update(): void {
    if (this.restartButton.update()) {
      console.log("RESTART BUTTON WAS CLICKED, CHANGIN MENU");
      // ÄNDRA DETTA, VI SKALL INTE ANVÄNDA GLOBALA VARIABLER
      this.game.restartLevel();
      this.game.setActiveMenu(undefined);
    }
    if (this.exitButton.update()) {
      console.log("EXIT BUTTON WAS CLICKED, CHANGIN MENU");
      // ÄNDRA DETTA, VI SKALL INTE ANVÄNDA GLOBALA VARIABLER
      this.game.setActiveMenu(new StartMenu(this.game));
    }
  }

  public draw(): void {
    this.drawGreyBackground();
    this.drawDialogBox();
    this.drawHeading();
    this.restartButton.draw();
    this.exitButton.draw();
    // when hover over button, appears hand 
    if (this.restartButton.contains(mouseX, mouseY) || this.exitButton.contains(mouseX, mouseY) ) {
      cursor(HAND);
    } else {
      cursor(ARROW);
    }
  }
}
