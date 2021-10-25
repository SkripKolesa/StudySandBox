function getAudioObj() {
  const audioContext = getAudioObj.audioContext = getAudioObj.audioContext || new AudioContext();
  const analyser = getAudioObj.analyser = getAudioObj.analyser || audioContext.createAnalyser();
  return {audioContext, analyser};
}

function connectContext(audio) {
  const {audioContext, analyser} = getAudioObj();
  const track = audioContext.createMediaElementSource(audio);
  track.connect(analyser);
  analyser.connect(audioContext.destination);
}

export {getAudioObj, connectContext};
