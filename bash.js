var pwd = require('./pwd.js');
var ls = require('./ls.js');
process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if(cmd === 'pwd') {
    pwd();
  }
  if(cmd === 'ls') {
    ls();
  } else {
    process.stdout.write('You typed: ' + cmd + '\n');
    process.stdout.write('\nprompt > ');
  }
});
