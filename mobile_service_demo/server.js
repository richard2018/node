var http = require("http");
var url = require("url");
var formidable = require("formidable");
var util = require("util");
var fs = require("fs");
/**
* route:路由方法
* handle:路由配置
*/
function start(route,handle)
{
  console.log("server started...");
http.createServer(function(req, res) {
  if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
    // parse a file upload
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('received upload:\n\n');
	console.log("处理上传文件请求。。。");
//      res.end(util.inspect({fields: fields, files: files}));
fs.renameSync(files.upload.path, "/tmp/test.png");
    });
    return;
  }
 if(req.url == '/show'){
	console.log("Request handler 'show' was called.");
  fs.readFile("/tmp/test.png", "binary", function(error, file) {
   console.log("begin read test.png");
    if(1==2) {
   console.log("read png error");
      res.writeHead(500, {"Content-Type": "text/plain"});
//      res.write(error + "\n");
      res.end();
    } else {
      res.writeHead(200, {"Content-Type": "image/png"});
      res.write(file, "binary");
      res.end();
    }
  });
  return;
 }else if(req.url == '/getLogo'){
    console.info("getLogo 222.... ");
    res.writeHead(200,{'content-type': 'text/html'});
    res.end(
      "{\"a\":\"aval\"}"
    );
    return;
 }
 // console.info("yyyyyyyyyy mmmm ");
  // show a file upload form
  res.writeHead(200, {'content-type': 'text/html'});
  res.end(
    '<form action="/upload" enctype="multipart/form-data" '+
    'method="post">'+
    '<input type="text" name="title"><br>'+
    '</form>'
  );
}).listen(8888);
}
exports.start = start;
