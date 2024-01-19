class GameOverMenu implements IMenu {
  private countdown: number;
  private gameOverText: string;

  constructor() {
    this.countdown = 3;
    this.gameOverText = "You Died";
  }
  private drawHeading() {
    let redColor = color(191, 32, 38, 127); // Red color with 50% opacity (127 out of 255)
    background(redColor);
    textAlign(CENTER, CENTER);
    textSize(50);
    fill("white");
    text(this.gameOverText, width / 2, height / 2);
  }
  private drawCountdown() {
    textSize(30);
    text("Restarting in " + this.countdown + "...", width / 2, height / 2 + 50);
  }

  private tickCountDown() {
    // For simplicity, decrement countdown for demonstration purposes
    //is checking whether the current frame count is a multiple of 60
    if (frameCount % 60 === 0 && this.countdown > 0) {
      this.countdown--;
    }
  }

  public draw(): void {
    this.drawHeading();
    this.drawCountdown();
  }

  public update(): void {
    this.tickCountDown();
  }
}
