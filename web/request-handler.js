var path = require('path');
var url = require('url');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');
var helpers = require('./http-helpers');
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  var pathname = url.parse(req.url).pathname;
  console.log(pathname);
  if (pathname === '/' && req.method ==="GET"){
    fs.readFile('./public/index.html', 'binary', function(error, file){
      res.writeHead(200, helpers.headers);
      res.write(file, 'binary');
      res.end();
    });
  }
  if (pathname === '/public/styles.css' && req.method ==="GET"){
    fs.readFile('./public/styles.css', 'binary', function(error, file){
      res.writeHead(200, helpers.headers);
      res.write(file, 'binary');
      res.end();
    });
  }
  if (pathname === '/styles.css' && req.method ==="GET"){
    fs.readFile('./public/styles.css', 'binary', function(error, file){
      res.writeHead(200, helpers.headers);
      res.write(file, 'binary');
      res.end();
    });
  }
  if (pathname === '/' && req.method ==="POST"){
    var body = "";
    req.on('data', function(chunk) {
      body += chunk;
    });
    req.on('end', function() {
      var inputURL = body.slice(4);
      archive.isUrlInList(inputURL, function(result) {
        if (result) {
          console.log("before readFile");
          fs.readFile('../archives/sites/'+inputURL, 'binary', function(error, file){
            console.log("inside readFile");
            res.writeHead(200, helpers.headers);
            res.write(file, 'binary');
            res.end();
          });
          console.log("after readFile");
        } else {

        }
      });
      // res.writeHead(200, helpers.headers);
      // res.end();
    });
  }
};

