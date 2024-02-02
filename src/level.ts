// Level class is responsible for rendering all entities and moving them and also check for collisions
class Level {
  public id: number;
  public entities: Entity[];
  public sound: Isound;
  private game: CurrentActiveMenu;
  private progressBar: ProgressBar;

  constructor(
    id: number,
    game: CurrentActiveMenu,
    entities: Entity[],
    progressBar: ProgressBar
  ) {
    this.id = id;
    this.game = game;
    this.sound = new Sound();
    this.entities = entities;
    this.progressBar = progressBar;
  }

  public update() {
    this.progressBar.update();
    // Update the position of the player
    for (const entity of this.entities) {
      entity.update();
    }
    this.checkCollision();
  }

  // Draws level and its entities
  public draw(): void {
    this.progressBar.draw();
    for (const entity of this.entities) {
      entity.draw();
    }
  }

  private checkCollision(): void {
    for (const entity1 of this.entities) {
      if (entity1 instanceof Player) {
        //Checks if Player is out of bounds (height)
        if (entity1.positionY > height) {
          this.game.setActiveMenu(new GameOverMenu(this.game));
          this.sound.playExplodeSound();
        }
        for (const entity2 of this.entities) {
          if (entity2 instanceof Player) continue; //Player should not collide with player

          //Entity 2 is everything but Player
          const left1 = entity1.positionX;
          const left2 = entity2.positionX;
          const right1 = entity1.positionX + entity1.width;
          const right2 = entity2.positionX + entity2.width;

          const top1 = entity1.positionY;
          const top2 = entity2.positionY;
          const bottom1 = entity1.positionY + entity1.height;
          const bottom2 = entity2.positionY + entity2.height;

          // 1. Checks if entities overlap
          // 2. React to collision
          if (
            right1 > left2 &&
            left1 < right2 &&
            bottom1 > top2 &&
            top1 < bottom2
          ) {
            if (entity2 instanceof Platform) {
              // Collision on the left or below
              const deltaX = right1 - left2;
              const deltaY = bottom1 - top2;
              if (deltaX < deltaY) {
                console.log("SLOG I VÄNSTER ELLER UNDER");
                this.game.setActiveMenu(new GameOverMenu(this.game));
                this.sound.playExplodeSound();
              } else {
                // Standing on the platform
                entity1.positionY = entity2.positionY - entity1.height;
                entity1.velocityY = 0;
              }
            }
            if (entity2 instanceof Obstacle) {
              // Reaction to collision wih obstacle - LOSS
              this.game.setActiveMenu(new GameOverMenu(this.game));
              this.sound.playExplodeSound();
            }
            if (entity2 instanceof Goal) {
              // Reaction to collision with Goal - WIN
              this.game.setActiveMenu(new GoalMenu(this.game));
            }
            if (entity2 instanceof ProgressBar) continue;
          }
        }
      }
    }
  }
}
