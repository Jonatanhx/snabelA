class PauseMenu {
  private pauseText: string;
  private resumeButton: string;
  private exitButton: p5.Image;
  private restartButton: p5.Image;
  private centerPosX: number;
  private centerPosY: number;
  private button1X: number;
  private button1Y: number;

  constructor() {
    this.button1X = width * 0.42;
    this.button1Y = height * 0.5;
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
    textSize(100);
    textAlign(CENTER);
    text("PAUSED", width * 0.5, height * 0.4);
    fill("black");
    pop();
  }
  private drawButtons() {
    push();
    fill("white");
    rectMode(CENTER);
    rect(this.button1X, this.button1Y, 250, 110);
    rect(width * 0.58, height * 0.5, 250, 110);
    rect(width * 0.5, height * 0.65, 250, 110);
    pop();
  }
  private drawButtonTexts() {
    push();
    fill("black");
    textSize(30);
    textAlign(CENTER);
    text("RESUME", width * 0.42, height * 0.49, 0);
    text("RESTART", width * 0.58, height * 0.49, 0);
    text("EXIT", width * 0.5, height * 0.64, 0);
    pop();
  }

  public clicked() {
    let d = dist(mouseX, mouseY, this.button1X, this.button1Y);
    if (d < 100) {
      console.log("CLICKED!!");
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
