class StartMenu extends Menu {
  private readonly descriptionTitle: string; //utanför klassdiagrammet
  private readonly description: string;
  private controlDescTitle: string; //p5.Image; 
  private controlDesc: string; //p5.Image;
  private playerPreview: number; //p5.Image;
  /* private playButton: p5.Image; */ //läs om hur p5 knappar funkar
  // ändra till playButton i diagrammet

  constructor(
    backgroundColor: p5.Color,
  ) {
    super(backgroundColor);
    this.descriptionTitle = "Description/How to play: ";
    this.description =
      "You are a jalapeno yearning for freedom from this manic prison which seems to change shape when getting further. \n \n Go through the levels by avoiding obstacles with jumping over or on them.";
    this.controlDescTitle = "CONTROLS";
    this.controlDesc = "SPACE - JUMP \n ESC -  PAUSE";
    this.playerPreview = 1;
    /* this.playButton = image; */
  }

  public draw(): void {
    this.drawPlayDesc();
    this.drawControlDesc();
  }

  public update(): void {}

  public drawPlayDesc() {
    push();
    textStyle(BOLD);
    text(this.descriptionTitle, (2 * width) / 3, height / 2);
    textStyle(NORMAL);
    text(
      this.description,
      (2 * width) / 3,
      height / 1.9,
      width / 4,
      height / 5
    );
    pop();
  }

  public drawControlDesc() {
    push();
    textStyle(BOLD);
    textAlign(CENTER);
    text(this.controlDescTitle, width / 2.5, (2 * height) /3);
    textStyle(NORMAL);
    text(this.controlDesc, width / 2.5, (2 * height) / 2.9);
    pop();
  }
}
