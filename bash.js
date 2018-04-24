var pwd = require('./pwd.js');
var ls = require('./ls.js');
var cat = require('./cat.js');
process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if(cmd === 'pwd') {
    pwd();
} else if(cmd.substr(0,3) === 'cat') {
    cat(cmd.substr(4));
  } else if(cmd === 'ls') {
    ls();
  } else {
    process.stdout.write('You typed: ' + cmd + '\n');
    process.stdout.write('\nprompt > ');
  }
});
