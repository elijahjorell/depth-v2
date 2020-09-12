function keyPressed() {
    switch (keyCode) {
        case ENTER:
            if (state.areaSelector.active) {
                state.areaSelector.createElement();
            } else {
                state.cursor.createElement();
            }
        break;
    }
    
    
}