
const httpProxy = require('http-proxy');
const http = require('http');

const DEFAULT_API_URL = "https://example.com"
const PORT = 3001;

const proxy = httpProxy.createProxyServer({
  changeOrigin: true,
  secure: false,
  rejectUnauthorized: false
});


const server = http.createServer((req, res) => {
  // Extract the target from the query parameters or use the Default API url if not found

  const target = req.query?.target || DEFAULT_API_URL;
  console.log('Proxying request to:', target);

  res.setHeader('Access-Control-Allow-Origin', '*');
  proxy.web(req, res, { target });
});

server.listen(PORT);
console.log(`Proxy server running at ${PORT}`);