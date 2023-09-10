// 使用 ES 模块语法
import http from 'http'

// 创建一个 HTTP 服务器实例
const server = http.createServer((req, res) => {
  // 当有请求时，发送一个简单的响应
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

// 服务器监听在3000端口
const port = 3000;
const hostname = '127.0.0.1';

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});