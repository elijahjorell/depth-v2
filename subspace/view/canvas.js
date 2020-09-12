function setup() {
    const canvas = createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(30, 30, 30);
    state.cursor.updateCoordinate();
    state.areaSelector.on();
}