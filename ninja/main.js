import {assert, fail, report} from "./testSuite.js"

window.onload = function () {
  function Ninja(){
    this.swung = true;
  }

  const n1 = new Ninja();

  Ninja.prototype.swingSword = function(){
    return this.swung;
  };

  assert(n1.swingSword(), "Method exists even out of order");
  Ninja.prototype = {
    pierce: function(){
      return true;
    }
  };

  assert(n1.swingSword(), "n1 can still swing");
  assert(!("pierce" in n1), "n1 cant pierce");

  const n2 = new Ninja();
  assert(n2.pierce(), "n2 can pierce");
  assert(!("swingSword" in n2), "n2 can't swing");
}

