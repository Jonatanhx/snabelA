// Level ansvarar för att rita ut alla entiteterna och förflytta dem, deussotm kollar den kollision.
class Level {
  public id: number;
  public entities: Entity[];
  public sound: Isound;
  private game: CurrentActiveMenu;

  constructor(id: number, game: CurrentActiveMenu, entities: Entity[]) {
    this.id = id;
    this.game = game;
    this.sound = new Sound();
    this.entities = entities;
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
        if (entity1.positionY > height) {
          // ÄNDRA DETTA, VI SKALL INTE ANVÄNDA GLOBALA VARIABLER
          // RAMLAR AV BANAN
          this.game.setActiveMenu(new GameOverMenu(this.game));
        }
        for (const entity2 of this.entities) {
          if (entity2 instanceof Player) continue; //Player ska inte kunna krocka med Player

          //Entity 2 är allt annat utom Player
          const left1 = entity1.positionX;
          const left2 = entity2.positionX;
          const right1 = entity1.positionX + entity1.width;
          const right2 = entity2.positionX + entity2.width;

          const top1 = entity1.positionY;
          const top2 = entity2.positionY;
          const bottom1 = entity1.positionY + entity1.height;
          const bottom2 = entity2.positionY + entity2.height;

          //1.Kontrollera ifall entiteterna överlappar 2.Reagera på kollisionen

          if (
            right1 > left2 &&
            left1 < right2 &&
            bottom1 > top2 &&
            top1 < bottom2
          ) {
            if (entity2 instanceof Platform) {
              //LIGGER NEDAN KOD TEMPORÄRT, SKALL INTE FLYTTAS UPP HELA TIDEN
              entity1.positionY = entity2.positionY - entity1.height; //Player kan kollidera
              entity1.velocityY = 0; //om positiv = kan ej hoppa, om negativ = hoppar hela tiden
              // REAKTION - UP eller FÖRLUST
              if ("springer in i blocket") {
                // new Sound().playExplodeSound();
                // // music.startMenuMusic.play();
                // // this.game.playExplosion();
                // this.game.setActiveMenu(new GameOverMenu(this.game));
              } else {
                // entity1.positionY = entity2.positionY - entity1.height; //Player kan kollidera
                // entity1.velocityY = 0; //om positiv = kan ej hoppa, om negativ = hoppar hela tiden
              }
            }
            if (entity2 instanceof Obstacle) {
              // REAKTION - FÖRLUST
              this.game.setActiveMenu(new GameOverMenu(this.game));
              this.sound.playExplodeSound();
            }
            if (entity2 instanceof Goal) {
              // REAKTION - VINST
              this.game.setActiveMenu(new GoalMenu(this.game, 1));
            }
            if (entity2 instanceof ProgressBar) continue;
          }
        }
      }
    }
  }
}
