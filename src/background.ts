class Background {
  private images: p5.Image[];
  private positionX: number[];
  private positionY: number[];
  private parallaxSpeeds: number[];
  private heights: number[];

  public constructor() {
    this.images = backgroundImages;
    this.positionX = [0, 0, 0];
    this.parallaxSpeeds = [0.05, 0.07, 0.5];
    this.heights = [height * 1, height * 0.6, height * 0.5];
    this.positionY = [height * 0, height * 0.6, height * 0.6];
  }

  public update(): void {
    for (let i = 0; i < this.parallaxSpeeds.length; i++) {
      this.positionX[i] -= 7 * this.parallaxSpeeds[i];

      // Check if the background has moved completely off the left side
      if (this.positionX[i] <= -width) {
        // Reset the position to the initial leftmost position
        //this.positionX = 0;

        // Move the layer to the right of the last layer
        this.positionX[i] += width; // 0
      }
    }
  }
  public draw(): void {
    push();
    for (let i = 0; i < this.images.length; i++) {
      const x = this.positionX[i];
      const y = this.positionY[i];
      image(this.images[i], x, y, width, this.heights[i]);
      image(this.images[i], x + width - 1, y, width, this.heights[i]); //-1 in X param for overlapp, remove gap when loop.
    }

    pop();
  }
}
