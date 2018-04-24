var pwd = require('./pwd.js');
process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if(cmd === 'pwd') {
    pwd();
  } else {
    process.stdout.write('You typed: ' + cmd + '\n');
  }
  process.stdout.write('\nprompt > ');
});
