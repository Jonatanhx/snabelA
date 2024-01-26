class Sound implements Isound {
  private explodeSound: p5.SoundFile;
  private mainVolume: number;
  //   private sfxVolume: number;

  constructor() {
    this.explodeSound = sfx.explodeSound;
    this.mainVolume = 0;
  }

  public playExplodeSound() {
    this.explodeSound.play();
  }
  draw() {}
  update() {}
}
