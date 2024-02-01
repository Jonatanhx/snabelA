class Sound implements Isound {
  private explodeSound: p5.SoundFile;
  private mainVolume: number;
  public backgroundLoop: p5.SoundFile;

  constructor() {
    this.explodeSound = sfx.explodeSound;
    this.mainVolume = 0;
    this.backgroundLoop = music.backgroundLoop;
  }

  public playExplodeSound() {
    this.explodeSound.play();
  }
  public playBackgroundLoop() {
    this.backgroundLoop.play();
  }

  draw() { }

  update() { }
}
