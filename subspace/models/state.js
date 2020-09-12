class State {
    constructor(savedState, config) {
        this.areaSelector = new AreaSelector();
        this.cursor = new Cursor();
        this.config = config ? config : {
            baseElementDimensions: {
                w: 200,
                h: 100
            }
        }
        this.elements = savedState ? savedState.elements : {
            database: [],
            grabbed: [],
            selected: []
        };
    }
}