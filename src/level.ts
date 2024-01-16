// Level ansvarar för att rita ut alla entiteterna och förflytta dem, deussotm kollar den kollision.
class Level {
  //attributes
  public id: number;
  private entities: Entity[];
  private motion: number;
  private countDown: number;
  //constructor
  constructor() {
    this.id = 1;
    this.entities = [new Player(50, 50, 50, 50, null as any)];
    this.motion = 2;
    this.countDown = 2;
  }

  // gå igenom alla entiteter i arrayen och rita ut dem
  //functions
  public draw(): void {
    for (const entity of this.entities) {
      entity.draw();
    }
  }
  public update(): void {}
  private moveWorld(): void {}
  private checkCollision(): void {}
  private tickCountDown(): void {}
  /* private playExplodeSound(): void {} */ //Flyttas till checkCollision?
}
