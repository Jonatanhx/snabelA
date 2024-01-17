class Background extends Entity {
  //bakgrunden ärver från Entity klassen
  public constructor(
    positionX: number,
    positionY: number,
    width: number,
    height: number,
    image: p5.Image
  ) {
    super(positionX, positionY, width, height, image, 0, 0); //Super hänvisar till Entity's constructor
  }
}


