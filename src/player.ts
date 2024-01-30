// Player ärver innehållet i Entity.
/// <reference path="entity.ts"/>
class Player extends Entity {
  private gravity: number;
  private jumpStrength: number;
  private isJumping: boolean;

  // private playerAnimation: p5.Image[];
  // private currentAnimationFrame: number;

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
    super(positionX, positionY, width, height, image, 0, 0); //ändrade till animation temporärt men frågan är om man ska lägga kvar image och denna vid sidan av?
    this.gravity = 0.5;
    this.jumpStrength = -15;
    this.isJumping = false;

    this.currentImageIndex = 0;
    this.frameCounter = 0;
    this.framesPerImage = 17;
  }

  public jump() {
    if (this.velocityY === 0) {
      this.velocityY = this.jumpStrength;
      this.isJumping = true;
    }
  }
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

    // Update animation frame
    // this.currentAnimationFrame++;
    // if (this.currentAnimationFrame >= this.playerAnimation.length) {
    //   this.currentAnimationFrame = 0; // Reset to the first frame
    // }
  }

  public draw(): void {
    push();
    stroke(255, 0, 0);
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
