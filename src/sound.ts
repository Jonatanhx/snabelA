class Sound implements Isound {
  private explodeSound: p5.SoundFile;
  public backgroundLoop: p5.SoundFile;
  private muted: boolean;
  private muteButton: Button;

  constructor() {
    this.explodeSound = sfx.explodeSound;
    this.backgroundLoop = music.backgroundLoop;
    this.muted = false;
    this.muteButton = new Button(
      menuImage.muteImg,
      "",
      0,
      width * 0.86,
      height * 0.021,
      width * 0.04,
      width * 0.04,
      color("black"),
      color("black"),
      0
    );
  }

  public drawMuteButton() {
    this.muteButton.draw();
  }

  public checkVolumeMuted() {
    if (this.muted) {
      this.explodeSound.setVolume(0);
      this.backgroundLoop.setVolume(0);
    } else {
      this.explodeSound.setVolume(0.1);
      this.backgroundLoop.setVolume(0.1);
    }
  }

  public playExplodeSound() {
    this.explodeSound.play();
  }
  public playBackgroundLoop() {
    this.backgroundLoop.play();
  }

  draw() {
    this.drawMuteButton();
  }

  update() {
    if (this.muteButton.update()) {
      if (this.muted) {
        this.muted = false;
      } else {
        this.muted = true;
      }
    }
    this.checkVolumeMuted();
  }
}
