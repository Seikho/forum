var server = require("./server");
var path = require("path");
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
});
