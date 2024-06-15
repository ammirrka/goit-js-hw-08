document
  .getElementById('name-input')
  .addEventListener('input', function (event) {
    const input = event.target.value.trim();
    const output = document.getElementById('name-output');
    output.textContent = input === '' ? 'Anonymous' : input;
  });
