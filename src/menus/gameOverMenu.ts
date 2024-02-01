class GameOverMenu implements IMenu {
  private countdown: number;
  private headingWidth: number;
  private headingHeight: number;
  private headingFontSize: number;
  private game: CurrentActiveMenu;

  constructor(game: CurrentActiveMenu) {
    // Initialize properties
    this.countdown = 3;
    this.game = game;
    this.headingWidth = width * 0.5;
    this.headingHeight = height * 0.6;
    this.headingFontSize = width * 0.04;
  }
  // Draw a red semi-transparent background
  private drawHeading() {
    push();
    let redColor = color(191, 32, 38, 127);
    background(redColor);
    pop();
  }
  // Draw the "GAME OVER" heading
  private drawGameOverHeading() {
    push();
    textSize(this.headingFontSize);
    textFont(font.gameFont);
    stroke("black");
    strokeWeight(3);
    fill("white");
    textAlign(CENTER, CENTER);
    text("GAME OVER", width * 0.5, height * 0.35);
    fill("black");
    pop();
  }
  // Draw the "You Died" text
  private drawGameOverText() {
    push();
    textAlign(CENTER, CENTER);
    textSize(50);
    fill("white");
    text("You Died", width / 2, height / 2);
    pop();
  }
  // Draw the countdown and restart message
  private drawCountdown() {
    push();
    textSize(30);
    textAlign(CENTER, CENTER);
    image(
      menuImage.menuBackground,
      width * 0.25,
      height * 0.22,
      this.headingWidth,
      this.headingHeight
    );
    fill("white");
    stroke("black");
    strokeWeight(3);
    // textFont(font.gameFont);
    text("Restarting", width * 0.47, height * 0.5 + 50);
    // Set text color based on countdown value
    if (this.countdown === 3) {
      fill(255, 0, 0);
      textSize(50);
      stroke("black");
      strokeWeight(3);
    } else if (this.countdown === 2) {
      fill("yellow");
      textSize(50);
      stroke("black");
      strokeWeight(3);
    } else if (this.countdown === 1) {
      fill("lightgreen");
      textSize(50);
      stroke("black");
      strokeWeight(3);
    }
    // Display countdown text
    text(this.countdown, width * 0.55, height * 0.498 + 50);
    /* text("Restarting in " + this.countdown + "...", width / 2, height / 2 + 50); */
    pop();
  }
  // Update countdown and restart level if countdown reaches 1
  private tickCountDown() {
    if (frameCount % 30 === 0) {
      if (this.countdown > 1) {
        this.countdown--;
      } else if (this.countdown === 1) {
        // Restart level when countdown reaches 1
        this.game.restartLevel();
        this.game.setActiveMenu(undefined);
        console.log("restarting elvel");
      }
    }
  }
  // Public method to draw elements on the screen
  public draw(): void {
    this.drawHeading();
    this.drawGameOverText();
    this.drawCountdown();
    this.drawGameOverHeading();
  }
  // Public method to update the countdown
  public update(): void {
    this.tickCountDown();
  }
}
