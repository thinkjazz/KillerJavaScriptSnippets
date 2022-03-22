const toFullScreen = () => {
  document.documentElement[
    [
      'requestFullscreen',
      'mozRequestFullScreen',
      'msRequestFullscreen',
      'webkitRequestFullscreen',
    ].find((fn) => typeof document.documentElement[fn] === 'function')
  ]?.();
};
