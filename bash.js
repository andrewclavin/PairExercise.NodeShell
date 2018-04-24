var pwd = require('./pwd.js');
var ls = require('./ls.js');
var cat = require('./cat.js');
var curl = require('./curl.js');
process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if(cmd === 'pwd') {
    pwd(done);
  } else if(cmd.substr(0, 3) === 'cat') {
    cat(cmd.substr(4), done);
  } else if(cmd.substr(0, 4) === 'curl') {
    curl(cmd.substr(4), done);
  } else if(cmd === 'ls') {
    ls(done);
  } else {
    process.stdout.write('You typed: ' + cmd + '\n');
    process.stdout.write('\nprompt > ');
  }
});
const done = (output) => {
    process.stdout.write(output);
    process.stdout.write("\nprompt >");
}
