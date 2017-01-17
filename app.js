var http = require('http');
var result = require('./mod_3');

http.createServer(function (req, res) {
  res.writeHead(200);

  res.write(result.accountString());
  res.write(result.money());



  res.end();
}).listen(3000);
