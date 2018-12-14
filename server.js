import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';

const PORT = 8080;
const server = express();

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use('*', cors({ origin: 'http://localhost:1989' }));

server.get('/', (req, res) => {
  res.setHeader('status', '200 OK');
  // Set-Cookie后客户端每次发送请求都会将之前保存的Cookie信息通过Cookie请求头部再发送给服务器。
  res.setHeader('Set-Cookie', 'isVisit=true;domain=.yourdomain.com;path=/;max-age=1000');
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

server.get('/submit', (req, res) => {
  console.log('submit', req.query);
  res.setHeader('status', '200 OK');
  res.end();
});

server.post('/postSubmit', (req, res) => {
  console.log('submit', req.body);
  res.setHeader('status', '200 OK');
  res.end();
});

server.use(express.static('public'));


server.listen(PORT, () => {
  console.log(`Server is now running on http://localhost:${PORT}`);
});