class GoalMenu implements IMenu {
  private headingWidth: number;
  private headingHeight: number;
  private headingFontSize: number;
  private game: CurrentActiveMenu;
  private restartButton: Button;
  private exitButton: Button;
  /**
   *
   * @param level What level is completed, 1,2,3 etc....
   */

  constructor(game: CurrentActiveMenu) {
    this.game = game;
    this.headingWidth = width * 0.5;
    this.headingHeight = height * 0.6;
    this.headingFontSize = width * 0.03;

    this.restartButton = new Button(
      menuImage.buttonImg,
      "RESTART",
      width * 0.02,
      width * 0.345,
      height * 0.457,
      width * 0.15,
      width * 0.065,
      color("white"),
      color("black"),
      2
    );
    this.exitButton = new Button(
      menuImage.buttonImg,
      "EXIT",
      width * 0.02,
      width * 0.505,
      height * 0.457,
      width * 0.15,
      width * 0.065,
      color("white"),
      color("black"),
      2
    );
  }

  private drawDialogBox() {
    push();
    fill("#D9D9D9");
    rectMode(CENTER);
    image(
      menuImage.menuBackground,
      width * 0.25,
      height * 0.22,
      this.headingWidth,
      this.headingHeight
    );
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
    stroke("black");
    strokeWeight(3);
    fill("white");
    textAlign(CENTER, CENTER);
    textFont(font.gameFont);
    text(`LEVEL COMPLETE`, width * 0.5, height * 0.35);
    fill("black");
    pop();
  }

  public update(): void {
    if (this.restartButton.update()) {
      this.game.restartLevel();
      this.game.setActiveMenu(undefined);
    }
    if (this.exitButton.update()) {
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
    if (
      this.restartButton.contains(mouseX, mouseY) ||
      this.exitButton.contains(mouseX, mouseY)
    ) {
      cursor(HAND);
    } else {
      cursor(ARROW);
    }
  }
}
