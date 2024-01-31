class Button {
  private buttonImg: p5.Image;
  private buttonText: string;
  private textSize: number;
  private x: number;
  private y: number;
  private w: number;
  private h: number;
  private textColor: p5.Color;
  private strokeColor: p5.Color;
  private strokeWeightValue: number; 
  private prevMouseIsPressed: boolean;

  /**
   * Constructor for a complete button, with elements for interaction.
   * (Remember responsive calculation)
   * @param buttonImg image for button
   * @param buttonText Text over button
   * @param textSize Textsize
   * @param x X position of button
   * @param y Y position of button
   * @param w Width of button
   * @param h Height of button
   * @param textColor color of text over button
   * @param strokeColor Stroke color
   * @param strokeWeightValue Stroke weight
   */
  constructor(
    buttonImg: p5.Image,
    buttonText: string,
    textSize: number,
    x: number,
    y: number,
    w: number,
    h: number,
    textColor: p5.Color,
    strokeColor: p5.Color,
    strokeWeightValue: number
  ) {
    this.buttonImg = buttonImg;
    this.buttonText = buttonText;
    this.textSize = textSize;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.textColor = textColor;
    this.strokeColor = strokeColor;
    this.strokeWeightValue = strokeWeightValue;
    this.prevMouseIsPressed = false;
  }

  /**
   * Method to check if desired x & y is hovering over instance of button
   * @param x preferably mouseX
   * @param y preferably mouseY
   * @returns
   */
  public contains(x: number, y: number) {
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
  /* public hover() {              //Denna används inte längre och finns inuti menyerna istället
    if (this.contains(mouseX, mouseY)) {
      this.fill = "#D9D9D9";
    } else {
      this.fill = "#fff"; 
    }
  } */

  public update() {
    // Eftersom p5 har uppdaterat mouseIsPressed inför den nya framen
    // Så kan vi nu jämföra dessa två värden för att veta
    // om man precis trycke eller släppte knappen.
    // console.log(this.prevMouseIsPressed);
    // console.log(mouseIsPressed);
    // this.hover();
    const wasClicked = this.clicked();

    // spara nuvarande tillstånd
    this.prevMouseIsPressed = mouseIsPressed;
    return wasClicked;
  }

  public draw() {
    push();
    image(this.buttonImg, this.x, this.y, this.w, this.h);
    pop();
    
    push();
    textSize(this.textSize);
    textAlign(CENTER, CENTER);
    fill(this.textColor);
    stroke(this.strokeColor);
    strokeWeight(this.strokeWeightValue);
    text(this.buttonText, this.x + this.w / 2, this.y + this.h / 2);
    pop();
  }
}
