class Game {
  playerPosX = height - 307;
  playerPosY = 100;
  player = new PlayerBox(this.playerPosX, this.playerPosY, 100);
  platform = new Platform();
  constructor() {}

  public update() {}

  public keepPlayerBottom() {
    this.player.posX += 10;
  }
  public draw() {
    background("black");
    this.platform.drawPlatform();
    this.player.drawPlayerBox();
    if (keyIsDown(32)) {
      this.player.jump();
    }
    this.keepPlayerBottom();
    if (this.player.posX > this.platform.height - 300) {
      this.player.posX = height - 307;
    }
  }
}
