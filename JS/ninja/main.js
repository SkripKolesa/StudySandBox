import {assert, report} from "./testSuite.js"

function multiMax(first, ...remains) {
  const sorted = remains.sort((a, b) => b - a);
  return first * sorted[0];
}

window.onload = function () {
  assert(multiMax(3, 2, 3, 1) === 9, 'First arg by largest');
}
