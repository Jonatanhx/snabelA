class Background extends Entity {
  public constructor(
    positionX: number,
    positionY: number,
    width: number,
    height: number,
    image: p5.Image
  ) {
    super(positionX, positionY, width, height, image, 0, 0);
  }
  public update(): void {
    super.update();

    if (this.positionX + this.width <= 0) {
      // Move the image to the right of the current rightmost instance
      this.positionX += this.width;
    }
  }
  public draw(): void {
    push();
    image(this.image, this.positionX, this.positionY, this.width, this.height);
    pop();
  }
}
