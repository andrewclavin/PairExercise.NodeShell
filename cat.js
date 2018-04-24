var fs = require('fs');
module.exports = function(path, fn){
  fs.readFile(path, 'utf8', (err, data) => {
  if(err) {
    throw err
  } else {
    fn(data);
  }
})}
