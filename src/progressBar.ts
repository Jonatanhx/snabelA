/// <reference path="entity.ts"/>
class ProgressBar extends Entity {
  public constructor(
    positionX: number,
    positionY: number,
    width: number,
    height: number,
    image: p5.Image
  ) {
    super(positionX, positionY, width, height, image, 0, 0);
  }

  public draw(): void {
    this.drawStroke();
    this.drawProgressBarFill();
  }
  private drawStroke() {
    push();
    stroke("black");
    rect(this.positionX, this.positionY, this.width, this.height);
    pop();
  }
  private drawProgressBarFill() {
    push();
    fill("Orange");
    rect(this.positionX, this.positionY, 0.1, this.height);
    pop();
  }
  public update(): void {}
}
