class GameOverMenu implements IMenu {
  private countdown: number;
  private game: CurrentActiveMenu;

  constructor(game: CurrentActiveMenu) {
    this.countdown = 1;
    this.game = game;
  }
  private drawHeading() {
    push();
    let redColor = color(191, 32, 38, 127);
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
    if (frameCount % 60 === 0 && this.countdown > 0) {
      this.countdown--;
      setTimeout(() => {
        this.game.restartLevel();
        this.game.setActiveMenu(undefined);
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
