const stdin = process.stdin;
const handleUserInput = function() {
  // \u0003 maps to ctrl+c input
  
  stdin.on('data', (key) => {
    process.stdout.write('.');
    if (key === '\u0003') {
      process.exit();
      }
  })};

const setupInput = function() {
  
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput();
  
  return stdin;
}
module.exports = {setupInput};