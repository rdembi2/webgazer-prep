# Gazepointer Video Website

Use your eyes to control a video watching interface powered by your laptop webcam.

Web based gui to be used alongside [GazePointer](https://gazerecorder.com/gazepointer/) (non-commercial use).

Check out a demo video [here](https://www.youtube.com/watch?v=uoDLyuPF0QM&feature=youtu.be) made for the UIUC [2021 Virtual Undergraduate Research Symposium](https://undergradresearch.illinois.edu/symposium.html) with [slides](https://docs.google.com/presentation/d/1m1g57ywmfDwI6RChzUSMqIvdUawPU-HtGibQHvCuMbI/edit?usp=sharing). Sponsor Zillow's Choice at [UIUC WCS Explorations 2021](http://wcs.illinois.edu/explorations/index.html).

## Run

1. Download GazePointer (windows only) onto your computer and calibrate that using the interface.

2. Open `index.html` on any web browser. You might need to just your zoom level till everything fits on the screen properly.

## Approach

We set up large buttons below and above the video for simple controls. The buttons change color when the gaze hovers over and if there is a long enough dwell then the action is performed. We use mouse on and off events to keep track of when the gaze enters and exits a button.

GazePointer has mouseless calibration that is fairly accruate compared to altneratives like [webgazer.js](https://webgazer.cs.brown.edu/) but is also worth looking into if you're considering your own webcam based projects. 

## See Also

* [webgazer.js offical page](https://webgazer.cs.brown.edu/) and [video intro](https://www.youtube.com/watch?v=zAxEoB-mF8A)
* [GazeCloudAPI](https://gazerecorder.com/gazecloudapi/) and [article](https://medium.com/@williamwang15/integrating-gazecloudapi-a-high-accuracy-webcam-based-eye-tracking-solution-into-your-own-web-app-2d8513bb9865) compared it with webgazer. The article also has a [repo](https://github.com/ruw001/GazeCloudAPIEyeTrackingDemo)
* [Visuabilty](https://devpost.com/software/visuabilty) and [repo](https://github.com/bahorn/astonhack2019) which is a hackathon project using web gazer also using `ReactJS`.
* [Focus point heatmap using webgazer repo](https://github.com/wandrew8/webgazer-hack) for a hackathon.
* [Webgazer drawing](https://www.mintbean.io/meets/6bb04546-3331-41fe-8ce8-845f62838c8a/projects/0866b658-2588-4509-82da-2c4343bbfbf0) and [repo](https://github.com/rcrecco123/webgazer) for a hackathon.
* [The Truth About Webcam Eye Tracking](https://www.gfk.com/blog/2011/10/the-truth-about-webcam-eye-tracking) - more on the marketing user research side but also useful to look into
* [Stanford CSLI Eye-Tracking Workshop Summer 2013](https://docs.google.com/document/d/1v1pltNwTL8Prx77c5b11dGVt8opToNsEeGAiEhZtomU/edit)

## General Reading

* [Eye Tracking for Everyone](https://people.csail.mit.edu/khosla/papers/cvpr2016_Khosla.pdf) paper
* [Mismatch - How Inclusion Shapes Design](https://mitpress.mit.edu/books/mismatch) book
* [Eye Tracking the User Experience: A Practical Guide to Research](https://www.goodreads.com/book/show/18983568-eye-tracking-the-user-experience) book
* [The Privacy-Invading Potential of Eye Tracking Technology](https://www.aclu.org/blog/national-security/privacy-and-surveillance/privacy-invading-potential-eye-tracking-technology)
* [Eye Tracking Wikipedia](https://en.wikipedia.org/wiki/Eye_tracking)

## Files

* `index.html` the entry point page
* `main.css` has some barebones styling kept simple on purpose to demonstrate the system
* `main.jss` has the dwell code and video element actions
* `sunset_trim.mp4` and `apollo.mp4` are sample videos for the demo, but these can be replaced with anything else supported by `<video>`

## Limitations

Most of our limitations came from using a laptop webcam but if you use something in the ~$250 range like the entry level Tobii eye trackers you will get better results. Keeping this in mind we were limited by

* Low accuracy 
* Low precision
* Low sampling rate (12-15 Hz)
* Limited library support
* Frequent recalibration (either after 10 minutes or lighting/position change)
* Low camera video resolution
* Differing head angles and positions (6 degrees of movement)

## Future Work

* Add `webgazer` support
* React support
* ClassTranscribe Integration
* Cross OS support
* https://github.com/szydej/GazeFlowAPI can give raw access to coordinates that we can work with
