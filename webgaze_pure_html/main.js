webgazer.begin()

let timeLookingAtScreen = 0;
let prevStamp = 0;

const largeNumber = 525479; // can be whatever
let minX = largeNumber;
let minY = largeNumber; 
let maxX = -largeNumber;
let maxY = -largeNumber;

webgazer.setGazeListener(function(data, elapsedTime) {
    if (data == null) {
        return;
    }
    var xprediction = data.x; //these x coordinates are relative to the viewport
    var yprediction = data.y; //these y coordinates are relative to the viewport

    timeLookingAtScreen += elapsedTime - prevStamp; // delta time
    timeLookingAtScreen = elapsedTime;

    if (xprediction < minX) {
        console.log(`new min: ${xprediction} compared to ${minX}`);
        minX = xprediction;
    }
    if (yprediction < minY) {
        minY = yprediction;
    }
    if (xprediction > maxX) {
        maxX = xprediction;
    }
    if (yprediction > maxY) {
        maxY = yprediction;
    }
    // console.log(`${xprediction} ${yprediction} - ${elapsedTime}`); //elapsed time is based on time since begin was called
}).begin();