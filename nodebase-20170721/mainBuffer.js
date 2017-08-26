var buf = new Buffer('a,www.runoob.com');
var json = buf.toJSON(buf);

console.log(json);
