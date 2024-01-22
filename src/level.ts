// Level ansvarar för att rita ut alla entiteterna och förflytta dem, deussotm kollar den kollision.
class Level {
  //attributes
  public id: number;
  public entities: Entity[];
  //constructor
  constructor(entities: Entity[]) {
    this.id = 1;
    this.entities = entities;
    // this.entities = [
    //   /* new Background(
    //     1,
    //     1,
    //     windowWidth,
    //     windowHeight,
    //     backgroundImage.backgroundDesert
    //   ), */
    //   /*  new Player(100, 900, 50, 50, null as any), */
    // ];
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

  private moveWorld(): void {} //Olika hastigheter på bakgrund = parallax; flygande objekt = ny hastighet?
  private checkCollision(): void {}
}
