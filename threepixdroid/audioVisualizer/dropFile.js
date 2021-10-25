function enableFileDrop({id, fn}) {
  const elem = document.getElementById(id);
  if (!elem) {
    throw new Error('drop zone element not found')
  }
  elem.addEventListener('drop', (ev) => {
    ev.preventDefault();
    if (ev.dataTransfer.items) {
      for (const item of ev.dataTransfer.items) {
        if (item.kind === 'file') {
          const file = item.getAsFile();
          fn(file);
        }
      }
    }
  });

  elem.addEventListener('dragover', (ev) => {
    ev.preventDefault();
  });
}

export {enableFileDrop}
