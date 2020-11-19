const http=require("http");
http.createServer((req,res)=>{
  var weather="北京 小雨 26~19";
  res.writeHead(200,{
    "Content-Type":"text/plain;charset=utf-8",
    //请服务器端篡改响应结果中的"寄件人地址"与客户端地址保持一致！
    'Access-Control-Allow-Origin':"http://127.0.0.1:5500"
    // 'Access-Control-Allow-Origin':"*"
  });
  //res.write(weather);
  res.end(weather);
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