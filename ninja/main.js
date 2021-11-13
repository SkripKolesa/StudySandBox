import {assert, report} from "./testSuite.js"

window.onload = function () {
  function* WeaponG() {
    yield 'Katana';
    yield 'Wakizashi';
  }

  const weaponIterator = WeaponG();

  const result1 = weaponIterator.next();
  assert(typeof result1 === 'object' && result1.value === 'Katana' && !result1.done, 'Katana');

  const result2 = weaponIterator.next();
  assert(typeof result2 === 'object' && result2.value === 'Wakizashi' && !result2.done, 'Wakizashi');

  const result3 = weaponIterator.next();
  assert(typeof result3 === 'object' && result3.value === undefined && result3.done, 'Done');
}
