var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
console.log(document.getElementsByTagName("script"));

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "720", //get user screen 
    width: "1280", //get user screen
    playerVars: {
      listType: "user_uploads",
      list: "DrossRotzank",
      /* controls: 0, */
      loop: 1,
      autoplay: 1,
      disablekb: 1,
      modestbranding: 1,
      fs: 1,
      rel: 0
    },
    allowfullscreen: true,
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
}

function onPlayerReady(event) {
  setTimeout(function () {
    event.target.setShuffle({ shufflePlaylist: true });
  }, 1000);
}

var done = false;
function onPlayerStateChange(event) {
  done = true;
}

function stopVideo() {
  player.stopVideo();
}

function toggleFullScreen(elem) {
      // ## The below if statement seems to work better ## if ((document.fullScreenElement && document.fullScreenElement !== null) || (document.msfullscreenElement && document.msfullscreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
      if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
          if (elem.requestFullScreen) {
              elem.requestFullScreen();
          } else if (elem.mozRequestFullScreen) {
              elem.mozRequestFullScreen();
          } else if (elem.webkitRequestFullScreen) {
              elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
          } else if (elem.msRequestFullscreen) {
              elem.msRequestFullscreen();
          }
      } else {
          if (document.cancelFullScreen) {
              document.cancelFullScreen();
          } else if (document.mozCancelFullScreen) {
              document.mozCancelFullScreen();
          } else if (document.webkitCancelFullScreen) {
              document.webkitCancelFullScreen();
          } else if (document.msExitFullscreen) {
              document.msExitFullscreen();
          }
      }
  }