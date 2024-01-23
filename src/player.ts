// Player ärver innehållet i Entity.
class Player extends Entity {
  private gravity: number;
  private jumpStrength: number;
  private isJumping: boolean;
  /* private groundLevel: number; */

  public constructor(
    positionX: number,
    positionY: number,
    width: number,
    height: number,
    image: p5.Image
  ) {
    super(positionX, positionY, width, height, image, 0, 0);
    this.gravity = 0.4;
    this.jumpStrength = -15;
    /* this.groundLevel = height * 0.02; */
    this.isJumping = false;
  }

  public jump() {
    if (this.velocityY === 0) {
      this.velocityY = this.jumpStrength;
      this.isJumping = true;
    }
  }

  public applyGravity() {
    if (this.isJumping || this.positionY < height - this.height) {
      // Update the player's position based on velocity
    }
    this.velocityY += this.gravity; // Apply gravity
    this.positionY += this.velocityY;
  }

  public update(): void {
    if (keyIsDown(32)) {
      this.jump();
    }
    this.applyGravity();
  }

  public draw(): void {
    push();
    fill("red");
    rect(this.positionX, this.positionY, this.width, this.height);
    pop();
  }
}
