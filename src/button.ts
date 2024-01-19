class Button {
  private desc: string;
  private buttonX: number;
  private buttonY: number;
  private buttonWidth: number;
  private buttonHeigth: number;

  constructor(
    desc: string,
    x: number,
    y: number,
    buttonwidth: number,
    buttonHeigth: number
  ) {
    this.desc = desc;
    this.buttonX = x;
    this.buttonY = y;
    this.buttonWidth = buttonwidth;
    this.buttonHeigth = buttonHeigth;
  }

  public mouseClicked() {
    let distance = dist(mouseX, mouseY, this.buttonX, this.buttonY);
    if (distance < 50 && mouseIsPressed) {
      console.log(this.desc + " WAS CLICKED, CHANGIN MENU");
    }
  }

  public draw() {
    push();
    fill("blue");
    rectMode(CENTER);
    rect(this.buttonX, this.buttonY, this.buttonWidth, this.buttonHeigth);
    this.mouseClicked();
    pop();
  }
}
