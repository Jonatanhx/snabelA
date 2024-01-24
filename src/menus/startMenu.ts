class StartMenu implements IMenu {
  private readonly descriptionTitle: string;
  private readonly description: string;
  private controlDescTitle: string;
  private controlDesc: string; 
  private playerPreview: number; 
  private playButton: Button; 

  constructor() {
    this.descriptionTitle = "Description/How to Play: ";
    this.description =
      "You are a jalapeno yearning for freedom from this manic prison which seems to change shape when getting further. \n \n Go through the levels by avoiding obstacles with jumping over or on them.";
    this.controlDescTitle = "CONTROLS";
    this.controlDesc = "SPACE - JUMP \n ESC -  PAUSE";
    this.playerPreview = width *0.5; 
    this.playButton = new Button(
      "PLAY",
      width * 0.02,
      width * 0.5 - 50,
      height * 0.5 - 25,
      width * 0.15,
      width * 0.065
    );
  }

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
    text(this.controlDescTitle, width / 2, (2 * height) / 2.9);
    textStyle(NORMAL);
    text(this.controlDesc, width / 2, (2 * height) / 2.8);
    pop();
  }

  public drawPlayerPreview(): void {
    
   }  

  public draw(): void {
    this.drawPlayDesc();
    this.drawControlDesc();
    this.drawPlayerPreview();
    this.playButton.draw();
  }

  public update(): void {
    if (this.playButton.update()) {
      game.setActiveMenu(new LevelPickedMenu());
    }
  }
}

