class PlayerBox {
  posX: number;
  posY: number;
  size: number;

  constructor(posX: number, posY: number, size: number) {
    this.posX = posX;
    this.posY = posY;
    this.size = size;
  }

  public drawPlayerBox() {
    push();
    rect(this.posY, this.posX, this.size);
    pop();
  }

  public jump() {
    this.posX -= 30;
  }
}
