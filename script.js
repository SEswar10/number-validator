// Add an event listener for input changes
document.getElementById('numberInput').addEventListener('input', function () {
    const input = parseInt(this.value, 10); // Parse the input as an integer
    const output = document.getElementById('output'); // Output element
  
    // Clear output if the input is invalid
    if (isNaN(input)) {
      output.textContent = '';
      return;
    }
  
    // If the input is negative
    if (input < 0) {
      output.textContent = 'Enter a positive value.';
      return;
    }
  
    // If the input is even
    if (input % 2 === 0) {
      const nextEvens = [input + 2, input + 4, input + 6];
      output.textContent = `Next 3 even numbers: ${nextEvens.join(', ')}`;
      return;
    }
  
    // If the input is odd
    const nextOdds = [input + 2, input + 4, input + 6];
    output.textContent = `Next 3 odd numbers: ${nextOdds.join(', ')}`;
  });
  