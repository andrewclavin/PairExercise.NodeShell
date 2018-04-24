var request = require('request');
module.exports = function(string, fn){
    request(string, function (err, response, body) {
        if(err){
            throw err
        } else {
            fn(body)
        }
})};
