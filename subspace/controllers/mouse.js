function mousePressed() {
    switch (mouseButton) {
        case LEFT:
            state.areaSelector.start(state.cursor)
            break;
        case RIGHT:
            if (state.areaSelector.active) {
                state.areaSelector.createElement();
            }
            break;
    }
}

function mouseReleased() {
    switch (mouseButton) {
        case LEFT:
            state.areaSelector.end()
            break;
    }
}

document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

document.addEventListener('mousedown', (e) => {
    if (e.button === 1) {
        e.preventDefault();
    }
});