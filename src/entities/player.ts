<<<<<<< HEAD:src/player.ts
// Player ärver innehållet i Entity.
/// <reference path="entity.ts"/>
=======
>>>>>>> 2505cfee1062102e7f98a383cd30f87aea98a315:src/entities/player.ts
class Player extends Entity {
  private gravity: number;
  private jumpStrength: number;
  private isJumping: boolean;

  private currentImageIndex: number;
  private frameCounter: number;
  private framesPerImage: number;

  public constructor(
    positionX: number,
    positionY: number,
    width: number,
    height: number,
    image: p5.Image
  ) {
    super(positionX, positionY, width, height, image, 0);
    this.gravity = 0.65;
    this.jumpStrength = -14;
    this.isJumping = false;

    this.currentImageIndex = 0;
    this.frameCounter = 0;
    this.framesPerImage = 6;
  }
  /** Makes player jump */
  public jump() {
    if (this.velocityY === 0) {
      this.velocityY = this.jumpStrength;
      this.isJumping = true;
    }
  }
  /** Makes sure player is pulled down to the ground */
  public applyGravity() {
    this.velocityY += this.gravity;
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
    stroke(255, 0, 0);
    strokeWeight(4);
    image(
      playerAnimation.playerAnimation[this.currentImageIndex],
      this.positionX,
      this.positionY,
      this.width,
      this.height
    );
    if (!this.isJumping) {
      this.frameCounter++;
    }
    if (this.frameCounter >= this.framesPerImage) {
      this.frameCounter = 0;
      this.currentImageIndex =
        (this.currentImageIndex + 1) % playerAnimation.playerAnimation.length;
    }
    pop();
  }
}
