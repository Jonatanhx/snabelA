// Level's ansvar för att rita ut alla entiteterna men även att hålla dom updaterade och kolla kollision.
class Level {
  public id: number;
  private entities: Entity[];

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
  public draw() {
    for (const entity of this.entities) {
      entity.draw();
    }
  }
}
