class Sound implements Isound {
  private explodeSound: p5.SoundFile;
  private mainVolume: number;
  public backgroundLoop: p5.SoundFile;
  private muted: boolean;

  constructor() {
    this.explodeSound = sfx.explodeSound;
    this.mainVolume = 0;
    this.backgroundLoop = music.backgroundLoop;
    this.muted = false;
  }
  public mute() {
    if (this.muted) {
      this.explodeSound.setVolume(0);
      this.backgroundLoop.setVolume(0);
    } else (
      this.explodeSound.setVolume(0.1)
      this.backgroundLoop.setVolume(0.1)
    )
  }

  public playExplodeSound() {
    this.explodeSound.play();
  }
  public playBackgroundLoop() {
    this.backgroundLoop.play();
  }

  draw() {}

  update() {}
}
