import {assert, fail, report} from "./testSuite.js"

window.onload = function () {
  function Person() {
  };
  Person.prototype.dance = function () {
  };

  function Ninja() {
  }

  Ninja.prototype = new Person();

  const ninja = new Ninja();

  assert(ninja instanceof Ninja, "ninja is Ninja");
  assert(ninja instanceof Person, "ninja is Person");
  assert(ninja instanceof Object, "ninja is Object");
  assert(typeof ninja.dance === "function", "ninja can dance");
  assert(ninja.constructor === Ninja, "ninja constructor is Ninja");
}

