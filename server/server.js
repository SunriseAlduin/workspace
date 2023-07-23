const express = require('express');
const cors = require('cors');

const app = express();

// Используем cors() middleware
app.use(cors());

app.get('/', (req, res) => {
  const data = { message: 'Hello from the server!' };
  res.json(data);
});

const port = 7070;
app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});

/*
const http = require('http');
const Koa = require('koa');
const koaBody = require('koa-body');

const app = new Koa();

app.use(koaBody({
  urlencoded: true,
  multipart: true,
}));

app.use(async ctx => {
  const {name, phone} = ctx.request.querystring;

  ctx.response.set({
    'Access-Control-Allow-Origin': '*',
  });

  if(subscriptions.has(phone)) {
    ctx.response.status = 400
    ctx.response.body = 'You already subscribed'
    return;
  }

  subscriptions.set(phone, name);
  ctx.response.body = 'Ok';
    
});

const server = http.createServer(app.callback()).listen(7070);
*/