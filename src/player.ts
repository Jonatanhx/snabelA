// Player ärver innehållet i Entity.
class Player extends Entity {
  private gravity: number;
  private jumpStrength: number;
  private isJumping: boolean;
  private prevSpaceButtonPressed: boolean;
  /* private groundLevel: number; */

  public constructor(
    positionX: number,
    positionY: number,
    width: number,
    height: number,
    image: p5.Image
  ) {
    super(positionX, positionY, width, height, image, 0, 0);
    this.gravity = 0.5;
    this.jumpStrength = -15;
    /* this.groundLevel = height * 0.02; */
    this.isJumping = false;
    this.prevSpaceButtonPressed = false;
  }

  public jump() {
    if (this.velocityY === 0) {
      this.velocityY = this.jumpStrength;
      this.isJumping = true;
      //Lägga animering av gubbens hopp här?
    }
  }
  // Vi behöver ändra så isJumping blir FALSE när gubben landar
  public applyGravity() {
    if (this.isJumping || this.positionY < height - this.height) {
      // this.prevSpaceButtonPressed = false;
    }
    this.velocityY += this.gravity; // Apply gravity
    this.positionY += this.velocityY;
  }
  public update(): void {
    if (keyIsDown(32) && !this.prevSpaceButtonPressed) {
      this.prevSpaceButtonPressed = true;
      this.jump();
    }
    if (this.velocityY > 1) {
      this.prevSpaceButtonPressed = false;
    }
    this.applyGravity();
    console.log(this.velocityY);
  }

  public draw(): void {
    push();
    fill("red");
    rect(this.positionX, this.positionY, this.width, this.height);
    pop();
  }
}
