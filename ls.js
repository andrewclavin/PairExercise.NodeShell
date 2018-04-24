//import { fstat } from 'fs';

var fs = require('fs');
module.exports = function(fn){
  fs.readdir('./', 'utf8', (err, files) => {
  if(err) {
    throw err
  } else {
    fn(files.join('\n'));
  }
})}
