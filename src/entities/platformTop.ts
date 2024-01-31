class PlatformTop extends Entity {
  public constructor(
    positionX: number,
    positionY: number,
    width: number,
    height: number,
    image: p5.Image
  ) {
    super(positionX, positionY, width, height, image, 0);
  }
  public update(): void {
    this.positionX -= this.velocityX;
  }
  public draw(): void {
    push();
    image(
      entityImages.platformTopImg,
      this.positionX,
      this.positionY,
      this.width + 2,
      this.height
    );
    pop();
  }
}
