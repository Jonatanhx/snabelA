class PauseMenu extends Menu {
  private pauseText: string;
  private resumeButton: string;
  private exitButton: p5.Image;
  private restartButton: p5.Image;
  private centerPosX: number;
  private centerPosY: number;

  private drawDialogBox() {
    push();
    fill("#bcbcbc");
    translate(-350, -250);
    rect(width / 2, height / 2, 702, 553);
    rectMode(CENTER);
    pop();
  }
  private drawHeading() {
    push();
    textSize(100);
    text("PAUSED", 700, 400);
    fill("black");
    pop();
  }
  private drawButtons() {
    push();
    fill("red");
    rect(500, height / 2, 200, 110);
    pop();
  }
  private drawButtonTexts() {
    push();
    fill("black");
    textSize(30);
    text("RESUME", 530, 550, 60);
    pop();
  }

  public draw() {
    this.drawDialogBox();
    this.drawHeading();
    this.drawButtons();
    this.drawButtonTexts();
  }
  public update() {}
}
