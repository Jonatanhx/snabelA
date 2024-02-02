class LevelPickedMenu implements IMenu {
  private headingWidth: number;
  private headingHeight: number;
  private headingFontSize: number;

  private levelButton1: Button;
  private levelButton2: Button;
  private levelButton3: Button;
  private game: CurrentActiveMenu;

  constructor(game: CurrentActiveMenu) {
    this.game = game;
    this.headingWidth = width * 0.5;
    this.headingHeight = height * 0.6;
    this.headingFontSize = width * 0.04;
    this.levelButton1 = new Button(
      menuImage.buttonImg,
      "1",
      width * 0.02,
      width * 0.36,
      height * 0.4,
      width * 0.07,
      width * 0.06,
      color("white"),
      color("black"),
      3
    );
    this.levelButton2 = new Button(
      menuImage.buttonImg,
      "2",
      width * 0.02,
      width * 0.46,
      height * 0.4,
      width * 0.07,
      width * 0.06,
      color("white"),
      color("black"),
      3
    );
    this.levelButton3 = new Button(
      menuImage.buttonImg,
      "3",
      width * 0.02,
      width * 0.56,
      height * 0.4,
      width * 0.07,
      width * 0.06,
      color("white"),
      color("black"),
      3
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
    textFont(font.gameFont);
    textAlign(CENTER, CENTER);
    text("Level Picker", width * 0.5, height * 0.3);
    fill("black");
    pop();
  }

  public draw(): void {
    this.drawGreyBackground();
    this.drawDialogBox();
    this.drawHeading();
    this.levelButton1.draw();
    this.levelButton2.draw();
    this.levelButton3.draw();
    // when hover over button, appears hand
    if (
      this.levelButton1.contains(mouseX, mouseY) ||
      this.levelButton2.contains(mouseX, mouseY) ||
      this.levelButton3.contains(mouseX, mouseY)
    ) {
      cursor(HAND);
    } else {
      cursor(ARROW);
    }
  }
  public update(): void {
    if (this.levelButton1.update()) {
      console.log("Level 1 loading");
      this.game.setActiveMenu(undefined, 1);
    }
    if (this.levelButton2.update()) {
      console.log("Level 2 loading");
      this.game.setActiveMenu(undefined, 2);
    }
    if (this.levelButton3.update()) {
      console.log("Level 3 loading");
      this.game.setActiveMenu(undefined, 3);
    }
  }
}
