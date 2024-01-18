class LevelPickedMenu {
  private buttonHeight: number;
  private buttonWidth: number;
  private buttonFontSize: number;
  private headingFontSize: number;

  constructor() {
    this.buttonWidth = width * 0.05;
    this.buttonHeight = width * 0.05;
    this.buttonFontSize = width * 0.021;
    this.headingFontSize = width * 0.02;
  }

  private drawDialogBox() {
    push();
    fill("white");
    rectMode(CENTER);
    rect(width * 0.5, height * 0.5, 950, 553);
    pop();
  }

  private drawGreyBackground() {
    push();
    fill(224, 224, 224, 10);
    rect(0, 0, width, height);
    pop();
  }

  private drawHeading() {
    push();
    textSize(this.headingFontSize);
    textAlign(CENTER);
    text("LEVEL PICKER", width * 0.5, height * 0.25);
    fill("black");
    pop();
  }
  private drawButtons() {
    push();
    fill("#D9D9D9");
    noStroke();
    rectMode(CENTER);
    rect(width * 0.29, height * 0.34, this.buttonWidth, this.buttonHeight);
    rect(width * 0.35, height * 0.34, this.buttonWidth, this.buttonHeight);
    pop();
  }
  private drawButtonTexts() {
    push();
    fill("black");
    textSize(this.buttonFontSize);
    textAlign(CENTER);
    text("1", width * 0.29, height * 0.32, 0);
    text("2", width * 0.35, height * 0.32, 0);
    pop();
  }

  public draw() {
    this.drawGreyBackground();
    this.drawDialogBox();
    this.drawHeading();
    this.drawButtons();
    this.drawButtonTexts();
  }
  public update() {}
}
