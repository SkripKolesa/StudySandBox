function assert(value, desc = '!') {
  report(desc, value ? 'pass' : 'fail');
}

function report(message, className = 'report') {
  const li = document.createElement('li');
  li.className = className;
  li.appendChild(document.createTextNode(message));
  document.getElementById('results').appendChild(li);
}

export {assert, report};
