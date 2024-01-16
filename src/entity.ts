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
    //Innehåller just nu player informationen
    push();
    fill("red");
    rect(this.positionX, this.positionY, this.width, this.height);
    pop();
  }

  public update(): void {}
  /*   public getWidth(): number {}
  public getHeight(): number {}
  public applyGravity(): number {} */
}
