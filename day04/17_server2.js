const http=require("http");
http.createServer((req,res)=>{
  //从请求参数中获得函数名
  var fun=req.url.split("=")[1];
  var weather="北京 小雨 26~19";
  res.writeHead(200,{
    "Content-Type":"text/plain;charset=utf-8",
  });
  // var str=`document.write("${weather}")`;
  // var str=`tryit("${weather}")`;
  var str=`${fun}("${weather}")`
  console.log(str);
  res.write(str);
  res.end();
}).listen(3000)
//运行: 
//右键单击16_server.js,选在集成终端中打开
//在弹出窗口中运行node 16_server.js
//打开浏览器，地址栏输入: 
//http://localhost:3000
//看到天气预报，说明服务器端正常！
//常见错误: 
//Error: listen EADDRINUSE :::3000
//连续点右侧垃圾桶图标,直到关闭终端窗口为止，重新运行