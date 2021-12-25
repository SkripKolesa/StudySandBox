import {assert, fail, report} from "./testSuite.js"

window.onload = function () {
  try {
    const A = new Set(['Kuma', 'Hattori', 'Yagyu']);
    const B = new Set(['Hattori', 'Oda', 'Tomoe']);
    const C = new Set([...A, ...B]);
    report([...C]);
  } catch (ex) {
    report(ex.message, 'exception');
  }
}

