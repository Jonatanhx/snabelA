class PauseMenu implements IMenu {
  private headingWidth: number;
  private headingHeight: number;
  private headingFontSize: number;

  private resumeButton: Button;
  private restartButton: Button;
  private exitButton: Button;

  constructor() {
    this.headingWidth = width * 0.5;
    this.headingHeight = height * 0.6;
    this.headingFontSize = width * 0.06;
    this.resumeButton = new Button(
      "RESUME",
      width * 0.02,
      width * 0.345,
      height * 0.457,
      width * 0.15,
      width * 0.065
    );
    this.restartButton = new Button(
      "RESTART",
      width * 0.02,
      width * 0.505,
      height * 0.457,
      width * 0.15,
      width * 0.065
    );
    this.exitButton = new Button(
      "EXIT",
      width * 0.02,
      width * 0.425,
      height * 0.607,
      width * 0.15,
      width * 0.065
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
    text("PAUSED", width * 0.5, height * 0.35);
    fill("black");
    pop();
  }

  public draw(): void {
    this.drawGreyBackground();
    this.drawDialogBox();
    this.drawHeading();
    this.resumeButton.draw();
    this.restartButton.draw();
    this.exitButton.draw();
  }
  public update(): void {
    if (this.resumeButton.update()) {
      console.log("RESUME BUTTON WAS CLICKED, CHANGIN MENU");
    }
    if (this.restartButton.update()) {
      console.log("RESTART BUTTON WAS CLICKED, CHANGIN MENU");
    }
    if (this.exitButton.update()) {
      console.log("EXIT BUTTON WAS CLICKED, CHANGIN MENU");
      game.setActiveMenu(new StartMenu());
    }
  }
}
