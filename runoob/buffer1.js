// var Buffer = require("Buffer");
var buf = new Buffer("xxx");
buf.write("good",0,2,"UTF-8");
console.info("buffer: "+buf);

var buf2 = new Buffer(3);
buf2.write("f12fsss");
console.info("buf2 : "+buf2);

var buf3 = new Buffer('www.runoob.com');
var json = buf3.toJSON(buf3);
console.log("json1 : "+json);
