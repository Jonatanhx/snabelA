class Entity {
  public positionX: number;
  public positionY: number;
  public width: number;
  public height: number;
  public image: p5.Image;
  public velocityX: number;
  public velocityY: number;

  constructor(
    positionX: number,
    positionY: number,
    width: number,
    height: number,
    image: p5.Image,
    velocityY: number
  ) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.width = width;
    this.height = height;
    this.image = image;
    this.velocityX = width * 0.11;
    this.velocityY = velocityY;
  }

  public draw(): void {}

  public update(): void {}
}
