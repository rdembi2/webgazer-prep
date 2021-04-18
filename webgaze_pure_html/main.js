// webgazer.begin()

// let timeLookingAtScreen = 0;
// let prevStamp = 0;

// const largeNumber = 525479; // can be whatever
// let minX = largeNumber;
// let minY = largeNumber; 
// let maxX = -largeNumber;
// let maxY = -largeNumber;

// webgazer.setGazeListener(function(data, elapsedTime) {
//     if (data == null) {
//         return;
//     }
//     var xprediction = data.x; //these x coordinates are relative to the viewport
//     var yprediction = data.y; //these y coordinates are relative to the viewport

//     timeLookingAtScreen += elapsedTime - prevStamp; // delta time
//     timeLookingAtScreen = elapsedTime;

//     if (xprediction < minX) {
//         console.log(`new min: ${xprediction} compared to ${minX}`);
//         minX = xprediction;
//     }
//     if (yprediction < minY) {
//         minY = yprediction;
//     }
//     if (xprediction > maxX) {
//         maxX = xprediction;
//     }
//     if (yprediction > maxY) {
//         maxY = yprediction;
//     }
//     // console.log(`${xprediction} ${yprediction} - ${elapsedTime}`); //elapsed time is based on time since begin was called
// }).begin();


function playpause(btn, id) {
    const vid = document.getElementById(id);
    if (vid.paused) {
        vid.play();
        btn.style.backgroundColor = "red";
        btn.innerHTML = "Pause";
    } else {
        vid.pause();
        btn.innerHTML = "Play";
        btn.style.backgroundColor = "green";
    }
}


function advanceVideo(btn, id) {
    const vid = document.getElementById(id);
    if (vid.currentTime + 15 > vid.duration) {
        vid.currentTime = vid.duration;
    } else {
        vid.currentTime += 15;
    }
}

function backtrackVideo(btn, id) {
    const vid = document.getElementById(id);
    if (vid.currentTime - 15 > vid.duration) {
        vid.currentTime = 0;
    } else {
        vid.currentTime -= 15;
    }
}

const videos = ["apollo.mp4", "sunset_trim.mp4"]
let videoId = 0

function previousVideo(btn, id) {
    const vid = document.getElementById(id);
    if (videoId != 0) {
        videoId -= 1;
    }
    vid.src = videos[videoId]; 
}

function nextVideo(btn, id) {
    const vid = document.getElementById(id);
    if (videoId != videos.length - 1) {
        videoId += 1;
    }
    vid.src = videos[videoId];
}

function expandVideo(btn, id) {
    var vid = document.getElementById(id);
}