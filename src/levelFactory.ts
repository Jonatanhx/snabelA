class LevelFactory {
  private levelDesign1: number[][];

  constructor() {
    // 0 = ingenting
    // 1 = block 1w
    // 2 = block 2w
    // 3 = block 3w
    // 4 = block 4w
    // 5 = block 5w
    // 6 = mål
    // 7 = gaffel
    // 8 = kniv
    // 9 = player
    // prettier-ignore
    this.levelDesign1 = [
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0],
      [0,0,0,0,0,1,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],
      [9,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,6],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1],
    ];
  }

  public generateLevel(level: number): Level {
    // Gå igenom leveldesignen och skapa alla entiteter
    // motsvarande sifforna på rätt plats
    const entities: Entity[] = [];
    const blockSize = width * 0.02; // 2%;

    // for loop
    for (let y = 0; y < this.levelDesign1.length; y++) {
      for (let x = 0; x < this.levelDesign1[y].length; x++) {
        const siffra = this.levelDesign1[y][x];
        // if.....
        // new Player(50, 50, 50, 50, null as any)
      }
    }

    return new Level(entities);
  }
}
