// ʹ�� ES ģ���﷨
import http from 'http'

// ����һ�� HTTP ������ʵ��
const server = http.createServer((req, res) => {
  // ��������ʱ������һ���򵥵���Ӧ
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

// ������������3000�˿�
const port = 3000;
const hostname = '127.0.0.1';

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});