class Button {
  private text: string;
  private x: number;
  private y: number;
  private w: number;
  private h: number;
  private prevMouseIsPressed: boolean;

  constructor(
    text: string,
    x: number,
    y: number,
    buttonwidth: number,
    buttonHeigth: number
  ) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.w = buttonwidth;
    this.h = buttonHeigth;
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
    fill("green");
    rect(this.x, this.y, this.w, this.h);
    pop();
  }
}
