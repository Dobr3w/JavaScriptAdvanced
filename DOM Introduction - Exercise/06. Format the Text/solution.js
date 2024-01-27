function solve() {
  const input = document.getElementById('input');
  const output = document.getElementById('output');

  let sentences = input.value.split('.').filter(sentence => sentence.trim() !== '');
  output.innerHTML = '';

  for (let i = 0; i < sentences.length; i += 3) {
    let paragraph = document.createElement('p');
    paragraph.textContent = sentences.slice(i, i + 3).join('.') + '.';
    output.appendChild(paragraph);
  }
}
