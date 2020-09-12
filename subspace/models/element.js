class Element {
    constructor(coordinate, dimensions) {
        this.coordinate = coordinate;
        this.dimensions = dimensions;
    }
    display() {
        stroke(255, 215, 10);
        fill(255, 0);
        rect(this.coordinate.x, this.coordinate.y, this.dimensions.w, this.dimensions.h);
    }
}