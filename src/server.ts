import * as express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { config } from 'dotenv';
config();

const app = express();

app.use(
  '/api',
  createProxyMiddleware({
    target: process.env.PROXY_URL,
    changeOrigin: true,
  })
);

app.listen(process.env.PROXY_PORT);
