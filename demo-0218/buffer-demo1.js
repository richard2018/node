buf = new Buffer(256);
len = buf.write("www.runo");

console.log("写入字节数 : "+  len);

var buf = new Buffer('abc');
var json = buf.toJSON(buf);

console.log(json);