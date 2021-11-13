import {assert, report} from "./testSuite.js"

window.onload = function () {
  const startEl = document.getElementById('subtree');

  function traverseDOM(element, callback) {
    callback(element);
    element = element.firstElementChild;
    while (element) {
      traverseDOM(element, callback);
      element = element.nextElementSibling;
    }
  }

  traverseDOM(startEl, (element) => {
    assert(element !== null, element.nodeName);
  })
}
