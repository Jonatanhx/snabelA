// Player ärver innehållet i Entity.
class Player extends Entity {
  public constructor(
    positionX: number,
    positionY: number,
    width: number,
    height: number,
    image: p5.Image
  ) {
    super(positionX, positionY, width, height, image, 0, 0);
  }

  public update(): void {}

  public explode(): void {}
}
