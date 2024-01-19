// Level ansvarar för att rita ut alla entiteterna och förflytta dem, deussotm kollar den kollision.
class Level {
  //attributes
  public id: number;
  private entities: Entity[];
  private motion: number; //hastigheten som förflyttar alla entiteter förutom player
  //constructor
  constructor() {
    this.id = 1;
    this.entities = [
      new Background(
        1,
        1,
        windowWidth,
        windowHeight,
        backgroundImage.backgroundDesert
      ),
      new Player(50, 50, 50, 50, null as any),
    ];
  }

  public update() {
    // Update the position of the player
    for (const entity of this.entities) {
      entity.update();
    }
  }
  // gå igenom alla entiteter i arrayen och rita ut dem
  //functions
  public draw(): void {
    for (const entity of this.entities) {
      entity.draw();
    }
  }
  public update(): void {}
  private moveWorld(): void {} //Olika hastigheter på bakgrund = parallax; flygande objekt = ny hastighet?
  private checkCollision(): void {}
}
