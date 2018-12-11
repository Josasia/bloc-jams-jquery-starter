

class Helper {
  
  prettyTime (timeInSeconds) {
    const min = Math.floor( timeInSeconds / 60);
    const sec = Math.floor( timeInSeconds - min * 60);
    return $(min}:${sec};
  }

  playPauseAndUpdate(song) {
    player.playPause(song);
    const totalTime = player.currentlyPlaying.duration;
    const prettyTotalTime = player.prettyTime(totalTime);
    $('#time-control .total-time').text(totalTime);
  }
};
  const helper = new Helper();
