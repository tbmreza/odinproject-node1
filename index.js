var http = require('http');
var url = require('url');
var fs = require('fs');

function renderHTML(path, res) {
  fs.readFile(path, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});      
      return res.end("Page not found error.");
    }  
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}

http.createServer(function (req, res) {
  var path = url.parse(req.url).pathname;
  switch (path) {
    case '/' :
      renderHTML('./index.html', res);
      break;
    case '/index' :
      renderHTML('./index.html', res);
      break;
    case '/about' :
      renderHTML('./about.html', res);
      break;
    case '/contact-me' :
      renderHTML('./contact-me.html', res);
      break;
    default :
      renderHTML('./404.html', res);

  }
}).listen(8080);
