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
    this.checkCollision();
  }
  // gå igenom alla entiteter i arrayen och rita ut dem
  //functions
  public draw(): void {
    for (const entity of this.entities) {
      entity.draw();
    }
  }

  private moveWorld(): void {} //Olika hastigheter på bakgrund = parallax; flygande objekt = ny hastighet?
  private checkCollision(): void {
    for (const entity1 of this.entities) {
      if (entity1 instanceof Player) {
        for (const entity2 of this.entities) {
          if (entity2 instanceof Player) continue;
          //1.Kontrollera ifall entiteterna överlappar 2.Reagera på kollisionen
          const left1 = entity1.positionX;
          const left2 = entity2.positionX;
          const right1 = entity1.positionX + entity1.width;
          const right2 = entity2.positionX + entity2.width;

          const top1 = entity1.positionY;
          const top2 = entity2.positionY;
          const bottom1 = entity1.positionY + entity1.height;
          const bottom2 = entity2.positionY + entity2.height;

          if (
            right1 > left2 &&
            left1 < right2 &&
            bottom1 > top2 &&
            top1 < bottom2
          ) {
            entity1.positionY = entity2.positionY - entity2.height;
            entity1.velocityY = 0;
          }
        }
      }
    }
  }
}
