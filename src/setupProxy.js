const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        createProxyMiddleware('maplestory/addop/api', {
            target: 'http://34.82.191.176'
        })
    )
}