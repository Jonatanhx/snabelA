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
    velocityX: number,
    velocityY: number
  ) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.width = width;
    this.height = height;
    this.image = image;
    //set speed of entitytis(except player)
    this.velocityX = 8;
    this.velocityY = velocityY;
  }

  public draw(): void {}

  public update(): void {}
}
