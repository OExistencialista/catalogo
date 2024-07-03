let inputSequence = [];
const capcomCode = ['w', 'w', 's', 's', 'a', 'd', 'a', 'd', 'c', 'a'];

window.addEventListener('keydown', (e) => {
    console.log(e.key)
  inputSequence.push(e.key.toLowerCase());
  if (inputSequence.length > capcomCode.length) {
    inputSequence.shift(); // Remove the first element if the sequence is longer than the capcomCode
  }

  if (inputSequence.join(' ') === capcomCode.join(' ')) {
    inputSequence = []; // Reset the sequence
  }
});
