class ProgressBar {
  private readonly x: number;
  private readonly y: number;
  private readonly width: number;
  private readonly height: number;
  private readonly borderRadius: number;
  private fillWidth: number;
  private levelLength: number;
  private velocityX: number;

  /**
   * @param levelLength Total lengt of levevl in number of blocks  * blocksize
   */
  public constructor(levelLength: number, velocityX: number) {
    this.fillWidth = 0;
    this.x = 20;
    this.y = 20;
    this.width = 350;
    this.height = 95;
    this.levelLength = levelLength;
    this.velocityX = velocityX;
    this.borderRadius = 25;
  }

  public update(): void {
    // Update method to adjust the filled width of the progress bar based on the velocity
    const ratio = this.width / this.levelLength;
    this.fillWidth += this.velocityX * ratio;
  }

  public draw(): void {
    this.drawProgressBarFill();
    image(progressBar.progressbar, this.x, this.y, this.width, this.height);
  }
  
/**
   * Helper method to draw the filled portion of the progress bar
   */
  private drawProgressBarFill() {
    push();
    noStroke();
    fill("Orange");
    rect(
      this.x + 1,
      this.y + 2,
      this.fillWidth,
      this.height - 4,
      this.borderRadius,
      this.borderRadius,
      this.borderRadius,
      this.borderRadius
    );
    pop();
  }
}
