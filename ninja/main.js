import {assert, fail, report} from "./testSuite.js"

window.onload = function () {
  try {
    function* G() {
      try {
        yield 1;
        yield 0;
      } catch (ex) {
        report(ex);
      }
    }

    const iterator = G();
    report(iterator.next().value);
    iterator.throw("privet");
  } catch (ex) {
    fail(ex);
  }

}

