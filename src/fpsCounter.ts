class FpsCounter {
  private fpsCounterToggle: boolean;
  private fpsCounterButton: Button;

  constructor() {
    this.fpsCounterToggle = false;
    this.fpsCounterButton = new Button(
      menuImage.transparenImg,
      "FPS \n ON/OFF",
      20,
      width * 0.925,
      height * 0.02,
      width * 0.05,
      width * 0.05,
      color("black"),
      color("black"),
      0
    );
  }

  private renderButtons() {}

  private drawFps() {
    this.fpsCounterButton.draw();
    if (this.fpsCounterToggle) {
      text("FPS  " + Math.round(frameRate()), 10, 10);
    }
  }

  public draw() {
    this.drawFps();
  }

  public update() {
    if (this.fpsCounterButton.update()) {
      if (this.fpsCounterToggle) {
        this.fpsCounterToggle = false;
      } else {
        this.fpsCounterToggle = true;
      }

      console.log("klickat");
      this.drawFps();
    }
  }
}
