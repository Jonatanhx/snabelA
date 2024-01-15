// Level's ansvar för att rita ut alla entiteterna men även att hålla dom updaterade och kolla kollision.
class Level {
  public id: number;
  private entities: Entity[];

  constructor() {
    this.id = 1;
    this.entities = [new Player(50, 50, 50, 50, null as any)];
  }

  // gå igenom alla entiteter i arrayen och rita ut dem
  public draw() {
    for (const entity of this.entities) {
      entity.draw();
    }
  }
}
