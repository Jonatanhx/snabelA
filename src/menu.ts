abstract class Menu {
    private backgroundColor: p5.Color;

    constructor(backgroundColor: p5.Color) {
        this.backgroundColor = backgroundColor;
    }

    public abstract draw(): void; 
}