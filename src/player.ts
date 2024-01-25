// Player ärver innehållet i Entity.
class Player extends Entity {
  private gravity: number;
  private jumpStrength: number;
  private isJumping: boolean;

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
    this.isJumping = false;
  }

  public jump() {
    if (this.velocityY === 0) {
      this.velocityY = this.jumpStrength;
      this.isJumping = true;
      //Lägga animering av gubbens hopp här?
    }
  }
  public applyGravity() {
    this.velocityY += this.gravity; // Apply gravity
    this.positionY += this.velocityY;
  }
  public update(): void {
    if (keyIsDown(32) && !this.isJumping) {
      this.isJumping = true;
      this.jump();
    }
    if (this.velocityY > 1) {
      this.isJumping = false;
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
