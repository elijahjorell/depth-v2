class AreaSelector {
    constructor() {
        this.active = false;
        this.coordinates = {
            origin: undefined,
            topLeftCorner: undefined
        }
        this.dimensions = undefined;
    }
    start() {
        this.active = true;
        this.coordinates.origin = state.cursor.coordinate;
    }
    on() {
        if (this.active) {
            this.updateBounds(state.cursor);
            this.display();
        }
    }
    end() {
        this.active = false;
        this.coordinates = {
            origin: undefined,
            topLeftCorner: undefined
        }
        this.dimensions = undefined;
    }
    display() {
        stroke(255);
        fill(255, 120);
        rect(this.coordinates.topLeftCorner.x, 
             this.coordinates.topLeftCorner.y, 
             this.dimensions.w, 
             this.dimensions.h);
    }
    updateBounds() {
        if (state.cursor.coordinate.y < this.coordinates.origin.y) {
            if (state.cursor.coordinate.x < this.coordinates.origin.x) {
                // If cursor is at top-left quandrant
                this.coordinates.topLeftCorner = new Coordinate(
                    state.cursor.coordinate.x,
                    state.cursor.coordinate.y
                )
                this.dimensions = new Dimension(
                    this.coordinates.origin.x - state.cursor.coordinate.x,
                    this.coordinates.origin.y - state.cursor.coordinate.y
                )
            } else {
                // If cursor is at top-right quadrant
                this.coordinates.topLeftCorner = new Coordinate(
                    this.coordinates.origin.x,
                    state.cursor.coordinate.y
                )
                this.dimensions = new Dimension(
                    state.cursor.coordinate.x - this.coordinates.origin.x,
                    this.coordinates.origin.y - state.cursor.coordinate.y
                )
            }
        } else {
            if (state.cursor.coordinate.x < this.coordinates.origin.x) {
                // If cursor is at bottom-left quadrant
                this.coordinates.topLeftCorner = new Coordinate(
                    state.cursor.coordinate.x,
                    this.coordinates.origin.y
                )
                this.dimensions = new Dimension(
                    this.coordinates.origin.x - state.cursor.coordinate.x,
                    state.cursor.coordinate.y - this.coordinates.origin.y
                )
            } else {
                // If cursor is at bottom-right quadrant
                this.coordinates.topLeftCorner = new Coordinate(
                    this.coordinates.origin.x,
                    this.coordinates.origin.y
                )
                this.dimensions = new Dimension(
                    state.cursor.coordinate.x - this.coordinates.origin.x,
                    state.cursor.coordinate.y - this.coordinates.origin.y
                )
            }
        }
    }
}