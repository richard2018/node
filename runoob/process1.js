process.on('exit', function(code) {

  // 以下代码永远不会执行
  setTimeout(function() {
    console.log("该代码不会执行");
  }, 0);
  process.stdout.write("Hello World!" + "\n");
  console.log("执行路径 : "+ process.execPath);
  console.log("工作目录 : "+ process.cwd());
  console.log("platform : "+process.platform);
  console.log("gid : "+process.getgid());
  console.log("uid : "+process.getuid());
  console.log("groups : "+process.getgroups());
  console.log(process.memoryUsage());
  console.log('退出码为:', code);
});
console.log("程序执行结束");
