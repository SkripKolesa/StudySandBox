function assert(value, desc = '!') {
  value? pass(desc): fail(desc);
}

function report(message, className = 'report') {
  const li = document.createElement('li');
  li.className = className;
  li.appendChild(document.createTextNode(message));
  document.getElementById('results').appendChild(li);
}

function fail(message) {
  report(message, 'fail');
}

function pass(message){
  report(message, 'pass');
}

export {assert, report, fail};
