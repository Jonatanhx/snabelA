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
    translate(-500, -200);
    rect(width / 2, height / 2, 1000, 500);
    rectMode(CENTER);
    pop();
  }
  private drawHeading() {
    push();
    text("PAUSED", height / 2, height / 2 - 60);
    fill("black");
    textSize(30);
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
    text("RESUME", 500, height / 2, 60);
    textSize(100);
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
