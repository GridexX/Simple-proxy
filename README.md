# Simple Proxy Server

This is a simple Node.js proxy server that allows you to forward HTTP requests to a different target URL. The server uses the http-proxy package to handle requests and proxies them to the specified URL.
How to use

1. Clone the repository to your local machine.
1. Run `npm install` to install dependencies.
1. Set the target URL you want to proxy to by modifying the DEFAULT_API_URL variable in the index.js file.
1. Run npm start to start the server.
1. To make a request to the proxy server, use the URL `http://localhost:3001?target=$TARGET_URL`. Replace `TARGET_URL` with the URL you want to proxy to. If target query parameter is specified, the server will use the DEFAULT_API_URL as the target.

## Customization

The proxy server can be customized to fit your needs. You can modify the following variables in the index.js file:

- `DEFAULT_API_URL`: The default target URL to use if no target query parameter is specified.
- `PORT`: The port number to use for the server. Default is 3001.

## Author

This proxy server was created by @[GridexX](https://github.com/GridexX). Feel free to use it and modify it as needed.