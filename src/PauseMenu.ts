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
    text("PAUSED", height / 2, height / 2 - 60);
    fill("black");
    textSize(90);
  }
  private drawButtons() {
    push();
    fill("red");
    translate(-500, -200);
    rect(width / 2, height / 2, 200, 110);
    rectMode(CENTER);
    pop();
  }

  public draw() {
    this.drawDialogBox();
    this.drawHeading();
    this.drawButtons();
  }
  public update() {}
}
