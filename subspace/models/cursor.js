class Cursor {
    constructor() {
        this.coordinate = undefined;
    }
    updateCoordinate() {
        this.coordinate = new Coordinate(mouseX, mouseY)
    }
}