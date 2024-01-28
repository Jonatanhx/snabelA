/// <reference path="entity.ts"/>
class Background extends Entity {
  /* private imageLoop: number; // Width of the portion of the image to be added back */
  private parallaxSpeeds: number[];
  private images: p5.Image[];

  public constructor(
    positionX: number,
    positionY: number,
    width: number,
    height: number,
    images: p5.Image[]
  ) {
    super(positionX, positionY, width, height, images[0], 0, 0);
    /* this.imageLoop = 2; // Adjust this value based on how much of the image you want to add back */
    this.images = images;
    this.parallaxSpeeds = [0.5, 0.025, 0.25];
  }

  public update(): void {
    super.update();

    //this.positionX -= 10;
    // Move the background layers based on parallax speeds
    for (let i = 0; i < this.parallaxSpeeds.length; i++) {
      this.positionX -= this.velocityX * this.parallaxSpeeds[i];

      // Check if the background has moved completely off the left side
      if (this.positionX <= -this.width) {
        // Reset the position to the initial leftmost position
        this.positionX = 0;
      }
    }
  }
  public draw(): void {
    push();
    // image(this.image, this.positionX, this.positionY, this.width, this.height); //Överlappar pixlarna som tas bort genom förflyttningen av x-position
    // image(
    //   this.image,
    //   this.positionX + this.width, //Fyller i loop-effekten
    //   this.positionY,
    //   this.width,
    //   this.height
    // );

    // Draw the background layers based on parallax speeds
    for (let i = 0; i < this.parallaxSpeeds.length; i++) {
      const layerX = this.positionX * this.parallaxSpeeds[i];
      image(this.images[i], layerX, this.positionY, this.width, this.height);
    }
    pop();
  }
}
