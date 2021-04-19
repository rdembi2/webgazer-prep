// constants
const videos = ["apollo.mp4", "sunset_trim.mp4"];
const videoEl = "example_video";
const timeout = 1000;
// global state

let videoId = 0;


let looking = {
    "advance":   false,
    "backtrack": false,
    "prev":      false,
    "playpause": false,
    "speed":     false,
    "next":      false
};

// functions

function lookAt(btn, button_name) {
    looking[button_name] = true;
    btn.style.backgroundColor = "yellow";
    setTimeout(function() {
        console.log("timeout went");
        console.log(looking);
        if (looking[button_name]) {
            if (button_name == "advance") {
                advanceVideo(btn);
            } else if (button_name == "backtrack") {
                backtrackVideo(btn);
            } else if (button_name == "prev") {
                previousVideo(btn);
            } else if (button_name == "playpause") {
                playpause(btn);
            } else if (button_name == "speed") {
                speedslow(btn);
            } else if (button_name == "next") {
                nextVideo(btn);
            }
        }
    }, timeout);
}

function stopLookingAt(btn, button_name) {
    looking[button_name] = false;
    btn.style.backgroundColor = "green";
}

function playpause(btn) {
    const vid = document.getElementById(videoEl);
    if (vid.paused) {
        vid.play();
        btn.innerHTML = "Pause";
    } else {
        vid.pause();
        btn.innerHTML = "Play";
    }
}

function speedslow(btn) {
    const vid = document.getElementById(videoEl);
    if (vid.playbackRate == 1) {
        vid.playbackRate = 2;
        btn.style.backgroundColor = "red";
        btn.innerHTML = "2x";
    } else {
        vid.playbackRate = 1;
        btn.innerHTML = "1x";
        btn.style.backgroundColor = "green";
    }
}


function advanceVideo(btn) {
    const vid = document.getElementById(videoEl);
    if (vid.currentTime + 15 > vid.duration) {
        vid.currentTime = vid.duration;
    } else {
        vid.currentTime += 15;
    }
}

function backtrackVideo(btn) {
    const vid = document.getElementById(videoEl);
    if (vid.currentTime - 15 > vid.duration) {
        vid.currentTime = 0;
    } else {
        vid.currentTime -= 15;
    }
}

function previousVideo(btn) {
    const vid = document.getElementById(videoEl);
    if (videoId != 0) {
        videoId -= 1;
    }
    vid.src = videos[videoId]; 
}

function nextVideo(btn) {
    const vid = document.getElementById(videoEl);
    if (videoId != videos.length - 1) {
        videoId += 1;
    }
    vid.src = videos[videoId];
}