/// <reference path="entity.ts"/>
class ProgressBar extends Entity {
  private fillWidth: number;
  private borderRadius: number;

  public constructor(
    positionX: number,
    positionY: number,
    width: number,
    height: number,
    image: p5.Image
  ) {
    super(positionX, positionY, 350, height, image, 0, 0);
    this.fillWidth = 0;
    this.borderRadius = 10;

  }

  public draw(): void {
    this.drawProgressBarFill();
    image(progrees.progressbar, this.positionX, this.positionY, 360, 90);
  }

  private drawProgressBarFill() {
    push();
    fill("orange");
    rect(350, 75, this.fillWidth, 70, this.borderRadius);
    pop();
  }
  // Försöker göra en push
  public update(): void {
    if (this.fillWidth < this.width) {
      this.fillWidth += 0.945;
    }
  }
}


