import {assert, fail, report} from "./testSuite.js"

window.onload = function () {
  function* NinjaGenerator() {
    try {
      yield "Hattori";
      fail("The expected exception didn't occur");
    } catch (e) {
      assert(e === 'Catch this!', "Aha! We caught an exception");
    }
  }

  const ninjaIterator = NinjaGenerator();
  const result1 = ninjaIterator.next();
  assert(result1.value === 'Hattori', 'We got Hattori');
  ninjaIterator.throw('Catch this!');
}
