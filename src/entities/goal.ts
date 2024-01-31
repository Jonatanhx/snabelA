class Goal extends Entity {
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
      goalImage.goal,
      this.positionX,
      this.positionY,
      this.width,
      this.height
    );
    pop();
  }
}
