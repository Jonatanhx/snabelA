class LevelPickedMenu implements IMenu {
  private headingWidth: number;
  private headingHeight: number;
  private headingFontSize: number;

  private levelButton1: Button;
  private levelButton2: Button;
  private game: CurrentActiveMenu;

  constructor(game: CurrentActiveMenu) {
    this.game = game;
    this.headingWidth = width * 0.5;
    this.headingHeight = height * 0.6;
    this.headingFontSize = width * 0.04;
    this.levelButton1 = new Button(
      "1",
      width * 0.02,
      width * 0.3,
      height * 0.357,
      width * 0.07,
      width * 0.06
    );
    this.levelButton2 = new Button(
      "2",
      width * 0.02,
      width * 0.4,
      height * 0.357,
      width * 0.07,
      width * 0.06
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
    text("Level Picked", width * 0.5, height * 0.3);
    fill("black");
    pop();
  }

  public draw(): void {
    this.drawGreyBackground();
    this.drawDialogBox();
    this.drawHeading();
    this.levelButton1.draw();
    this.levelButton2.draw();
  }
  public update(): void {
    if (this.levelButton1.update()) {
      console.log("Level 1 loading");
      this.game.setActiveMenu(undefined);
    }
    if (this.levelButton2.update()) {
      console.log("Level 2 loading");
    }
  }
}
