class Goal extends Entity {
  private imageHeight: number;
  private imagewidth: number;
  private imagePositionX: number;
  private imagePositionY: number;

  public constructor(
    positionX: number,
    positionY: number,
    width: number,
    height: number,
    image: p5.Image
  ) {
    super(positionX, 0, width / 2, windowHeight, image, 0);
    this.imageHeight = height,
    this.imagewidth = width,
    this.imagePositionX = positionX,
    this.imagePositionY = positionY
  }
  public update(): void {
    this.imagePositionX-= this.velocityX;
    this.positionX-= this.velocityX;
  }
  public draw(): void {
    push();
    image(
      goalImage.goal,
      this.imagePositionX,
      this.imagePositionY,
      this.imagewidth,
      this.imageHeight
    );
    pop();
  }
}
