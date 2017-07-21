var debug=require("debug")("mydebug:http"),
    work=require("./work"),
    http=require("http");
http.createServer(function(req,res){
	console.info("xxxxx");
	console.info("yyyyy");
    debug(req.method + ' ' + req.url);
    res.end('hello\n');
}).listen(3000,function(){
    debug("listening");
});