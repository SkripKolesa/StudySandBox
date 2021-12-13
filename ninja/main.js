import {assert, fail, report} from "./testSuite.js"

window.onload = function () {
  try {
    const ninja = {};
    ninja.name = "Yoshi";
    ninja.weapon = "kusarigama";

    Object.defineProperty(ninja, "sneaky", {
      configurable: false,
      enumerable: false,
      value: true,
      writable: true
    });
    assert("sneaky" in ninja, "We can access the new property");
    delete ninja.sneaky;
    assert("sneaky" in ninja, "We can access the new property");
  }
  catch (ex){
    report(ex.message, 'exception');
  }



}

