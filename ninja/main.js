import {assert, report} from "./testSuite.js"

window.onload = function () {
  function* WeaponG(){
    yield 'Katana';
    yield 'Wakizashi';
    yield 'Kusarigama';
  }

  for (let weapon of WeaponG()){
    assert(weapon !== undefined, weapon);
  }
}
