import {enableFileDrop} from "./dropFile.js";
import {connectContext, getAudioObj} from "./audio.js";

function play(file) {
  const audio = document.getElementById('audio');
  audio.setAttribute('src', URL.createObjectURL(file));
  connectContext(audio);
  audio.play();
}

function loop() {
  window.requestAnimationFrame(loop);
  const {analyser} = getAudioObj();
  const array = new Uint8Array(analyser.frequencyBinCount);
  analyser.getByteFrequencyData(array);
  draw(array);
}

function draw(array) {
  const elem = draw.elem = draw.elem || document.getElementById('drop');
  const style = elem.style;
  style.minHeight = `${500 + array[40]}px`;
  style.width = `${500 + array[40]}px`;
}

function main() {
  enableFileDrop({
    id: 'drop',
    fn: (file) => {
      play(file);
      loop();
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  main();
});
