class LevelPickedMenu {
  private buttonHeight: number;
  private buttonWidth: number;
  private buttonFontSize: number;
  private headingFontSize: number;

  constructor() {
    this.buttonWidth = width * 0.05;
    this.buttonHeight = width * 0.05;
    this.buttonFontSize = width * 0.021;
    this.headingFontSize = width * 0.02;
  }

  private drawDialogBox() {
    push();
    fill("white");
    rectMode(CENTER);
    rect(width * 0.5, height * 0.5, 950, 553);
    pop();
  }

  private drawGreyBackground() {
    push();
    fill(224, 224, 224, 10);
    rect(0, 0, width, height);
    pop();
  }

  private drawHeading() {
    push();
    textSize(this.headingFontSize);
    textAlign(CENTER);
    text("LEVEL PICKER", width * 0.5, height * 0.25);
    fill("black");
    pop();
  }

  private drawButtonTexts() {
    push();
    fill("black");
    textSize(this.buttonFontSize);
    textAlign(CENTER);
    text("1", width * 0.29, height * 0.32, 0);
    text("2", width * 0.35, height * 0.32, 0);
    pop();
  }

  private drawButtons() {
    push();
    noStroke();

    // Loop för att rita knappar
    for (let i = 0; i < 2; i++) {
      const buttonX = width * (0.29 + i * 0.06);
      const isClicked = this.isMouseClickedOnButton(
        buttonX,
        height * 0.34,
        this.buttonWidth,
        this.buttonHeight
      );

      if (isClicked) {
        // Gör något när knappen är klickad
        console.log("Button clicked!");
      }

      const isHovered = this.isMouseOverButton(
        buttonX,
        height * 0.34,
        this.buttonWidth,
        this.buttonHeight
      );

      if (isHovered) {
        fill("#A6A6A6"); // Hover-färg
      } else {
        fill("#D9D9D9"); // Basfärg
      }

      rectMode(CENTER);
      rect(buttonX, height * 0.34, this.buttonWidth, this.buttonHeight);
    }

    pop();

    // push();
    // noStroke();
    // // Knapp 1
    // if (
    //   this.isMouseOverButton(
    //     width * 0.29,
    //     height * 0.34,
    //     this.buttonWidth,
    //     this.buttonHeight
    //   )
    // ) {
    //   fill("#A6A6A6"); // Detta är hover färgen
    // } else {
    //   fill("#D9D9D9"); // Detta är bas färgen, om den musen inte hörs över "knappen"
    // }
    // rectMode(CENTER);
    // rect(width * 0.29, height * 0.34, this.buttonWidth, this.buttonHeight);

    // // Knapp 2
    // if (
    //   this.isMouseOverButton(
    //     width * 0.35,
    //     height * 0.34,
    //     this.buttonWidth,
    //     this.buttonHeight
    //   )
    // ) {
    //   fill("#A6A6A6");
    // } else {
    //   fill("#D9D9D9");
    // }
    // rect(width * 0.35, height * 0.34, this.buttonWidth, this.buttonHeight);

    // pop();

    // ----------------- Här en loop som loopar igenom alla "knappar", den gör samma sak som koden ovan båda alternativen fungerar. Vad är mest läsbart? -------------------------

    // push();
    // noStroke();
    // // Loop för att rita knappar
    // for (let i = 0; i < 2; i++) {
    //   const buttonX = width * (0.29 + i * 0.06);
    //   const isHovered = this.isMouseOverButton(
    //     buttonX,
    //     height * 0.34,
    //     this.buttonWidth,
    //     this.buttonHeight
    //   );

    //   if (isHovered) {
    //     fill("#A6A6A6"); // Hover-färg
    //   } else {
    //     fill("#D9D9D9"); // Basfärg
    //   }

    //   rectMode(CENTER);
    //   rect(buttonX, height * 0.34, this.buttonWidth, this.buttonHeight);
    // }

    // pop();
  }

  // Funktionen kollar om musens x-position är mellan vänstra och högra sidan av knappen och om musens y-position är mellan överkanten och underkanten av knappen.
  // Om det är sant, betyder det att musen är över knappen, och funktionen kommer att säga "ja, musen är över knappen." Annars kommer det att säga "nej, musen är inte över knappen."
  private isMouseOverButton(x: number, y: number, w: number, h: number) {
    return (
      mouseX > x - w / 2 &&
      mouseX < x + w / 2 &&
      mouseY > y - h / 2 &&
      mouseY < y + h / 2
    );
  }

  private isMouseClickedOnButton(x: number, y: number, w: number, h: number) {
    return (
      mouseX > x - w / 2 &&
      mouseX < x + w / 2 &&
      mouseY > y - h / 2 &&
      mouseY < y + h / 2 &&
      mouseIsPressed
    );
  }

  public draw() {
    this.drawGreyBackground();
    this.drawDialogBox();
    this.drawHeading();
    this.drawButtons();
    this.drawButtonTexts();
  }
  public update() {}
}
