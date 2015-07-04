import server = require("./server");
import path = require("path");

var staticPath = path.resolve(__dirname, "../../../front");
server.route({
	path: "/{param*}",
	method: "GET",
	handler: {
		directory: {
			path: staticPath,
			listing: false
		}
	}
})