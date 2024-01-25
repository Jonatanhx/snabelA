// Player ärver innehållet i Entity.
class Obstacle extends Entity {
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
    this.positionX -= this.velocityX;
  }
  public draw(): void {
    push();
    fill("yellow");
    rect(this.positionX, this.positionY, this.width, this.height);
    pop();
  }
}
