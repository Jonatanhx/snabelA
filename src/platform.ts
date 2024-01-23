class Platform extends Entity {
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
    this.positionX -= 5;
  }
  public draw(): void {
    push();
    fill("green");
    rect(this.positionX, this.positionY, this.width, this.height);
    pop();
  }
}
