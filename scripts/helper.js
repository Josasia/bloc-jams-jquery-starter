

class Helper {
  playPauseAndUpdate(song) {
    player.playPause(song);
    const player = {
      currentlyPlaying: {
        duration: 0
      }
    };
  }
};
  const helper = new Helper();
