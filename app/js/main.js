$(function () {
  let figure = $(".video").hover(hoverVideo, hideVideo);

  function hoverVideo(e) {
    $("video", this).get(0).play();
  }

  function hideVideo(e) {
    $("video", this).get(0).pause();
  }

  let video = $(".video-4");
  let btn = $(".btn-play");
  let videoDescr = $(".preview-video__descr");

  let videoPlayer = $(".video-player-lg");

  video.fadeOut();

  btn.on("click", function () {
    if (video[0].paused) {
      video.fadeIn();
      videoDescr.fadeOut();
      videoPlayer.fadeOut();
      video[0].play();
    }
    //  } else {
    //    // videoPlayer.css("z-index", "99");
    //    video[0].pause();
    //    video.fadeOut();
    //  }
  });

  video.on("click", function () {
    video[0].pause();
    videoDescr.fadeIn();
    videoPlayer.fadeIn();
    video.fadeOut();
  });
});
