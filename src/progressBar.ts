/// <reference path="entity.ts"/>
class ProgressBar extends Entity {
  private fillWidth: number;

  public constructor(
    positionX: number,
    positionY: number,
    width: number,
    height: number,
    image: p5.Image
  ) {
    super(positionX, positionY, width, height, image, 0, 0);
    this.fillWidth = 0;
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
    rect(this.positionX, this.positionY, this.fillWidth, this.height);
    pop();
  }

  public update(): void {
    if (this.fillWidth < this.width) {
      this.fillWidth += 0.755;
    }
  }
}
