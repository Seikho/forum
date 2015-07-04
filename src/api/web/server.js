var hapi = require("hapi");
var cfg = require("ls-config");
var log = require("ls-logger");
var server = new hapi.Server();
var port = cfg.config("port") || 61518;
server.connection({
    port: port
});
server.start(function () {
    log.info("Started Web API on port " + port);
});
module.exports = server;
