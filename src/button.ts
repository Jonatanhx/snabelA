class Button {
  private text: string;
  private x: number;
  private y: number;
  private w: number;
  private h: number;
  private textSize: number;
  private prevMouseIsPressed: boolean;
  /**
   * Constructor for a complete button, with elements for interaction
   * @param text Text within button
   * @param textSize Textsize
   * @param x X position of button
   * @param y Y position of button
   * @param w Width of button
   * @param h Height of button
   */
  constructor(
    text: string,
    textSize: number,
    x: number,
    y: number,
    w: number,
    h: number
  ) {
    this.text = text;
    this.textSize = textSize;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.prevMouseIsPressed = false;
  }

  private contains(x: number, y: number) {
    return (
      this.x <= x && x <= this.x + this.w && this.y <= y && y <= this.y + this.h
    );
  }

  public clicked() {
    const mouseWasReleased = this.prevMouseIsPressed && !mouseIsPressed;
    // const mouseWasPressed = !this.prevMouseIsPressed && mouseIsPressed;
    return this.contains(mouseX, mouseY) && mouseWasReleased;
  }

  public update() {
    // Eftersom p5 har uppdaterat mouseIsPressed inför den nya framen
    // Så kan vi nu jämföra dessa två värden för att veta
    // om man precis trycke eller släppte knappen.
    // console.log(this.prevMouseIsPressed);
    // console.log(mouseIsPressed);

    // todo: hover
    const wasClicked = this.clicked();

    // spara nuvarande tillstånd
    this.prevMouseIsPressed = mouseIsPressed;
    return wasClicked;
  }

  public draw() {
    push();
    fill("white");
    rect(this.x, this.y, this.w, this.h);
    pop();
    push();
    translate(this.w / width + width * 0.07, this.h / height + height * 0.05);
    textSize(this.textSize);
    textAlign(CENTER);
    text(this.text, this.x, this.y);
    pop();
  }
}
