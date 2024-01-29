class GameOverMenu implements IMenu {
  private countdown: number;
  private game: CurrentActiveMenu;

  constructor(game: CurrentActiveMenu) {
    this.countdown = 1;
    this.game = game;
  }
  private drawHeading() {
    push();
    let redColor = color(191, 32, 38, 127); // Red color with 50% opacity (127 out of 255)
    background(redColor);
    pop();
  }

  private drawGameOverText() {
    push();
    textAlign(CENTER, CENTER);
    textSize(50);
    fill("white");
    text("You Died", width / 2, height / 2);
    pop();
  }

  private drawCountdown() {
    push();
    textSize(30);
    fill("white");
    textAlign(CENTER, CENTER);
    text("Restarting in " + this.countdown + "...", width / 2, height / 2 + 50);
    pop();
  }

  private tickCountDown() {
    // For simplicity, decrement countdown for demonstration purposes
    //is checking whether the current frame count is a multiple of 60
    if (frameCount % 60 === 0 && this.countdown > 0) {
      this.countdown--;
      setTimeout(() => {
        // ÄNDRA DETTA, VI SKALL INTE ANVÄNDA GLOBALA VARIABLER
        this.game.restartLevel();
        this.game.setActiveMenu(undefined);
        console.log("restarting elvel");
      }, 1000);
    }
  }

  public draw(): void {
    this.drawHeading();
    this.drawGameOverText();
    this.drawCountdown();
  }

  public update(): void {
    this.tickCountDown();
  }
}
