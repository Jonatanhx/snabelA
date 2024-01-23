class StartMenu implements IMenu {
  private readonly descriptionTitle: string; //utanför klassdiagrammet
  private readonly description: string;
  private controlDescTitle: string; //p5.Image i uml
  private controlDesc: string; //p5.Image i uml
  private playerPreview: number; //p5.Image i uml
  private playButton: number; //p5.Image i uml

  private playButton1: Button;

  constructor() {
    this.descriptionTitle = "Description/How to play: ";
    this.description =
      "You are a jalapeno yearning for freedom from this manic prison which seems to change shape when getting further. \n \n Go through the levels by avoiding obstacles with jumping over or on them.";
    this.controlDescTitle = "CONTROLS";
    this.controlDesc = "SPACE - JUMP \n ESC -  PAUSE";
    this.playerPreview = width / 5;
    this.playButton = width / 2;
    this.playButton1 = new Button("PLAY", 20, width / 2, height / 2, 100, 100);
  }

  public draw(): void {
    this.drawPlayDesc();
    this.drawControlDesc();
    /*     this.drawPlayerPreview();*/
    this.drawPlayButton();
    this.playButton1.draw();
  }

  public update(): void {
    if (this.playButton1.update()) {
      console.log("PLAY BUTTON WAS CLICKED, CHANGIN MENU");
      game.setActiveMenu(new LevelPickedMenu());
    }
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

  /*   public drawPlayerPreview(): void {
    push();
    fill("red");
    rect(this.playerPreview, height / 2, 50, 50);
    pop();
  } */

  public drawPlayButton() {
    // push();
    // fill("lightgray");
    // rect(width / 2 - 50, height / 2 - 25, 100, 50);
    // fill("black");
    // textAlign(CENTER, CENTER);
    // textSize(20);
    // text("PLAY", width / 2, height / 2);
    // pop();
  }
}
