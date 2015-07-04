import hapi = require("hapi");
var cfg = require("ls-config");
var log = require("ls-logger");
export = server;

var server = new hapi.Server();
var port = cfg.config("port") || 61518;

server.connection({
	port: port
});

server.start(() => {
	log.info("Started Web API on port " + port);
});
