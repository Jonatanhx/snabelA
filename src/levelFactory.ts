class LevelFactory {
  private levelDesign1: number[][];

  constructor() {
    // h = number, w = number (behöver defineras)
    // 0 = nothing
    // 1 = block 1w platform (Går att hoppa på),
    // 2 = block 2w
    // 3 = block 3w
    // 4 = block 4w
    // 5 = block 5w
    // 6 = goal (hela y värdet som höjd)
    // 7 = obstacle 1w 2h (hinder 1)
    // 8 = box 1w 1h
    // 9 = player 1w 2h
    // prettier-ignore
    this.levelDesign1 = [
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6],
      [0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,2,2,2,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,6],
      [0,9,0,0,0,0,1,0,7,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,7,0,0,1,0,0,0,0,0,0,0,0,0,6],
      [5,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1],
    ];
  }

  public generateLevel(): Level {
    //Lägg till parameter för att skilja vilken nivå
    // Gå igenom leveldesignen och skapa alla entiteter
    // motsvarande sifforna på rätt plats
    const entities: Entity[] = [];
    const blockSize = height / this.levelDesign1.length; // 0.3%;

    for (let y = 0; y < this.levelDesign1.length; y++) {
      for (let x = 0; x < this.levelDesign1[y].length; x++) {
        const siffra = this.levelDesign1[y][x]; // Hämta siffran från nivådesignen på´dens aktuella positionen
        //PLAYER
        if (siffra === 9) {
          entities.push(
            new Player(
              x * blockSize,
              y * blockSize,
              blockSize,
              blockSize,
              null as any
            )
          );
        }
        //PLATFORM WIDTH 1
        if (siffra === 1) {
          entities.push(
            new Platform(
              x * blockSize,
              y * blockSize,
              blockSize,
              blockSize,
              null as any
            )
          );
        }
        // PLATFORM WIDTH 2
        if (siffra === 2) {
          entities.push(
            new Platform(
              x * blockSize,
              y * blockSize,
              blockSize * 2,
              blockSize,
              null as any
            )
          );
        }
        // PLATFORM WIDTH 5
        if (siffra === 5) {
          entities.push(
            new Platform(
              x * blockSize,
              y * blockSize,
              blockSize * 5,
              blockSize,
              null as any
            )
          );
        }
        // OBSTACLE
        if (siffra === 7) {
          entities.push(
            new Obstacle(
              x * blockSize,
              y * blockSize,
              blockSize,
              blockSize,
              null as any
            )
          );
        }
        // GOAL
        if (siffra === 6) {
          entities.push(
            new Goal(
              x * blockSize,
              y * blockSize,
              blockSize,
              blockSize,
              null as any
            )
          );
        }
      }
    }

    return new Level(entities);
  }
}

// interface IlevelFactory {
//   generateLevel(): Level;
// }
