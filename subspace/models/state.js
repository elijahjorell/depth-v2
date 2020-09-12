class State {
    constructor(savedState) {
        this.areaSelector = new AreaSelector();
        this.cursor = new Cursor();
        this.elements = savedState ? savedState.elements : {
            database: [],
            grabbed: [],
            selected: []
        };
    }
}