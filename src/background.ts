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
    this.parallaxSpeeds = [0.025, 0.05, 0.015];
  }

  public update(): void {
    super.update();

    //this.positionX -= 10;
    // Move the background layers based on parallax speeds
    for (let i = 0; i < this.parallaxSpeeds.length; i++) {
      this.positionX -= this.velocityX * this.parallaxSpeeds[i];

      // Check if the background has moved completely off the left side
      if (this.positionX <= -this.width) {
        // Reset the positi on to the initial leftmost position
        //this.positionX = 0;

        // Move the layer to the right of the last layer
        this.positionX += this.width;
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
      const layerX =
        (this.positionX * this.parallaxSpeeds[i] * (i + 1) + frameCount) %
        this.width;

      // Draw the layer normally
      if (i === 0) {
        // mainback.png layer - full screen with a slight overlap
        image(this.images[i], layerX, 0, this.width, height);
        image(this.images[i], layerX - this.width, 0, this.width, height);
      } else {
        // Other layers - cover a percentage of the screen height and repeat seamlessly
        let layerHeight;
        let layerY;

        if (i === 1) {
          // secondbg.png layer - covers 50% of the screen height
          layerHeight = height * 0.5;
          layerY = height - layerHeight;
        } else {
          // Other layers - cover 40% of the screen height
          layerHeight = height * 0.4;
          layerY = height - layerHeight;
        }

        // Draw the layer repeatedly to cover the screen seamlessly
        for (let j = -1; j <= 1; j++) {
          const adjustedLayerX = layerX + j * this.width;
          image(
            this.images[i],
            adjustedLayerX,
            layerY,
            this.width,
            layerHeight
          );
        }
      }
    }

    pop();
  }
}
