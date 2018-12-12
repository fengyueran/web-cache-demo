import express from 'express';
import path from 'path';

const PORT = 8080;
const server = express();


server.get('/', (req, res) => {
  res.setHeader('status', '200 OK');
  // Set-Cookie后客户端每次发送请求都会将之前保存的Cookie信息通过Cookie请求头部再发送给服务器。
  res.setHeader('Set-Cookie', 'isVisit=true;domain=.yourdomain.com;path=/;max-age=1000');
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

server.get('/submit', (req, res) => {
  console.log('submit');
  res.setHeader('status', '200 OK');
  res.end();
});

server.use(express.static('public'));


server.listen(PORT, () => {
  console.log(`Server is now running on http://localhost:${PORT}`);
});