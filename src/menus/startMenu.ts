class StartMenu implements IMenu {
  private readonly descriptionTitle: string;
  private readonly description: string;
  private controlDescTitle: string;
  private controlDesc: string;
  private playerPreview: p5.Image;
  private playerPreviewWidth: number;
  private playButton: Button;
  private game: CurrentActiveMenu;

  constructor(game: CurrentActiveMenu) {
    this.descriptionTitle = "Description/How to Play: ";
    this.description =
      "You are a jalapeno yearning for freedom from this manic prison which seems to change shape when getting further. \n \n Go through the levels by avoiding obstacles with jumping over or on them.";
    this.controlDescTitle = "CONTROLS";
    this.controlDesc = "SPACE - JUMP \n ESC -  PAUSE";
    this.playerPreview = menuImage.playerPreview;
    this.playerPreviewWidth = 175;
    this.playButton = new Button(
      menuImage.buttonImg,
      "PLAY",
      30,
      width * 0.4,
      height * 0.4,
      width * 0.15,
      width * 0.065,
      color("white"),
      color("black"),
      3
    );
    this.game = game;
  }

  public drawPlayDesc() {
    push();
    textStyle(BOLD);
    textFont(font.gameFont);
    textSize(height * 0.03);
    text(this.descriptionTitle, (2 * width) / 3, height * 0.4);
    textSize(height * 0.02);
    textStyle(NORMAL);
    text(
      this.description,
      (2 * width) / 3,
      height * 0.42,
      width * 0.25,
      height * 0.2
    );
    // when hover over button, appears hand
    if (this.playButton.contains(mouseX, mouseY)) {
      cursor(HAND);
    } else {
      cursor(ARROW);
    }
    pop();
  }

  public drawControlDesc() {
    push();
    textStyle(BOLD);
    textFont(font.gameFont);
    textSize(height * 0.03);
    textAlign(CENTER);
    text(this.controlDescTitle, width * 0.47, 2 * height * 0.35);
    textStyle(NORMAL);
    textSize(height * 0.03);
    text(this.controlDesc, width * 0.47, 2 * height * 0.37);
    pop();
  }

  private drawTitle() {
    push();
    textFont(font.gameFont2);
    textSize(130);
    textAlign(CENTER, CENTER);
    text("El Jalapeno", width * 0.5, height * 0.18);
    pop();
  }

  public drawPlayerPreview(): void {
    push();
    /* find out the ratio of the image size and set a new image size 
        setting the desired width of the image */
    const aspectRatio = this.playerPreview.width / this.playerPreview.height;
    const playerPreviewHeight = this.playerPreviewWidth / aspectRatio;
    this.playerPreview.resize(this.playerPreviewWidth, playerPreviewHeight);

    // Draw the player image
    image(
      this.playerPreview,
      width * 0.2,
      height * 0.5 - this.playerPreview.height / 2
    );
    pop();
  }

  private drawAvoidImg() {
    push();
    image(menuImage.avoidImg, width * 0.6, height * 0.7);
    pop();
  }

  public draw(): void {
    this.drawPlayDesc();
    this.drawControlDesc();
    this.drawPlayerPreview();
    this.drawTitle();
    this.drawAvoidImg();
    this.playButton.draw();
  }

  public update(): void {
    if (this.playButton.update()) {
      this.game.setActiveMenu(new LevelPickedMenu(this.game));
    }
  }
}
