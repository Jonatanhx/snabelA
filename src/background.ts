class Background {
  /* private imageLoop: number; // Width of the portion of the image to be added back */
  private images: p5.Image[];
  private positionX: number[];
  private positionY: number[];
  private parallaxSpeeds: number[];
  private heights: number[];

  public constructor() {
    /* this.imageLoop = 2; // Adjust this value based on how much of the image you want to add back */
    this.images = backgroundImages;
    this.positionX = [0, 0, 0];
    this.parallaxSpeeds = [0.05, 0.07, 0.5]; //närmast fortare och längst bort långsamt
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
    // Draw the background layers based on parallax speeds
    for (let i = 0; i < this.images.length; i++) {
      // mainback.png layer - full screen with a slight overlap
      const x = this.positionX[i];
      const y = this.positionY[i];
      image(this.images[i], x, y, width, this.heights[i]);
      image(this.images[i], x + width, y, width, this.heights[i]);
    }

    pop();
  }
}
