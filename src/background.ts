/// <reference path="entity.ts"/>
class Background extends Entity {
  /* private imageLoop: number; // Width of the portion of the image to be added back */
  public constructor(
    positionX: number,
    positionY: number,
    width: number,
    height: number,
    image: p5.Image
  ) {
    super(positionX, positionY, width, height, image, 0, 0);
    /* this.imageLoop = 2; // Adjust this value based on how much of the image you want to add back */
  }

  public update(): void {
    super.update();

    this.positionX -= 10;

    // Check if the background has moved completely off the left side
    if (this.positionX <= -this.width) {
      // Reset the position to the initial leftmost position
      this.positionX = 0;
    }
  }

  public draw(): void {
    push();
    image(this.image, this.positionX, this.positionY, this.width, this.height);
    image(
      this.image,
      this.positionX + this.width, //Fyller i loop-effekten
      this.positionY,
      this.width,
      this.height
    );
    pop();
  }
}
