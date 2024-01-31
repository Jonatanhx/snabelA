class PauseMenu implements IMenu {
  private headingWidth: number;
  private headingHeight: number;
  private headingFontSize: number;

  private resumeButton: Button;
  private restartButton: Button;
  private exitButton: Button;
  private game: CurrentActiveMenu;

  /**
   *
   * @param game Takes game as parameter
   */
  constructor(game: CurrentActiveMenu) {
    this.game = game;
    this.headingWidth = width * 0.5;
    this.headingHeight = height * 0.6;
    this.headingFontSize = width * 0.04;
    this.resumeButton = new Button(
      menuImage.buttonImg,
      "RESUME",
      width * 0.02,
      width * 0.345,
      height * 0.4,
      width * 0.15,
      width * 0.065,
      color("white"),
      color("black"),
      0
    );
    this.restartButton = new Button(
      menuImage.buttonImg,
      "RESTART",
      width * 0.02,
      width * 0.505,
      height * 0.4,
      width * 0.15,
      width * 0.065,
      color("white"),
      color("black"),
      0
    );
    this.exitButton = new Button(
      menuImage.buttonImg,
      "EXIT",
      width * 0.02,
      width * 0.425,
      height * 0.55,
      width * 0.15,
      width * 0.065,
      color("black"),
      color("black"),
      0
    );
  }

  private drawDialogBox() {
    push();
    fill("#D9D9D9");
    rectMode(CENTER);
    image(
      menuImage.menuBackground,
      width * 0.25,
      height * 0.2,
      this.headingWidth,
      this.headingHeight
    );
    /* rect(width * 0.5, height * 0.5, this.headingWidth, this.headingHeight );*/
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
    fill("orange");
    textAlign(CENTER, CENTER);
    textFont(font.gameFont);
    text("PAUSED", width * 0.5, height * 0.3);

    pop();
  }

  public draw(): void {
    this.drawGreyBackground();
    this.drawDialogBox();
    this.drawHeading();
    this.resumeButton.draw();
    this.restartButton.draw();
    this.exitButton.draw();
    // when hover over button, appears hand
    if (
      this.resumeButton.contains(mouseX, mouseY) ||
      this.restartButton.contains(mouseX, mouseY) ||
      this.exitButton.contains(mouseX, mouseY)
    ) {
      cursor(HAND);
    } else {
      cursor(ARROW);
    }
  }
  public update(): void {
    if (this.resumeButton.update()) {
      this.game.setActiveMenu(undefined);
    }
    if (this.restartButton.update()) {
      this.game.setActiveMenu(undefined);
      this.game.restartLevel();
    }
    if (this.exitButton.update()) {
      this.game.setActiveMenu(new StartMenu(this.game));
    }
  }
}
