abstract class Menu {
  private backgroundColor: string;
  constructor(backgroundColor: string) {
    this.backgroundColor = backgroundColor;
  }

  abstract draw(): void;
  abstract update(): void;
}
