/// <reference path="entity.ts"/>
class ProgressBar extends Entity {
    public constructor(
        positionX: number,
        positionY: number,
        width: number,
        height: number,
        image: p5.Image
    ) {
        super(positionX, positionY, width, height, image, 0, 0);
    }

    public draw(): void {
        push()
        fill("Orange");
        rect(this.positionX, this.positionY, this.width, this.height);
        pop()
    }
    public update(): void {

    }
}


