class LevelPickedMenu {
  private button1X: number;
  private button1Y: number;
  private buttonHeight: number;
  private buttonWidth: number;
  private buttonFontSize: number;
  private headingFontSize: number;
  private button1Area: number;

  constructor() {
    this.button1X = width * 0.42;
    this.button1Y = height * 0.5;
    this.buttonWidth = width * 0.05;
    this.buttonHeight = width * 0.055;
    this.button1Area = (this.buttonWidth * this.buttonHeight) / 20;
    this.buttonFontSize = width * 0.015;
    this.headingFontSize = width * 0.02;
  }

  private drawDialogBox() {
    push();
    fill("#D9D9D9");
    rectMode(CENTER);
    rect(width * 0.5, height * 0.5, 702, 553);
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
    text("Level picked", width * 0.5, height * 0.4);
    fill("black");
    pop();
  }
  private drawButtons() {
    push();
    fill("white");
    rectMode(CENTER);
    rect(width * 0.45, height * 0.48, this.buttonWidth, this.buttonHeight);
    rect(width * 0.52, height * 0.48, this.buttonWidth, this.buttonHeight);
    pop();
  }
  private drawButtonTexts() {
    push();
    fill("black");
    textSize(this.buttonFontSize);
    textAlign(CENTER);
    text("Level 1", width * 0.45, height * 0.45, 0);
    text("Level 2", width * 0.52, height * 0.45, 0);
    pop();
  }

  public clicked() {
    let d = dist(mouseX, mouseY, this.button1X, this.button1Y);
    if (d < this.button1Area) {
      this.buttonHeight;
      console.log(this.button1Area);
    }
  }
  public draw() {
    this.drawGreyBackground();
    this.drawDialogBox();
    this.drawHeading();
    this.drawButtons();
    this.drawButtonTexts();
    this.clicked();
  }
  public update() {}
}
