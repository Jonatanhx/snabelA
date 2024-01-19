class Button {
  private text: string;
  private x: number;
  private y: number;
  private w: number;
  private h: number;
  private textSize: number;
  private prevMouseIsPressed: boolean;
  private fill: string;
  /**
   * Constructor for a complete button, with elements for interaction.
   * (Remember responsive calculation)
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
    this.fill = "#D9D9D9";
  }

  /**
   * Method to check if desired x & y is hovering over instance of button
   * @param x preferably mouseX
   * @param y preferably mouseY
   * @returns
   */
  private contains(x: number, y: number) {
    return (
      this.x <= x && x <= this.x + this.w && this.y <= y && y <= this.y + this.h
    );
  }

  /**
   * Method to check if instance of button is clicked, combination with contains method
   * @returns boolean
   */
  public clicked() {
    const mouseWasReleased = this.prevMouseIsPressed && !mouseIsPressed;
    // const mouseWasPressed = !this.prevMouseIsPressed && mouseIsPressed;
    return this.contains(mouseX, mouseY) && mouseWasReleased;
  }

  /**
   * Method to check if mouse is hovering over instance of button and adds hover-color.
   * combination with contains function
   */
  public hover() {
    if (this.contains(mouseX, mouseY)) {
      this.fill = "#D9D9D9";
    } else {
      this.fill = "#fff";
    }
  }

  public update() {
    // Eftersom p5 har uppdaterat mouseIsPressed inför den nya framen
    // Så kan vi nu jämföra dessa två värden för att veta
    // om man precis trycke eller släppte knappen.
    // console.log(this.prevMouseIsPressed);
    // console.log(mouseIsPressed);
    this.hover();
    const wasClicked = this.clicked();

    // spara nuvarande tillstånd
    this.prevMouseIsPressed = mouseIsPressed;
    return wasClicked;
  }

  public draw() {
    push();
    fill(this.fill);
    rect(this.x, this.y, this.w, this.h);
    pop();
    push();
    textSize(this.textSize);
    textAlign(CENTER, CENTER);
    text(this.text, this.x + this.w / 2, this.y + this.h / 2);
    pop();
  }
}
