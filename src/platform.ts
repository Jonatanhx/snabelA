class Platform {
  width: number;
  height: number;
  constructor() {
    this.width = width;
    this.height = height;
  }
  public drawPlatform() {
    push();
    stroke("white");
    strokeWeight(10);
    line(this.width, this.height - 200, 0, height - 200);
    pop();
  }
}
