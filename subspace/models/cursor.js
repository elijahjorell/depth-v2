class Cursor {
    constructor() {
        this.coordinate = undefined;
    }
    createElement() {
        state.elements.database.push(new Element(this.coordinate, state.config.baseElementDimensions));
    }
    updateCoordinate() {
        this.coordinate = new Coordinate(mouseX, mouseY);
    }
}