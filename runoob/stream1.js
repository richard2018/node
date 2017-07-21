var fs = require("fs");
var data = '';

// 创建可读流
var readerStream = fs.createReadStream('input.text');

// 设置编码为 utf8。
readerStream.setEncoding('UTF8');

// 处理流事件 --> data, end, and error
readerStream.on('data', function(chunk) {
   console.log("data  : "+chunk);	
   data += chunk;
});

readerStream.on('end',function(){
   console.log("end : "+data);
});

readerStream.on('error', function(err){
   console.log("error... : "+err.stack);
});

console.log("程序执行完毕");
