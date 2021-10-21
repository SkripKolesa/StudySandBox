import {assert, report} from "./testSuite.js"

window.onload = function () {
  assert(true, 'This one sparks joy');
  report('tha middle riddle');
  assert(false, 'This one fucked up');
}
