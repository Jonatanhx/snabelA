class Entity {
  public positionX: number;
  public positionY: number;
  private width: number;
  private height: number;
  private image: p5.Image;
  public velocityX: number;
  public velocityY: number;

  constructor(
    positionX: number,
    positionY: number,
    width: number,
    height: number,
    image: p5.Image,
    velocityX: number,
    velocityY: number
  ) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.width = width;
    this.height = height;
    this.image = image;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
  }

  public draw(): void {
    push();
    fill("red");
    rect(this.positionX, this.positionY, this.width, this.height);
    pop();
  }

  public update(): void {
    /*     this.velocityX += 0.1;
    this.velocityY += 0.1;

    this.positionX += this.velocityX;
    this.positionY += this.velocityY; */
  }
  /*   public getWidth(): number {}
  public getHeight(): number {}
  public applyGravity(): number {} */
}
