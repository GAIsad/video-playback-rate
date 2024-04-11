$(function () {
    let videoElement = document.getElementsByTagName('video');

    if (videoElement.length > 0) {
        let thatVideoPlayer = videoElement[0];
        console.log('current playbackRate=' + thatVideoPlayer.playbackRate);

        $(document).keydown(function (e) {
            try {
                // Ctrl + `+`
                if (e.ctrlKey && e.which === 187) {
                    thatVideoPlayer.playbackRate += 0.5;
                    console.log('current playbackRate=' + thatVideoPlayer.playbackRate);
                }
                // Ctrl + `-`
                if (e.ctrlKey && e.which === 189) {
                    thatVideoPlayer.playbackRate -= 0.5;
                    console.log('current playbackRate=' + thatVideoPlayer.playbackRate);
                }
                // Ctrl + `0`
                if (e.ctrlKey && e.which === 48) {
                    thatVideoPlayer.playbackRate = 1;
                    console.log('current playbackRate=' + thatVideoPlayer.playbackRate);
                }
            } catch (error) {
                console.log(error.message);
            }
        });
    }
});
